
import React, { useState } from 'react';
import axios from 'axios';

const CreatePosts = () => {
  const [formData, setFormData] = useState({
    repairID: '',
    customerName: '',
    phoneNum: '',
    device: '',
    Brand: '',
    Model: '',
    reason: '',
    givenDate: '',
    customerAddress: '',
    repairPrize: '',
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

    if (!formData.repairID) {
      newErrors.repairID = 'Repair ID is required';
    }

    if (!formData.customerName) {
      newErrors.customerName = 'Customer Name is required';
    }

    if (!formData.phoneNum) {
      newErrors.phoneNum = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/i.test(formData.phoneNum)) {
      newErrors.phoneNum = 'Phone Number is invalid';
    }

    if (!formData.device) {
      newErrors.device = 'Device is required';
    }

    if (!formData.Brand) {
      newErrors.Brand = 'Brand is required';
    }

    if (!formData.Model) {
      newErrors.Model = 'Model is required';
    }

    if (!formData.reason) {
      newErrors.reason = 'Reason is required';
    }

    if (!formData.givenDate) {
      newErrors.givenDate = 'Date is required';
    }

    if (!formData.customerAddress) {
      newErrors.customerAddress = 'Address is required';
    }

    if (!formData.repairPrize) {
      newErrors.repairPrize = 'Repair Prize is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios
        .post('/repair/save', formData)
        .then((res) => {
          if (res.data.success) {
            alert('New Repair added Successfully!');
            setFormData({
              repairID: '',
              customerName: '',
              phoneNum: '',
              device: '',
              Brand: '',
              Model: '',
              reason: '',
              givenDate: '',
              customerAddress: '',
              repairPrize: '',
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className='max-w-3xl mx-auto mt-8 bg-purple-900 p-6 rounded-lg'>
  <h1 className='text-3xl font-bold mb-8'>Add new Repair</h1>
  <form className='flex flex-wrap ' onSubmit={handleSubmit} noValidate>
    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Repair ID</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.repairID && 'border-red-500'}`}
        name='repairID'
        placeholder='Enter repairID'
        value={formData.repairID}
        onChange={handleInputChange}
        required
      />
      {errors.repairID && (
        <div className='text-red-500 mt-2'>{errors.repairID}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Customer Name</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.customerName && 'border-red-500'}`}
        name='customerName'
        placeholder='Enter customer name'
        value={formData.customerName}
        onChange={handleInputChange}
        required
      />
      {errors.customerName && (
        <div className='text-red-500 mt-2'>{errors.customerName}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Phone number</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.phoneNum && 'border-red-500'}`}
        name='phoneNum'
        placeholder='Enter phone number'
        value={formData.phoneNum}
        onChange={handleInputChange}
        required
      />
      {errors.phoneNum && (
        <div className='text-red-500 mt-2'>{errors.phoneNum}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Device</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.device && 'border-red-500'}`}
        name='device'
        placeholder='Enter device'
        value={formData.device}
        onChange={handleInputChange}
        required
      />
      {errors.device && (
        <div className='text-red-500 mt-2'>{errors.device}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Brand</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.Brand && 'border-red-500'}`}
        name='Brand'
        placeholder='Enter brand'
        value={formData.Brand}
        onChange={handleInputChange}
        required
      />
      {errors.Brand && (
        <div className='text-red-500 mt-2'>{errors.Brand}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Model</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.Model && 'border-red-500'}`}
        name='Model'
        placeholder='Enter model'
        value={formData.Model}
        onChange={handleInputChange}
        required
      />
      {errors.Model && (
        <div className='text-red-500 mt-2'>{errors.Model}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Reason</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.reason && 'border-red-500'}`}
        name='reason'
        placeholder='Enter reason'
        value={formData.reason}
        onChange={handleInputChange}
        required
      />
      {errors.reason && (
        <div className='text-red-500 mt-2'>{errors.reason}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Given Date</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.givenDate && 'border-red-500'}`}
        name='givenDate'
        placeholder='Enter given date'
        value={formData.givenDate}
        onChange={handleInputChange}
        required
      />
      {errors.givenDate && (
        <div className='text-red-500 mt-2'>{errors.givenDate}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Customer Address</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.customerAddress && 'border-red-500'}`}
        name='customerAddress'
        placeholder='Enter customer address'
        value={formData.customerAddress}
        onChange={handleInputChange}
        required
      />
      {errors.customerAddress && (
        <div className='text-red-500 mt-2'>{errors.customerAddress}</div>
      )}
    </div>

    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
      <label className='block mb-2 font-bold'>Repair Prize</label>
      <input
        type='text'
        className={`w-full p-2 border rounded text-slate-950 ${errors.repairPrize && 'border-red-500'}`}
        name='repairPrize'
        placeholder='Enter repair prize'
        value={formData.repairPrize}
        onChange={handleInputChange}
        required
      />
      {errors.repairPrize && (
        <div className='text-red-500 mt-2'>{errors.repairPrize}</div>
      )}
    </div>

    {/* Add the remaining form fields here with similar structure */}

    <div className='flex justify-center w-full'>
      <button type='submit' className=' px-4 py-2 mt-6 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded'>
        Add Repair
      </button>
    </div>
  </form>
</div>

  );
};

export default CreatePosts;
