import React, { useState } from 'react';
import axios from 'axios';

const CreatePosts = () => {
  const [formData, setFormData] = useState({
    empID:'',
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
      newErrors.first_name = 'Employee ID is required';
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
              empID:'',
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
            name="first_name"
            placeholder="Enter Employee ID"
            value={formData.empID}
            onChange={handleInputChange}
            required
          />
          {errors.empID && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.empID}</div>
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
            required
          />
          {errors.first_name && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.first_name}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Enter Last Name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          {errors.last_name && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.last_name}</div>
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
            <div className="invalid-feedback" style={{color:"red"}}>{errors.email}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Address</label>
          <input
            type="text"
            className="form-control"
            name="Address"
            placeholder="Enter Address"
            value={formData.Address}
            onChange={handleInputChange}
          />
          {errors.Address && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.Address}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>NIC</label>
          <input
            type="text"
            className="form-control"
            name="NIC"
            placeholder="Enter NIC"
            value={formData.NIC}
            onChange={handleInputChange}
          />
          {errors.NIC && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.NIC}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="Phone"
            placeholder="Enter Phone Number"
            value={formData.Phone}
            onChange={handleInputChange}
          />
          {errors.Phone && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.Phone}</div>
          )}
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Allocated Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Enter the Date"
            value={formData.date}
            onChange={handleInputChange}
          />
          {errors.date && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.date}</div>
          )}
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: '15px' }}
        >
          <i className="far fa-check-square"></i>
          &nbsp;Save
        </button>
      </form>
    </div>
  );
};

export default CreatePosts