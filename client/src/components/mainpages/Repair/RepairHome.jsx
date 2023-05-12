import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [completedPosts, setCompletedPosts] = useState([]);

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

  const deletePost = (id) => {
    axios.delete(`/repair/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };

  const markAsComplete = (id) => {
    axios.put(`/repair/markAsComplete/${id}`).then(res => {
      alert('Marked as Complete');
      retrievePosts();
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.repairID.toLowerCase().includes(searchKey) ||
      post.customerName.toLowerCase().includes(searchKey) ||
      post.phoneNum.toLowerCase().includes(searchKey) ||
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
      <div>
        <button className="btn btn-success"><Link to='/addRepair' style={{textDecoration: 'none', color:'Black'}}>Add New Repair</Link></button>&nbsp;
        <button className="btn btn-primary"> <br></br>
          <Link to='/completedRepair' style={{textDecoration: 'none', color:'Black'}}>View Completed Repairs</Link>
        </button>
      </div>
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>All Repairs</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Repair ID</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Device</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>
                <Link to={`/postRepair/${post._id}`} style={{ textDecoration: 'none' }}>
                  {post.repairID}
                </Link>
              </td>
              <td>{post.customerName}</td>
              <td>{post.phoneNum}</td>
              <td>{post.device}</td>
              <td>{post.Brand}</td>
              <td>
                <Link to={`/editRepair/${post._id}`} className='btn btn-warning'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
                &nbsp;
                <button className="btn btn-success" onClick={() => markAsComplete(post._id)}>
                  <i className="fa-solid fa-circle-check"></i>&nbsp;Complete
                </button>
                &nbsp;
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;  
