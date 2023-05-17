// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Emp = () => {

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     retrievePosts();
//   }, []);

//   const retrievePosts = () => {
//     axios.get('/Emp').then(res => {
//       if (res.data.success) {
//         setPosts(res.data.existingPosts);
//       }
//     });
//   };

//   const deletePost = (id) => {
//     axios.delete(`/Emp/delete/${id}`).then(res => {
//       alert('Deleted Successfully');
//       retrievePosts();
//     });
//   };


//   const filterPosts = (posts, searchKey) => {
//     const result = posts.filter(post =>
//       post.first_name.toLowerCase().includes(searchKey)||
//       post.email.toLowerCase().includes(searchKey)||
//       post.NIC.toLowerCase().includes(searchKey) 

//     );
//     setPosts(result);
//   };

//   const handleSearch = (e) => {
//     const searchKey = e.currentTarget.value.toLowerCase();
//     axios.get('/Emp').then(res => {
//       if (res.data.success) {
//         filterPosts(res.data.existingPosts, searchKey);
//       }
//     });
//   };

//   return (
//     <div className='mx-auto max-w-7xl mt-16'>
//       <div className="flex items-center justify-between mb-8">
//       <div className='flex items-center'>
//         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
//         <i className='fas fa-search text-gray-500'></i>
//       </div>  
//           <input className='ml-3 py-2 px-4 w-80 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-cyan-500 text-gray-950' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
//         </div>
//         <div className='flex space-x-4'>
//           <button className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md"><Link to='/add/emp' style={{textDecoration: 'none'}}>Add New Employee</Link></button>&nbsp;
//         </div>
//       </div>
//  master
//       <div>
//         <button className="btn btn-success"><Link to='/add/emp' style={{textDecoration: 'none', color:'black'}}>Add New Employee</Link></button>&nbsp;
//       </div>

//       <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/empR`}>Get Report</a> 

//       <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Employees</h3>
//       <table className='table table-hover' style={{ marginTop: '40px' }}>
//       <h3 className='mb-4 mt-8 text-lg font-medium'>Employees</h3>
//       <table className='w-full border-collapse border border-gray-400'>
//  oshStyles
//         <thead>
//           <tr>
//           <th scope='col'>No</th>
//             <th scope='col'>Employee ID</th>
//             <th scope='col'>First Name</th>
//             <th scope='col'>Last Name</th>
//             <th scope='col'>Email Address</th>
//             <th scope='col'>Phone Number</th>
//             <th scope='col'>Address</th>
//             <th scope='col'>NIC</th>
//             <th scope='col'>Allocated Date</th>
//             <th scope='col'></th>
//           <tr class="bg-purple-950">
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>No</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>First Name</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Last Name</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Email Address</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Phone Number</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Address</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>NIC</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Allocated Date</th>
//             <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((post, index) => (
//             <tr key={post._id} className='bg-transparent'>
//               <th class="px-4 py-2 text-left border border-gray-400 " scope='row'>{index + 1}</th>
//               {/* <td>
//                 <Link to={`/Emp/${post._id}`} style={{ textDecoration: 'none' }}>
//                   {post.repairID}
//                 </Link>
//               </td> */}
//               <td>{post.empID}</td>
//               <td>{post.first_name}</td>
//               <td>{post.last_name}</td>
//               <td>{post.email}</td>
//               <td>{post.Phone}</td>
// 		          <td>{post.Address}</td>
//               <td>{post.NIC}</td>
//               <td>{post.date}</td>		
//               <td>
//                 <Link to={`/Editemp/${post._id}`} className='btn btn-warning'>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.first_name}</td>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.last_name}</td>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.email}</td>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.Phone}</td>
// 		          <td class="px-4 py-2 text-left border border-gray-400">{post.Address}</td>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.NIC}</td>
//               <td class="px-4 py-2 text-left border border-gray-400">{post.date}</td>		
//               <td class="px-4 py-2 text-left border border-gray-400 font-bold">
//                 <Link to={`/Editemp/${post._id}`} className='text-amber-400 hover:underline mr-6'>
//                   <i className='fas fa-edit'></i>&nbsp;Edit
//                 </Link>
//                 &nbsp;
//                 <button className='text-red-800 hover:underline' onClick={() => deletePost(post._id)}>
//                   <i className='fas fa-trash-alt'></i>&nbsp;Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
// 	</table>
//     </div>
//   );
// }
// export default Emp;  

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
    <div className='mx-auto max-w-7xl mt-16'>
      <div className="flex items-center justify-between mb-8">
        <div className='flex items-center'>
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <i className='fas fa-search text-gray-500'></i>
          </div>
          <input className='ml-3 py-2 px-4 w-80 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-cyan-500 text-gray-950' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
        <div className='flex space-x-4'>
          <button className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md">
            <Link to='/add/emp' style={{ textDecoration: 'none', color: 'white' }}>Add New Employee</Link>
          </button>
        </div>
      </div>

      <a className="bg-yellow-400 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg" style={{textDecoration:'none'}} href={`/empR`}>Get Report</a> 
      <h3 className='mb-4 mt-8 text-3xl font-medium'>Employees</h3>

      <table className='w-full border-collapse border border-gray-400'>
        <thead>
          <tr className="bg-purple-950">
            <th className="px-4 py-2 text-left border border-gray-400">No</th>
            <th className="px-4 py-2 text-left border border-gray-400">First Name</th>
            <th className="px-4 py-2 text-left border border-gray-400">Last Name</th>
            <th className="px-4 py-2 text-left border border-gray-400">Email Address</th>
            <th className="px-4 py-2 text-left border border-gray-400">Phone Number</th>
            <th className="px-4 py-2 text-left border border-gray-400">Address</th>
            <th className="px-4 py-2 text-left border border-gray-400">NIC</th>
            <th className="px-4 py-2 text-left border border-gray-400">Allocated Date</th>
            <th className="px-4 py-2 text-left border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id} className='bg-transparent'>
              <td className="px-4 py-2 text-left border border-gray-400">{index + 1}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.first_name}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.last_name}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.email}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.Phone}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.Address}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.NIC}</td>
              <td className="px-4 py-2 text-left border border-gray-400">{post.date}</td>
              <td className="px-4 py-2 text-left border border-gray-400 font-bold">
                <Link to={`/Editemp/${post._id}`} className='text-amber-400 hover:underline mr-6'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
                <button className='text-red-800 hover:underline' onClick={() => deletePost(post._id)}>
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
