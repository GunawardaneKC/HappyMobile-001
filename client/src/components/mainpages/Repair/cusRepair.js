import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/getRepairs').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.repairID.toLowerCase().includes(searchKey) ||
      post.customerName.toLowerCase().includes(searchKey) ||
      post.device.toLowerCase().includes(searchKey) ||
      post.Brand.toLowerCase().includes(searchKey) ||
      post.Model.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/getRepairs').then(res => {
      if (res.data.success) {
        filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input className='form-control' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
      </div>
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Search your Repairs</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Repair ID</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Device</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>{post.repairID}</td>
              <td>{post.customerName}</td>
              <td>{post.device}</td>
              <td>{post.Brand}</td>
              <td>{post.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;  
