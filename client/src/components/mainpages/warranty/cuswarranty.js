import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/getwarranty').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.invoiceNo.toLowerCase().includes(searchKey) ||
      post.cName.toLowerCase().includes(searchKey) 
      // post.phoneNo.toLowerCase().includes(searchKey) ||
      // post.imeiNo.toLowerCase().includes(searchKey) ||
      // post.model.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/getwarranty').then(res => {
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
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>About Your Warranty</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Invoice Number</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Phone Model</th>
            <th scope='col'>Warranty Status</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>{post.invoiceNo}</td>
              <td>{post.cName}</td>
              <td>{post.model}</td>
              <td>{post.status}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;  
