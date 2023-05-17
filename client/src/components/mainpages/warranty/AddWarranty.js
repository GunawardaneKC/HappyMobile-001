import React, { useState } from 'react'
import axios from 'axios';

function AddWarranty() {

const [error, setError] = useState({});

const validate = () => {
  const newError = {};

  if (!formData.invoiceNo) {
    newError.invoiceNo = 'invoice No is required';
  }

  if (!formData.cName) {
    newError.cName = 'Name is required';
  }

  if (!formData.imeiNo) {
    newError.imeiNo = 'imei is required';
  }

  if (!formData.model) {
    newError.model = 'model is required';
  }

  if (!formData.phoneNo) {
    newError.phoneNo = 'Phone Number is required';
  } else if (!/^[0-9]{10}$/i.test(formData.phoneNo)) {
    newError.phoneNo = 'Phone Number is invalid';
  }

  setError(newError);
  return Object.keys(newError).length === 0;
};

  const [formData, setFormData] = useState({
    invoiceNo: "",
    cName: "",
    imeiNo: "",
    model: "",
    phoneNo: ""
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
  
      axios.post('/warranty/save', formData).then((res) => {
        if (res.data.success) {
          alert('New Warranty added Successfully!');
          setFormData({
            invoiceNo:'',
            cName: '',
            imeiNo: '',
            model: '',
            phoneNo: ''
          });
          setError({});
        }
      });
    }
  };
  
    return (
      <div className="flex justify-center items-center h-screen">
  <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg p-6 rounded-md">
    <h1 className="text-3xl mb-4">Add Warranty</h1>
    <form noValidate className="flex">
      <div className="mr-6">
        <div className="mb-5">
          <label className="mb-1 block">Invoice Number</label>
          <input
            type="text"
            name="invoiceNo"
            placeholder="Enter invoice"
            value={formData.invoiceNo}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 text-slate-900 rounded-md focus:outline-none"
          />
          {error.invoiceNo && <div className="text-red-500">{error.invoiceNo}</div>}
        </div>
        <div className="mb-5">
          <label className="mb-1 block">Customer's Name</label>
          <input
            type="text"
            name="cName"
            placeholder="Enter customer Name"
            value={formData.cName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 text-slate-900 rounded-md focus:outline-none"
          />
          {error.cName && <div className="text-red-500">{error.cName}</div>}
        </div>
      </div>
      <div>
        <div className="mb-5">
          <label className="mb-1 block">Phone Number</label>
          <input
            type="number"
            name="phoneNo"
            placeholder="Enter Phone Number"
            value={formData.phoneNo}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 text-slate-900 rounded-md focus:outline-none"
          />
          {error.phoneNo && <div className="text-red-500">{error.phoneNo}</div>}
        </div>
        <div className="mb-5">
          <label className="mb-1 block">IMEI Number</label>
          <input
            type="text"
            name="imeiNo"
            placeholder="Enter imei"
            value={formData.imeiNo}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 text-slate-900 rounded-md focus:outline-none"
          />
          {error.imeiNo && <div className="text-red-500">{error.imeiNo}</div>}
        </div>
        <div className="mb-5">
          <label className="mb-1 block">Phone Model</label>
          <input
            type="text"
            name="model"
            placeholder="Enter model"
            value={formData.model}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 text-slate-900 rounded-md focus:outline-none"
          />
          {error.model && <div className="text-red-500">{error.model}</div>}
        </div>
      </div>
    </form>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-5"
      onClick={onSubmit}
    >
      <i></i>&nbsp;Save
    </button>
  </div>
</div>

    );

}
export default AddWarranty
