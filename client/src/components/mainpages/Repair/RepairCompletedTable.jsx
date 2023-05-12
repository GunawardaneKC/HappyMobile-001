import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompletedTable = () => {
  const [completedPosts, setCompletedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    retrieveCompletedPosts();
  }, []);

  const retrieveCompletedPosts = () => {
    axios.get('/repairCompleted').then(res => {
      if (res.data.success) {
        setCompletedPosts(res.data.completedPosts);
      }
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/repairCompleted/delete/${id}`).then(res => {
      console.log(res.data.message);
      retrieveCompletedPosts();
      alert("Deleted Successfully");
    }).catch(err => {
      console.log(err);
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const filteredPosts = completedPosts.filter(post => {
    const { customerName, device, Brand, phoneNum } = post;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      customerName.toLowerCase().includes(lowerCaseQuery) ||
      device.toLowerCase().includes(lowerCaseQuery) ||
      Brand.toLowerCase().includes(lowerCaseQuery) ||
      phoneNum.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input className='form-control' type="search" placeholder='Search' value={searchQuery} onChange={handleSearch} />
        </div>
      </div>
      <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/repair/reports`}>Get Report</a> 
      <h3 className="mt-4">Completed Repairs</h3>
      <div className="table-responsive mt-4">
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Repair No</th>
              <th scope='col'>Repair ID</th>
              <th scope='col'>Customer Name</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Customer Device</th>
              <th scope='col'>Given Date</th>
              <th scope='col'>Repaired Price</th>
              <th scope='col'>Damaged Reason</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post, index) => (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/postRepair/${post._id}}`} style={{ textDecoration: 'none' }}>
                    {post.repairID}
                  </Link>
                </td>
                <td>{post.customerName}</td>
                <td>{post.phoneNum}</td>
                <td>{post.device}</td>
                <td>{post.givenDate}</td>
                <td>{post.repairPrize}</td>
                <td>{post.reason}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(post._id)}>Delete</button>
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default CompletedTable;