import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

const Ord = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/delivery').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/delivery/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.OrderID.toLowerCase().includes(searchKey) ||
      post.Address.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.NIC.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/delivery').then(res => {
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

      <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/warranty/reports`}>Get Report</a> 
     
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Deliveries</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Order ID</th>
            <th scope='col'>Recipient's Name</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Recipient's Address</th>
            <th scope='col'>NIC</th>
            <th scope='col'>Recipient's email</th>
            <th scope='col'>Delivery Status</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>{post.OrderID}</td>
              <td>{post.Name}</td>
              <td>{post.phone}</td>
              <td>{post.Address}</td>
              <td>{post.NIC}</td>
              <td>{post.email}</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={post.Status}
                  onChange={(e) => {
                    const value = e.target.value;
                    const id = post._id;
                    axios.put(`/delivery/update/${id}`, { Status: value })
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
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td>
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
  export default Ord;