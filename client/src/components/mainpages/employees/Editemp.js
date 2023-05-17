// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function EditPost() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState({});
//   const [updatedPost, setUpdatedPost] = useState({
//       empID:'',
//       first_name:"",
//       last_name:"",
//       email:"",
//       Address:"",
//       NIC:"",
//       Phone:"",
//   });

//   useEffect(() => {
//     axios.get(`/Emp/${id}`).then((res) => {
//       if (res.data.success) {
//         setPost(res.data.post);
//         setUpdatedPost({
//           empID: res.data.post.empID,
//           first_name: res.data.post.first_name,
//           last_name: res.data.post.last_name,
//           email: res.data.post.email,
//           Address: res.data.post.Address,
//           NIC: res.data.post.NIC,
//           Phone: res.data.post.Phone,
//         });
//       }
//     });
//   }, [id]);
//   console.log(post);

//   const {empID,first_name, last_name, email, Address, NIC, Phone} = updatedPost;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setUpdatedPost({
//       ...updatedPost,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       empID : updatedPost.empID,
//       first_name: updatedPost.first_name,
//       last_name: updatedPost.last_name,
//       email: updatedPost.email,
//       Address: updatedPost.Address,
//       NIC: updatedPost.NIC,
//       Phone: updatedPost.Phone,
//     };

//     axios.put(`/Emp/update/${id}`, data).then((res) => {
//       console.log(res.data);
//       alert('Post updated successfully!');
//       setUpdatedPost({
//         empID:"",
//         first_name:"",
//         last_name:"",
//         email:"",
//         Address:"",
//         NIC:"",
//         Phone:"",
//       });
//       navigate('/Emp');
//     });
//   };

//   return (
//     <div className='max-w-lg mx-auto my-8'>
//       <h4 className='text-3xl font-bold mb-4'>Edit Employee</h4>
//       <hr />
//       <form onSubmit={handleFormSubmit}>

//       <div className='form-group'>
//           <label>Employee ID</label>
//           <input
//             type='text'
//             className='form-control'
//             name='empID'
//             value={empID}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='form-group'>
//       <form className='mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-slate-900' onSubmit={handleFormSubmit}>
//         <div className='mb-4'>
//           <label>First name:</label>
//           <input
//             type='text'
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='first_name'
//             value={first_name}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='mb-4'>
//           <label>Last_name:</label>
//           <input
//             type='text'
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='last_name'
//             value={last_name}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='mb-4'>
//           <label>Phone:</label>
//           <input
//             type='number'
//             pattern="[0-9]{10}"
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='Phone'
//             value={Phone}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='mb-4'>
//           <label>Address:</label>
//           <input
//             type='text'
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='Address'
//             value={Address}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='mb-4'>
//           <label>Email:</label>
//           <input
//             type='text'
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='email'
//             value={email}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className='mb-4'>
//           <label>NIC:</label>
//           <input
//             type='text'
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='NIC'
//             value={NIC}
//             onChange={handleInputChange}
//           />
//         </div>

//         <button
//           type='submit'
//           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
//           style={{ marginTop: '15px' }}
//         >
//           <i className='far fa-check-square'></i>
//           &nbsp;Update
//         </button>
//       </form>
// </div>
// );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    empID: '',
    first_name: '',
    last_name: '',
    email: '',
    Address: '',
    NIC: '',
    Phone: '',
  });

  useEffect(() => {
    axios.get(`/Emp/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          empID: res.data.post.empID,
          first_name: res.data.post.first_name,
          last_name: res.data.post.last_name,
          email: res.data.post.email,
          Address: res.data.post.Address,
          NIC: res.data.post.NIC,
          Phone: res.data.post.Phone,
        });
      }
    });
  }, [id]);
  console.log(post);

  const { empID, first_name, last_name, email, Address, NIC, Phone } = updatedPost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPost({
      ...updatedPost,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      empID: updatedPost.empID,
      first_name: updatedPost.first_name,
      last_name: updatedPost.last_name,
      email: updatedPost.email,
      Address: updatedPost.Address,
      NIC: updatedPost.NIC,
      Phone: updatedPost.Phone,
    };

    axios.put(`/Emp/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        empID: '',
        first_name: '',
        last_name: '',
        email: '',
        Address: '',
        NIC: '',
        Phone: '',
      });
      navigate('/Emp');
    });
  };

  return (
    <div className='max-w-lg mx-auto my-8'>
      <h4 className='text-3xl font-bold mb-4'>Edit Employee</h4>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Employee ID</label>
          <input
            type='text'
            className='form-control'
            name='empID'
            value={empID}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>First name:</label>
          <input
            type='text'
            className='form-control'
            name='first_name'
            value={first_name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Last_name:</label>
          <input
            type='text'
            className='form-control'
            name='last_name'
            value={last_name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone:</label>
          <input
            type='number'
            pattern="[0-9]{10}"
            className='form-control'
            name='Phone'
            value={Phone}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Address:</label>
          <input
            type='text'
            className='form-control'
            name='Address'
            value={Address}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input
            type='text'
            className='form-control'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>NIC:</label>
          <input
            type='text'
            className='form-control'
            name='NIC'
            value={NIC}
            onChange={handleInputChange}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          style={{ marginTop: '15px' }}
        >
          <i className='far fa-check-square'></i>
          &nbsp;Update
        </button>
      </form>
    </div>
  );
}
