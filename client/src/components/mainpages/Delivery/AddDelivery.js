import React, { useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AddDelivery() {

const location = useLocation();
const paymentId = new URLSearchParams(location.search).get('orderId');
const [orderId, setOrderId] = useState(paymentId);
const [error, setError] = useState({});

const validate = () => {
  const newError = {};

  if (!formData.Name) {
    newError.Name = 'Name is required';
  }

  if (!formData.Address) {
    newError.Address = 'Address is required';
  }

  if (!formData.phone) {
    newError.phone = 'Phone Number is required';
  } else if (!/^[0-9]{10}$/i.test(formData.phone)) {
    newError.phone = 'Phone Number is invalid';
  }

  if (!formData.NIC) {
    newError.NIC = 'NIC is required';
  } else if (!/^[0-9]{12}[vV]$/i.test(formData.NIC)) {
    newError.NIC = 'NIC is invalid (############V/v)';
  }

  if (!formData.email) {
    newError.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newError.email = 'Email is invalid';
  }

  setError(newError);
  return Object.keys(newError).length === 0;
};

  const [formData, setFormData] = useState({
    OrderID: orderId,
    Name: "",
    Address: "",
    phone: "",
    NIC: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
  
    if (validate()) {
      console.log(formData);
  
      axios.post('/delivery/save', formData).then((res) => {
        if (res.data.success) {
          alert('New Repair added Successfully!');
          setFormData({
            OrderID: orderId,
            Name: '',
            Address: '',
            phone: '',
            NIC: '',
            email: ''
          });
          setError({});
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setError({ email: 'Email is already in use' });
        } else {
          console.log(error);
        }
      });
    }
  };
  
    return (

      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add new Delivery</h1>
        <form className='needs-validation' noValidate>

        <div className="form-group">
        <label htmlFor="orderId">Order ID</label>
        <input
          type="text"
          className="form-control"
          id="orderId"
          value={orderId}
          readOnly
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>

      <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Recipient's Name</label>
          <input type="text" 
          className='form-control'
          name='Name'
          placeholder='Enter Recipients Name'
          value={formData.Name}
          onChange={handleInputChange}/>
          {error.Name && <div className='invalid-feedback' style={{color:"red"}}>{error.Name}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Phone Number</label>
          <input type="number" 
          className='form-control'
          name='phone'
          placeholder='Enter Phone Number'
          value={formData.phone}
          onChange={handleInputChange}/>
          {error.phone && <div className='invalid-feedback' style={{color:"red"}}>{error.phone}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Recipient's Address</label>
          <input type="text" 
          className='form-control'
          name='Address'
          placeholder='Enter Address'
          value={formData.Address}
          onChange={handleInputChange}/>
          {error.Address && <div className='invalid-feedback' style={{color:"red"}}>{error.Address}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Recipient's NIC</label>
          <input type="text" 
          className='form-control'
          name='NIC'
          placeholder='Enter the NIC'
          value={formData.NIC}
          onChange={handleInputChange}/>
          {error.NIC && <div className='invalid-feedback' style={{color:"red"}}>{error.NIC}</div>}
        </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Recipient's email</label>
            <input type="email" 
            className='form-control'
            name='email'
            placeholder='Enter the email'
            value={formData.email}
            onChange={handleInputChange}/>
            {error.email && <div className='invalid-feedback' style={{color:"red"}}>{error.email}</div>}
          </div>

          <button className='btn btn-success' type="submit" style={{marginTop: '15px'}} onClick={onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
          </button>

        </form>
      </div>
    );

}
export default AddDelivery
