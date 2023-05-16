import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompletedTable = () => {
  const [completedPosts, setCompletedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    retrieveCompletedPosts();
  }, []);

  const retrieveCompletedPosts = () => {
    axios.get('/warrantyCompleted').then(res => {
      if (res.data.success) {
        setCompletedPosts(res.data.completedPosts);
      }
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/warrantyCompleted/delete/${id}`).then(res => {
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
    const { invoiceNo, cName, phoneNo, imeiNo } = post;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
        invoiceNo.toLowerCase().includes(lowerCaseQuery) ||
        cName.toLowerCase().includes(lowerCaseQuery) ||
        phoneNo.toLowerCase().includes(lowerCaseQuery) ||
        imeiNo.toLowerCase().includes(lowerCaseQuery)
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
      <h3 className="mt-4">Returned Items</h3>
      <div className="table-responsive mt-4">
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'> No </th>
              <th scope='col'>Invoice Number</th>
              <th scope='col'>Customer Name</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Imei Number</th>
              <th scope='col'>Phone Model</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post, index) => (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>{post.invoiceNo}</td>
                <td>{post.cName}</td>
                <td>{post.phoneNo}</td>
                <td>{post.imeiNo}</td>
                <td>{post.model}</td>
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