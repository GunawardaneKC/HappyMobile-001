// import React, { useState } from 'react';

// import React, { Component } from 'react'
// import axios from 'axios';

// const CreatePosts = () => {
//   const [formData, setFormData] = useState({
//     empID:'',
//     first_name: '',
//     last_name: '',
//     email: '',
//     Address: '',
//     NIC: '',
//     Phone: '',
//     date: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.empID) {
//       newErrors.first_name = 'Employee ID is required';
//     }

//     if (!formData.first_name) {
//       newErrors.first_name = 'First Name is required';
//     }

//     if (!formData.last_name) {
//       newErrors.last_name = 'Last Name is required';
//     }

//     if (!formData.Phone) {
//       newErrors.Phone = 'Phone Number is required';
//     } else if (!/^[0-9]{10}$/i.test(formData.Phone)) {
//       newErrors.Phone = 'Phone Number is invalid';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!formData.NIC) {
//       newErrors.NIC = 'NIC is required';
//     } else if (!/^[0-9]{12}$/i.test(formData.NIC)) {
//       newErrors.NIC = 'NIC is invalid (############V/v)';
//     }

//     if (!formData.Address) {
//       newErrors.Address = 'Address is required';
//     }

//     if (!formData.date) {
//       newErrors.date = 'Date is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       axios
//         .post('/Emp/save', formData)
//         .then((res) => {
//           if (res.data.success) {
//             alert('New Employee added Successfully!');
//             setFormData({
//               empID:'',
//               first_name: '',
//               last_name: '',
//               email: '',
//               Address: '',
//               NIC: '',
//               Phone: '',
//               date: '',
//             });
//             setErrors({});
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };
//   return (
//     <div className="col-md-8 mt-4 mx-auto">
//       <h1 className="h3 mb-3 font-weight-normal">Add new Employee</h1>
//       <form className="needs-validation" onSubmit={handleSubmit} noValidate>


//       <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Employee ID</label>
//           <input
//             type="text"
//             className={`form-control ${errors.empID && 'is-invalid'}`}
//             name="first_name"
//             placeholder="Enter Employee ID"
//             value={formData.empID}
//             onChange={handleInputChange}/>

//     console.log(data)

//     axios.post("/Emp/save",data).then((res) => {
//       if(res.data.success){
//         alert("New Employee added Successfully!");
//         	this.setState({
//         	first_name:"",
//        		last_name:"",
//       		email:"",
//           Address:"",
//        		NIC:"",
//       		Phone:"",
//           date:"",
//        	 })
//       }
//     })

//   }

//   render() {
//     return (

//       <div className='max-w-lg mx-auto my-8'>
//         <h1 className='text-3xl font-bold mb-4'>Add new Employee</h1>
//         <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' noValidate>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>First Name</label>
//             <input type="text" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='first_name'
//             placeholder='Enter First Name'
//             value={this.state.first_name}
//             onChange={this.handleInputChange}
//             required
//           />
//           {errors.empID && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.empID}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>First Name</label>
//           <input
//             type="text"
//             className={`form-control ${errors.first_name && 'is-invalid'}`}
//             name="first_name"
//             placeholder="Enter First Name"
//             value={formData.first_name}
//             onChange={handleInputChange}
//             required
//           />
//           {errors.first_name && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.first_name}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Last Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="last_name"
//             placeholder="Enter Last Name"
//             value={formData.last_name}
//             onChange={handleInputChange}
//           />
//           {errors.last_name && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.last_name}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Email</label>
//           <input
//             type="email"
//             className={`form-control ${errors.email && 'is-invalid'}`}
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.email}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="Address"
//             placeholder="Enter Address"
//             value={formData.Address}
//             onChange={handleInputChange}
//           />
//           {errors.Address && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.Address}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>NIC</label>
//           <input
//             type="text"
//             className="form-control"
//             name="NIC"
//             placeholder="Enter NIC"
//             value={formData.NIC}
//             onChange={handleInputChange}
//           />
//           {errors.NIC && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.NIC}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Phone Number</label>
//           <input
//             type="number"
//             className="form-control"
//             name="Phone"
//             placeholder="Enter Phone Number"
//             value={formData.Phone}
//             onChange={handleInputChange}
//           />
//           {errors.Phone && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.Phone}</div>
//           )}
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Allocated Date</label>
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             placeholder="Enter the Date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//           {errors.date && (
//             <div className="invalid-feedback" style={{color:"red"}}>{errors.date}</div>
//           )}
//         </div>
//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>Last Name</label>
//             <input type="text" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='last_name'
//             placeholder='Enter Last Name'
//             value={this.state.last_name}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>Email</label>
//             <input type="email" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='email'
//             placeholder='Enter Email'
//             value={this.state.email}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>Address</label>
//             <input type="text" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='Address'
//             placeholder='Enter Address'
//             value={this.state.Address}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>NIC</label>
//             <input type="text" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='NIC'
//             placeholder='Enter NIC'
//             value={this.state.NIC}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>Phone Number</label>
//             <input type="number" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='Phone'
//             placeholder='Enter Phone Number'
//             value={this.state.Phone}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='mb-4'>
//             <label className='block text-gray-700 font-bold mb-2'>Allocated Date</label>
//             <input type="date" 
//             className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             name='date'
//             placeholder='Enter the Date'
//             value={this.state.date}
//             onChange={this.handleInputChange}/>
//           </div>

//           <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
//               <i className='far fa-check-square'></i>
//               &nbsp;Save
//           </button>
//         <button
//           className="btn btn-success"
//           type="submit"
//           style={{ marginTop: '15px' }}
//         >
//           <i className="far fa-check-square"></i>
//           &nbsp;Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePosts

import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
  const [formData, setFormData] = useState({
    empID: '',
    first_name: '',
    last_name: '',
    email: '',
    Address: '',
    NIC: '',
    Phone: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.empID) {
      newErrors.empID = 'Employee ID is required';
    }

    if (!formData.first_name) {
      newErrors.first_name = 'First Name is required';
    }

    if (!formData.last_name) {
      newErrors.last_name = 'Last Name is required';
    }

    if (!formData.Phone) {
      newErrors.Phone = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/i.test(formData.Phone)) {
      newErrors.Phone = 'Phone Number is invalid';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.NIC) {
      newErrors.NIC = 'NIC is required';
    } else if (!/^[0-9]{12}$/i.test(formData.NIC)) {
      newErrors.NIC = 'NIC is invalid (############V/v)';
    }

    if (!formData.Address) {
      newErrors.Address = 'Address is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios
        .post('/Emp/save', formData)
        .then((res) => {
          if (res.data.success) {
            alert('New Employee added Successfully!');
            setFormData({
              empID: '',
              first_name: '',
              last_name: '',
              email: '',
              Address: '',
              NIC: '',
              Phone: '',
              date: '',
            });
            setErrors({});
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add new Employee</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Employee ID</label>
          <input
            type="text"
            className={`form-control ${errors.empID && 'is-invalid'}`}
            name="empID"
            placeholder="Enter Employee ID"
            value={formData.empID}
            onChange={handleInputChange}
          />
          {errors.empID && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.empID}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>First Name</label>
          <input
            type="text"
            className={`form-control ${errors.first_name && 'is-invalid'}`}
            name="first_name"
            placeholder="Enter First Name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          {errors.first_name && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.first_name}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Last Name</label>
          <input
            type="text"
            className={`form-control ${errors.last_name && 'is-invalid'}`}
            name="last_name"
            placeholder="Enter Last Name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          {errors.last_name && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.last_name}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Address</label>
          <textarea
            className={`form-control ${errors.Address && 'is-invalid'}`}
            name="Address"
            placeholder="Enter Address"
            value={formData.Address}
            onChange={handleInputChange}
          ></textarea>
          {errors.Address && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.Address}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>NIC</label>
          <input
            type="text"
            className={`form-control ${errors.NIC && 'is-invalid'}`}
            name="NIC"
            placeholder="Enter NIC"
            value={formData.NIC}
            onChange={handleInputChange}
          />
          {errors.NIC && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.NIC}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Phone</label>
          <input
            type="text"
            className={`form-control ${errors.Phone && 'is-invalid'}`}
            name="Phone"
            placeholder="Enter Phone"
            value={formData.Phone}
            onChange={handleInputChange}
          />
          {errors.Phone && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.Phone}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Date</label>
          <input
            type="date"
            className={`form-control ${errors.Date && 'is-invalid'}`}
            name="Date"
            value={formData.Date}
            onChange={handleInputChange}
          />
          {errors.Date && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.Date}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Time</label>
          <input
            type="time"
            className={`form-control ${errors.Time && 'is-invalid'}`}
            name="Time"
            value={formData.Time}
            onChange={handleInputChange}
          />
          {errors.Time && (
            <div className="invalid-feedback" style={{ color: 'red' }}>
              {errors.Time}
            </div>
          )}
        </div>

        <div className="form-group" style={{ marginTop: '15px' }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

