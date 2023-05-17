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
    <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg p-6 mt-8 mx-8 rounded-md">
  <div className="mb-4">
    <input
      type="search"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearch}
      className="w-1/5 p-2 border border-gray-300 rounded-md focus:outline-none"
    />
  </div>
  <div className='my-6'>
      <button className="bg-yellow-400 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg">
        <Link to='/warranty/reports'>Get Report</Link>
      </button>
  </div>
  {/* <a href="/repair/reports" className="text-blue-500 hover:text-blue-600">Get Report</a> */}
  <h3 className="mb-4 text-2xl my-4">Returned Items</h3>
  <div>
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2">No</th>
          <th className="py-2">Invoice Number</th>
          <th className="py-2">Customer Name</th>
          <th className="py-2">Phone Number</th>
          <th className="py-2">IMEI Number</th>
          <th className="py-2">Phone Model</th>
          <th className="py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map((post, index) => (
          <tr key={post._id}>
            <td className="py-2">{index + 1}</td>
            <td className="py-2">{post.invoiceNo}</td>
            <td className="py-2">{post.cName}</td>
            <td className="py-2">{post.phoneNo}</td>
            <td className="py-2">{post.imeiNo}</td>
            <td className="py-2">{post.model}</td>
            <td className="py-2">
              <button onClick={() => handleDelete(post._id)} className="text-red-500 hover:text-red-600">Delete</button>
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