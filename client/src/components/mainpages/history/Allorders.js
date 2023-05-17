// import React, {useState, useEffect, useContext} from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const Ord = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     retrievePosts();
//   }, []);

//   const retrievePosts = () => {
//     axios.get('/Ord').then(res => {
//       if (res.data.success) {
//         setPosts(res.data.existingPosts);
//       }
//     });
//   };

//   // const deletePost = (id) => {
//   //   axios.delete(`payment/delete/${id}`).then(res => {
//   //     alert('Deleted Successfully');
//   //     retrievePosts();
//   //   });
//   // };

//   const filterPosts = (posts, searchKey) => {
//     const result = posts.filter(post =>
//       post.orderId.toLowerCase().includes(searchKey) ||
//       post.email.toLowerCase().includes(searchKey) ||
//       post.name.toLowerCase().includes(searchKey)
//     );
//     setPosts(result);
//   };

//   const handleSearch = (e) => {
//     const searchKey = e.currentTarget.value.toLowerCase();
//     axios.get('/Ord').then(res => {
//       if (res.data.success) {
//         filterPosts(res.data.existingPosts, searchKey);
//       }
//     });
//   };

//   return (
//     <div className="mt-8 mx-auto max-w-7xl text-gray-950 ml-14">
//   <div className="flex justify-between items-center">
//     <div className="flex-1">
//       <div className="relative text-gray-600 focus-within:text-gray-400">
//         <span className="absolute inset-y-0 text-center-0 flex items-center pl-2">
//           <i className="fas fa-search"></i>
//         </span>
//         <input
//           className="py-2 w-64 pl-10 placeholder-gray-500 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//           type="search"
//           placeholder="Search"
//           name="searchQuery"
//           onChange={handleSearch}
//         />
//       </div>

//    <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/orderRep`}>Get Report</a> 

//   <h3 className="text-2xl mt-8 mb-4 font-bold text-zinc-50">Orders</h3>
//   <table className="min-w-full divide-y divide-gray-200">
//   <thead className='bg-blue-500 text-lg'>
//     <tr>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">No
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Order ID
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Name
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Email Address
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Payment
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Details
//       </th>
//       <th style={{ border: "2px solid blue" }} className="px-6 py-3">Action</th>
//     </tr>
//   </thead>
//   <tbody className="bg-blue-400 divide-y divide-gray-200">
//     {posts.map((post, index) => (
//       <tr key={post._id}>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post._id}</td>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post.name}</td>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post.email}</td>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
//           <select
//             className="border border-gray-300 rounded-md text-gray-500 py-1 px-3"
//             aria-label="Default select example"
//             value={post.payment}
//             onChange={(e) => {
//               const value = e.target.value;
//               const id = post._id;
//               axios
//                 .put(`/payment/update/${id}`, { payment: value })
//                 .then((response) => {
//                   console.log(response.data);
//                   retrievePosts();
//                 })
//                 .catch((error) => {
//                   console.log(error);
//                 });
//             }}
//           >
//             <option value="Pending">Pending</option>
//             <option value="Paid">Paid</option>
//           </select>
//         </td>
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
//           <table className="table-auto">
//             <thead>
//               <tr className="text-stone-950">
//                 <th className="">Product ID</th>
//                 <th className="">Products</th>
//                 <th className="">Quantity</th>
//                 <th className="">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {post.cart.map((item) => (
//                 <tr key={item._id} className="">
//                   <td style={{ border: "2px solid blue" }} className="">{item.product_id}</td>
//                   <td style={{ border: "2px solid blue" }} className="">{item.title}</td>
//                   <td style={{ border: "2px solid blue" }} className="">{item.quantity}</td>
//                   <td style={{ border: "2px solid blue" }} className="">LKR {item.price * item.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </td>
//         {/* <td className="px-6 py-4 whitespace-nowrap">
// =======
//         <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
//           &nbsp;
//           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
//                 <i className='fas fa-trash-alt'></i>&nbsp;Delete
//               </button>
//             </td> */}
//           </tr>
//         ))}
//       </tbody>
//   </table>
//   </div>
//   );
// }
//   export default Ord;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Ord = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/Ord').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.orderId.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.name.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/Ord').then(res => {
      if (res.data.success) {
        filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  return (
    <div className="mt-8 mx-auto max-w-7xl text-gray-950 ml-14">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 text-center-0 flex items-center pl-2">
              <i className="fas fa-search"></i>
            </span>
            <input
              className="py-2 w-64 pl-10 placeholder-gray-500 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={handleSearch}
            />
          </div>
        </div>
        <a className="btn btn-primary" style={{ textDecoration: 'none' }} href={`/orderRep`}>Get Report</a>
      </div>
      <h3 className="text-2xl mt-8 mb-4 font-bold text-zinc-50">Orders</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className='bg-blue-500 text-lg'>
          <tr>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">No</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Order ID</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Name</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Email Address</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Payment</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3 text-center text-gray-900 uppercase tracking-wider">Details</th>
            <th style={{ border: "2px solid blue" }} className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-blue-400 divide-y divide-gray-200">
          {posts.map((post, index) => (
            <tr key={post._id}>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post._id}</td>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post.name}</td>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">{post.email}</td>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
                <select
                  className="border border-gray-300 rounded-md text-gray-500 py-1 px-3"
                  aria-label="Default select example"
                  value={post.payment}
                  onChange={(e) => {
                    const value = e.target.value;
                    const id = post._id;
                    axios
                      .put(`/payment/update/${id}`, { payment: value })
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
                  <option value="Paid">Paid</option>
                </select>
              </td>
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
                <table className="table-auto">
                  <thead>
                    <tr className="text-stone-950">
                      <th className="">Product ID</th>
                      <th className="">Products</th>
                      <th className="">Quantity</th>
                      <th className="">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.cart.map((item) => (
                      <tr key={item._id} className="">
                        <td style={{ border: "2px solid blue" }} className="">{item.product_id}</td>
                        <td style={{ border: "2px solid blue" }} className="">{item.title}</td>
                        <td style={{ border: "2px solid blue" }} className="">{item.quantity}</td>
                        <td style={{ border: "2px solid blue" }} className="">LKR {item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
              <td style={{ border: "2px solid blue" }} className="px-6 py-4 whitespace-nowrap">
                &nbsp;
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ord;
