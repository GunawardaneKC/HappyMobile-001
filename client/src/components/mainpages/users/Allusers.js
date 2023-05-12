// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const Cus = () => {

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     retrievePosts();
//   }, []);

//   const retrievePosts = () => {
//     axios.get('user/users').then(res => {
//       if (res.data.success) {
//         setPosts(res.data.existingPosts);
//       }
//     });
//   };


//   const filterPosts = (posts, searchKey) => {
//     const result = posts.filter(post =>
//       post.email.toLowerCase().includes(searchKey)||
//       post.NIC.toLowerCase().includes(searchKey)

//     );
//     setPosts(result);
//   };

//   const handleSearch = (e) => {
//     const searchKey = e.currentTarget.value.toLowerCase();
//     axios.get('/user/users').then(res => {
//       if (res.data.success) {
//         filterPosts(res.data.existingPosts, searchKey);
//       }
//     });
//   };

//   return (
//     <div className='container'>
//       <div className="row">
//         <div className="col-lg-9 mt-2 mb-2">
//         </div>
//         <div className="col-lg-3 mt-2 mb-2">
//           <input className='form-control' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
//         </div>
//       </div>
      
//       <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Users</h3>
//       <table className='table table-hover' style={{ marginTop: '40px' }}>
//         <thead>
//           <tr>
//           <th scope='col'>No</th>
//             <th scope='col'>User Name</th>
//             <th scope='col'>Email Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((post, index) => (
//             <tr key={post._id}>
//               <th scope='row'>{index + 1}</th>
//               <td>{post.name}</td>
//               <td>{post.email}</td>	
//             </tr>
//           ))}
//         </tbody>
// 	</table>
//     </div>
//   );
// }
// export default Cus;  
