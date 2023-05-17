// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {

//   const [posts, setPosts] = useState([]);
//   // eslint-disable-next-line no-unused-vars
//   const [completedPosts, setCompletedPosts] = useState([]);

//   useEffect(() => {
//     retrievePosts();
//   }, []);

//   const retrievePosts = () => {
//     axios.get('/getwarranty').then(res => {
//       if (res.data.success) {
//         setPosts(res.data.existingPosts);
//       }
//     });
//   };

//   const deletePost = (id) => {
//     axios.delete(`/warranty/delete/${id}`).then(res => {
//       alert('Deleted Successfully');
//       retrievePosts();
//     });
//   };

//   const markAsComplete = (id) => {
//     axios.put(`/warranty/markAsComplete/${id}`).then(res => {
//       alert('Marked as Complete');
//       retrievePosts();
//     });
//   };

//   const filterPosts = (posts, searchKey) => {
//     const result = posts.filter(post =>
//       post.invoiceNo.toLowerCase().includes(searchKey) ||
//       post.cName.toLowerCase().includes(searchKey) ||
//       post.phoneNo.toLowerCase().includes(searchKey) ||
//       post.imeiNo.toLowerCase().includes(searchKey) ||
//       post.model.toLowerCase().includes(searchKey) ||
//       post.status.toLowerCase().includes(searchKey)
//     );
//     setPosts(result);
//   };

//   const handleSearch = (e) => {
//     const searchKey = e.currentTarget.value.toLowerCase();
//     axios.get('/getwarranty').then(res => {
//       if (res.data.success) {
//         filterPosts(res.data.existingPosts, searchKey);
//       }
//     });
//   };

//   return (
//     <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-md mt-8 mx-8">
//   <div className="flex justify-between items-center mb-4">
//     <div className="flex">
//       <div className="rounded-full bg-white px-2 py-2">
//       <i class="fa-solid fa-magnifying-glass text-slate-950"></i>
//       </div>
//       <div className="ml-4">
//         <input className="p-2 bg-transparent border border-gray-300 rounded-md focus:outline-none" type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
//       </div>
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
//         <Link to='/addwarranty'>Add Warranty</Link>
//       </button>
//       <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mr-2">
//         <Link to='/returnitems'>Returned Items</Link>
//       </button>
//       <button className="bg-yellow-400 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg">
//         <Link to='warrantyR'>Get Report</Link>
//       </button>
//     </div>
//   </div>
//   {/* <a className="text-blue-500 mb-4" href={`/warranty/reports`}>Get Report</a> */}
//   <h3 className="text-2xl mb-4">Warranty Items</h3>
//   <table className="w-full mb-8">
//     <thead>
//       <tr>
//         <th scope="col">No</th>
//         <th scope="col">Invoice Number</th>
//         <th scope="col">Customer Name</th>
//         <th scope="col">Phone Number</th>
//         <th scope="col">IMEI Number</th>
//         <th scope="col">Phone Model</th>
//         <th scope="col">Warranty Status</th>
//         <th scope="col">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {posts.map((post, index) => (
//         <tr key={post._id}>
//           <th scope="row">{index + 1}</th>
//           <td>{post.invoiceNo}</td>
//           <td>{post.cName}</td>
//           <td>{post.phoneNo}</td>
//           <td>{post.imeiNo}</td>
//           <td>{post.model}</td>
//           <td>
//             <select
//               className="p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none"
//               aria-label="Default select example"
//               value={post.status}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 const id = post._id;
//                 axios.put(`/warranty/update/${id}`, { status: value })
//                   .then((response) => {
//                     console.log(response.data);
//                     retrievePosts();
//                   })
//                   .catch((error) => {
//                     console.log(error);
//                   });
//               }}
//             >
//               <option value="Pending">Pending</option>
//               <option value="Accepted">Accepted</option>
//               <option value="Accepted and Returned">Accepted & Returned</option>
//             </select>
//           </td>
//           <td>
//             <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg mr-2" onClick={() => markAsComplete(post._id)}>
//               <i className="fa-solid fa-circle-check"></i>&nbsp;Returned
//             </button>
//             <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg" onClick={() => deletePost(post._id)}>
//               <i className="fas fa-trash-alt"></i>&nbsp;Delete
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//   );
// }
// export default Home;  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
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
    <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg py-8 px-6 rounded-md mt-8 mx-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <div className="rounded-full bg-white px-2 py-2">
            <i className="fa-solid fa-magnifying-glass text-slate-950"></i>
          </div>
          <div className="ml-4">
            <input className="p-2 bg-transparent border border-gray-300 rounded-md focus:outline-none" type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
          </div>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
            <Link to='/addwarranty'>Add Warranty</Link>
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mr-2">
            <Link to='/returnitems'>Returned Items</Link>
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg">
            <Link to='warrantyR'>Get Report</Link>
          </button>
        </div>
      </div>
      <h3 className="text-2xl mb-4">Warranty Items</h3>
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Invoice Number</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">IMEI Number</th>
            <th scope="col">Phone Model</th>
            <th scope="col">Warranty Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope="row">{index + 1}</th>
              <td>{post.invoiceNo}</td>
              <td>{post.cName}</td>
              <td>{post.phoneNo}</td>
              <td>{post.imeiNo}</td>
              <td>{post.model}</td>
              <td>
                <select
                  className="p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none"
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
              <td>
                <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg mr-2" onClick={() => markAsComplete(post._id)}>
                  <i className="fa-solid fa-circle-check"></i>&nbsp;Returned
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg" onClick={() => deletePost(post._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete
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
