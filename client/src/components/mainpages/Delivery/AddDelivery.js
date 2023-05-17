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
      <div className="flex flex-col mt-8 items-center justify-center bg-purple-900 bg-opacity-100 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-2/5 mx-auto">
  <h1 className="text-2xl font-bold mb-4">Enter Your Delivery Details</h1>
  <form noValidate className="w-full">

    <div className="mb-4">
      <label htmlFor="orderId" className="text-sm font-semibold">Order ID</label>
      <input
        type="text"
        id="orderId"
        value={orderId}
        readOnly
        onChange={(e) => setOrderId(e.target.value)}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mb-4">
      <label className="text-sm font-semibold">Recipient's Name</label>
      <input
        type="text"
        name="Name"
        placeholder="Enter Recipient's Name"
        value={formData.Name}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error.Name && <div className="text-red-500 text-sm">{error.Name}</div>}
    </div>

    <div className="mb-4">
      <label className="text-sm font-semibold">Phone Number</label>
      <input
        type="number"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error.phone && <div className="text-red-500 text-sm">{error.phone}</div>}
    </div>

    <div className="mb-4">
      <label className="text-sm font-semibold">Recipient's Address</label>
      <input
        type="text"
        name="Address"
        placeholder="Enter Address"
        value={formData.Address}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error.Address && <div className="text-red-500 text-sm">{error.Address}</div>}
    </div>

    <div className="mb-4">
      <label className="text-sm font-semibold">NIC</label>
      <input
        type="text"
        name="NIC"
        placeholder="Enter the NIC"
        value={formData.NIC}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error.NIC && <div className="text-red-500 text-sm">{error.NIC}</div>}
    </div>

    <div className="mb-4">
      <label className="text-sm font-semibold">Recipient's email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter the email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-md bg-gray-100 text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error.email && <div className="text-red-500 text-sm">{error.email}</div>}
    </div>

    <button
      type="submit"
      onClick={onSubmit}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full"
    >
      <i></i>&nbsp;Save
    </button>

  </form>
</div>      
    );

}
export default AddDelivery
