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
    <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg p-6 rounded-md mt-8 mx-8">
  <div className="mb-4">
    <input
      type="search"
      placeholder="Search"
      name="searchQuery"
      onChange={handleSearch}
      className="w-1/5 p-2 border border-gray-300 rounded-md focus:outline-none"
    />
  </div>
  <h3 className="mb-4 text-3xl text-cyan-500 font-bold">About Your Warranty</h3>
  <div>
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2">No</th>
          <th className="py-2">Invoice Number</th>
          <th className="py-2">Customer Name</th>
          <th className="py-2">Phone Model</th>
          <th className="py-2">Warranty Status</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post._id}>
            <td className="py-2">{index + 1}</td>
            <td className="py-2">{post.invoiceNo}</td>
            <td className="py-2">{post.cName}</td>
            <td className="py-2">{post.model}</td>
            <td className="py-2">{post.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default Home;
