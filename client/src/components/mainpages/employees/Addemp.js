// import React, { useState } from 'react';
// import axios from 'axios';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     empID: '',
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
//       newErrors.empID = 'Employee ID is required';
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
//               empID: '',
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
//     <div className="bg-transparent p-8 mt-8">
//   <div className="max-w-3xl mx-auto mt-8 bg-purple-900 p-6 rounded-lg">
//     <h1 className="text-3xl font-bold mb-8">Add new Employee</h1>
//     <form className='flex flex-wrap' onSubmit={handleSubmit} noValidate>
//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Employee ID</label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.empID ? 'border-red-500' : 'border-gray-300'}`}
//           name="empID"
//           placeholder="Enter Employee ID"
//           value={formData.empID}
//           onChange={handleInputChange}
//         />
//         {errors.empID && (
//           <div className="text-red-500 text-sm mt-1">{errors.empID}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">First Name</label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
//           name="first_name"
//           placeholder="Enter First Name"
//           value={formData.first_name}
//           onChange={handleInputChange}
//         />
//         {errors.first_name && (
//           <div className="text-red-500 text-sm mt-1">{errors.first_name}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Last Name</label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
//           name="last_name"
//           placeholder="Enter Last Name"
//           value={formData.last_name}
//           onChange={handleInputChange}
//         />
//         {errors.last_name && (
//           <div className="text-red-500 text-sm mt-1">{errors.last_name}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Email</label>
//         <input
//           type="email"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         {errors.email && (
//           <div className="text-red-500 text-sm mt-1">{errors.email}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Address</label>
//         <textarea
//           className={`w-full p-2 border rounded text-slate-950 ${errors.Address ? 'border-red-500' : 'border-gray-300'}`}
//           name="Address"
//           placeholder="Enter Address"
//           value={formData.Address}
//           onChange={handleInputChange}
//         ></textarea>
//         {errors.Address && (
//           <div className="text-red-500 text-sm mt-1">{errors.Address}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">NIC</label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.NIC ? 'border-red-500' : 'border-gray-300'}`}
//           name="NIC"
//           placeholder="Enter NIC"
//           value={formData.NIC}
//           onChange={handleInputChange}
//         />
//         {errors.NIC && (
//           <div className="text-red-500 text-sm mt-1">{errors.NIC}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Phone</label>
//         <input
//           type="text"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.Phone ? 'border-red-500' : 'border-gray-300'}`}
//           name="Phone"
//           placeholder="Enter Phone"
//           value={formData.Phone}
//           onChange={handleInputChange}
//         />
//         {errors.Phone && (
//           <div className="text-red-500 text-sm mt-1">{errors.Phone}</div>
//         )}
//       </div>

//       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Date</label>
//         <input
//           type="date"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
//           name="date"
//           value={formData.date}
//           onChange={handleInputChange}
//         />
//         {errors.date && (
//           <div className="text-red-500 text-sm mt-1">{errors.date}</div>
//         )}
//       </div>

//       {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//         <label className="block mb-2 font-bold">Time</label>
//         <input
//           type="time"
//           className={`w-full p-2 border rounded text-slate-950 ${errors.Time ? 'border-red-500' : 'border-gray-300'}`}
//           name="Time"
//           value={formData.Time}
//           onChange={handleInputChange}
//         />
//         {errors.Time && (
//           <div className="text-red-500 text-sm mt-1">{errors.Time}</div>
//         )}
//       </div> */}

//       <div className="mt-6">
//         <button type="submit" className="px-4 py-2 mt-6 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded">
//           Submit
//         </button>
//       </div>
//     </form>
//   </div>
// </div>

//   );
// }

// export default Form;
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
    <div className="bg-transparent p-8 mt-8">
      <div className="max-w-3xl mx-auto mt-8 bg-purple-900 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Add new Employee</h1>
        <form className="flex flex-wrap" onSubmit={handleSubmit} noValidate>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Employee ID</label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-slate-950 ${errors.empID && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">First Name</label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-slate-950 ${errors.first_name && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Last Name</label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-slate-950 ${errors.last_name && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              className={`w-full p-2 border rounded text-slate-950 ${errors.email && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Address</label>
            <textarea
              className={`w-full p-2 border rounded text-slate-950 ${errors.Address && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">NIC</label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-slate-950 ${errors.NIC && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Phone</label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-slate-950 ${errors.Phone && 'is-invalid'}`}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Date</label>
            <input
              type="date"
              className={`w-full p-2 border rounded text-slate-950 ${errors.date && 'is-invalid'}`}
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            {errors.date && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.date}
              </div>
            )}
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" style={{ marginBottom: '15px' }}>
            <label className="block mb-2 font-bold">Time</label>
            <input
              type="time"
              className={`w-full p-2 border rounded text-slate-950 ${errors.Time && 'is-invalid'}`}
              name="Time"
              value={formData.Time}
              onChange={handleInputChange}
            />
            {errors.Time && (
              <div className="invalid-feedback" style={{ color: 'red' }}>
                {errors.Time}
              </div>
            )}
          </div> */}
          <div className="mt-6">
            <button type="submit" className="px-4 py-2 mt-6 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
