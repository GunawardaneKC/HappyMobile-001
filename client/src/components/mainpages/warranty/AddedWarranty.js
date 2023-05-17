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
    axios.get('/getwarranty').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/warranty/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };

  const markAsComplete = (id) => {
    axios.put(`/warranty/markAsComplete/${id}`).then(res => {
      alert('Marked as Complete');
      retrievePosts();
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.invoiceNo.toLowerCase().includes(searchKey) ||
      post.cName.toLowerCase().includes(searchKey) ||
      post.phoneNo.toLowerCase().includes(searchKey) ||
      post.imeiNo.toLowerCase().includes(searchKey) ||
      post.model.toLowerCase().includes(searchKey) ||
      post.status.toLowerCase().includes(searchKey)
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
      <div>
        <button className="btn btn-success"><Link to='/addwarranty' style={{textDecoration: 'none', color:'Black'}}>Add Warranty</Link></button>&nbsp;
        <button className="btn btn-primary"> <br></br>
          <Link to='/returnitems' style={{textDecoration: 'none', color:'Black'}}>Returned Items</Link>
        </button>
      </div>

      <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/warrantyR`}>Get Report</a> 

      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Warranty Items</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Invoice Number</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Imei Number</th>
            <th scope='col'>Phone Model</th>
            <th scope='col'>Warranty Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>{post.invoiceNo}</td>
              <td>{post.cName}</td>
              <td>{post.phoneNo}</td>
              <td>{post.imeiNo}</td>
              <td>{post.model}</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={post.status}
                  onChange={(e) => {
                    const value = e.target.value;
                    const id = post._id;
                    axios.put(`/warranty/update/${id}`, { status: value })
                      .then((response) => {
                        console.log(response.data);
                        retrievePosts();
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Accepted and Returned">Accepted & Returned</option>
                </select>
              </td>
              <td><button className="btn btn-success" onClick={() => markAsComplete(post._id)}>
                  <i className="fa-solid fa-circle-check"></i>&nbsp;Returned
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
