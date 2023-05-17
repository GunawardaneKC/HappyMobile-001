import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Emp = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/Emp').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/Emp/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };


  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.first_name.toLowerCase().includes(searchKey)||
      post.email.toLowerCase().includes(searchKey)||
      post.NIC.toLowerCase().includes(searchKey) 

    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/Emp').then(res => {
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
        <button className="btn btn-success"><Link to='/add/emp' style={{textDecoration: 'none', color:'black'}}>Add New Employee</Link></button>&nbsp;
      </div>

      <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/empR`}>Get Report</a> 

      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Employees</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
          <th scope='col'>No</th>
            <th scope='col'>Employee ID</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Address</th>
            <th scope='col'>NIC</th>
            <th scope='col'>Allocated Date</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              {/* <td>
                <Link to={`/Emp/${post._id}`} style={{ textDecoration: 'none' }}>
                  {post.repairID}
                </Link>
              </td> */}
              <td>{post.empID}</td>
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.email}</td>
              <td>{post.Phone}</td>
		          <td>{post.Address}</td>
              <td>{post.NIC}</td>
              <td>{post.date}</td>		
              <td>
                <Link to={`/Editemp/${post._id}`} className='btn btn-warning'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
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
export default Emp;  
