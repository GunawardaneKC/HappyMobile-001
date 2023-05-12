// import React, {useContext} from 'react'
// import React, { useState, useEffect } from 'react';
// import {GlobalState} from '../../../GlobalState'
// import axios from 'axios'

// const Pro = () => {
//   const state = useContext(GlobalState)
//   // // const [cart, setCart] = state.userAPI.cart
//   const [token] = state.token
//   // // const [total, setTotal] = useState(0)

//   // const user = async () =>{
//   //     await axios.get('/user/infor', {
//   //         headers: {Authorization: token}
//   //     })
//   // }

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     retrievePosts();
//   }, []);

//   const retrievePosts = () => {
//     axios.get('/user/infor').then(res => {
//       headers: {Authorization: token}
//       if (res.data.success) {
//         setPosts(res.data.existingPosts);
//       }
//     });
//   };


//   return (
//       <div>
//           {
//               // user.map(user => (
//                   // <div className="detail cart" key={product._id}>
//                   //     <img src={product.images.url} alt="" />

//                       <div className="box-detail">
//                           <h2>{user.name}</h2>

//                           {/* <h3>{product.price * product.quantity}</h3>
//                           <p>{product.description}</p> */}
//                           <p>{user.email}</p>

//                           {/* <div className="amount">
//                               <button onClick={() => decrement(product._id)}> - </button>
//                               <span>{product.quantity}</span>
//                               <button onClick={() => increment(product._id)}> + </button>
//                           </div> */}
                          
//                           {/* <div className="delete" 
//                           onClick={() => removeProduct(product._id)}>
//                               X
//                           </div> */}
//                       </div>
//                   // </div>
              
//           }

//       </div>

//   )
// }

// export default Pro