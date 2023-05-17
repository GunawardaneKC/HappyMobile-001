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
    <div className="container mx-auto px-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = "/repair/reports"}>Get Report</button> 
  <div className="flex justify-between items-center my-8">
    <div className="flex-1">
      <input className="border border-gray-400 py-2 px-4 rounded-lg w-full text-gray-950" type="search" placeholder='Search' value={searchQuery} onChange={handleSearch} />
    </div>

  </div>
  <h3 className="text-lg font-medium mb-4">Completed Repairs</h3>
  <div className="overflow-x-auto">
    <table className="table-auto border-collapse border border-gray-400">
      <thead className='bg-cyan-700'>
        <tr>
          <th className="px-4 py-2 border border-gray-400">Repair ID</th>
          <th className="px-4 py-2 border border-gray-400">Customer Name</th>
          <th className="px-4 py-2 border border-gray-400">Phone Number</th>
          <th className="px-4 py-2 border border-gray-400">Customer Device</th>
          <th className="px-4 py-2 border border-gray-400">Given Date</th>
          <th className="px-4 py-2 border border-gray-400">Repaired Price</th>
          <th className="px-4 py-2 border border-gray-400">Damaged Reason</th>
          <th className="px-4 py-2 border border-gray-400">Action</th>
        </tr>
      </thead>
      <tbody className='bg-cyan-400 text-slate-900'>
        {filteredPosts.map((post, index) => (
          <tr key={post._id}>
            <td className="px-4 py-2 border border-gray-400">
              <Link to={`/postRepair/${post._id}`} className="text-slate-900 hover:underline" style={{ textDecoration: 'none' }}>
                {post.repairID}
              </Link>
            </td>
            <td className="px-4 py-2 border border-gray-400">{post.customerName}</td>
            <td className="px-4 py-2 border border-gray-400">{post.phoneNum}</td>
            <td className="px-4 py-2 border border-gray-400">{post.device}</td>
            <td className="px-4 py-2 border border-gray-400">{post.givenDate}</td>
            <td className="px-4 py-2 border border-gray-400">{post.repairPrize}</td>
            <td className="px-4 py-2 border border-gray-400">{post.reason}</td>
            <td className="px-4 py-2 border border-gray-400">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(post._id)}>Delete</button>
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