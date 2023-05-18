import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className='mx-auto max-w-7xl mt-16'>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-lg'>
          <i className='fas fa-search text-gray-500'></i>
        </div>
        <input className='ml-3 py-2 px-4 w-80 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-cyan-500 text-gray-950 bg-white' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
      </div>
      <h3 className='mb-4 text-lg font-medium'>Search your Repairs</h3>
      <table className='w-full border-collapse border border-gray-400'>
        <thead>
          <tr class="bg-purple-950">
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>No</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Repair ID</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Customer Name</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Device</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Brand</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id} class="bg-purple-600">
              <td class="px-4 py-2 text-left border border-gray-400 ">{index + 1}</td>
              <td class="px-4 py-2 text-left border border-gray-400 font-bold hover:underline hover:text-cyan-400">
          <Link className="text-cyan-400 hover:underline" to={`/postRepair/${post._id}`} style={{ textDecoration: 'none' }}>
            {post.repairID}
          </Link>
        </td>
              <td class="px-4 py-2 text-left border border-gray-400 ">{post.customerName}</td>
              <td class="px-4 py-2 text-left border border-gray-400 ">{post.device}</td>
              <td class="px-4 py-2 text-left border border-gray-400 ">{post.Brand}</td>
              <td class="px-4 py-2 text-left border border-gray-400 ">{post.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;  
