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
    
    <div className='mx-auto max-w-7xl mt-16'>
  <div className='flex items-center justify-between mb-8'>
    <div className='flex items-center'>
      <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-lg'>
        <i className='fas fa-search text-gray-500'></i>
      </div>

    </div>
    <div className='flex space-x-4'>
      <button className='py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md shadow-lg'>
        <Link to='/addRepair' style={{ textDecoration: 'none' }}>Add New Repair</Link>
      </button>
      <button className='py-2 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-lg'>
        <Link to='/completedRepair' style={{ textDecoration: 'none' }}>View Completed Repairs</Link>
      </button>
    </div>
  </div>
  <h3 className='mb-4 text-lg font-medium'>Pending Repairs</h3>
  <table class="w-full border-collapse border border-gray-400">
  <thead>
    <tr class="bg-purple-950">
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">No</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Repair ID</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Customer Name</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Phone Number</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Device</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Model</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Status</th>
      <th class="px-4 py-2 text-left border border-gray-400" scope="col">Actions</th>
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
        <td class="px-4 py-2 text-left border border-gray-400">{post.customerName}</td>
        <td class="px-4 py-2 text-left border border-gray-400">{post.phoneNum}</td>
        <td class="px-4 py-2 text-left border border-gray-400">{post.device}</td>
        <td class="px-4 py-2 text-left border border-gray-400">{post.Model}</td>
         <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={post.status}
                  onChange={(e) => {
                    const value = e.target.value;
                    const id = post._id;
                    axios.put(`/repair/update/${id}`, { status: value })
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
                  <option value="Completed">Completed</option>
                </select>
              </td>
        <td class="px-4 py-2 text-left border border-gray-400 font-bold">
          <Link to={`/editRepair/${post._id}`} class="text-amber-400 hover:underline mr-6">
            <i class="fas fa-edit"></i>&nbsp;Edit
          </Link>
          <button class="text-green-400 hover:underline mr-6" onClick={() => markAsComplete(post._id)}>
            <i class="fa-solid fa-circle-check"></i>&nbsp;Complete
          </button>
          <button class="text-red-800 hover:underline" onClick={() => deletePost(post._id)}>
            <i class="fas fa-trash-alt"></i>&nbsp;Delete
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
