import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
      repairID:"",
      customerName:"",
      phoneNum:"",
      device:"",
      Brand:"",
      Model:"",
      reason:"",
      givenDate:"",
      customerAddress:"",
      repairPrize:"",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`/repair/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          repairID: res.data.post.repairID,
          customerName: res.data.post.customerName,
          phoneNum: res.data.post.phoneNum,
          device: res.data.post.device,
          Brand: res.data.post.Brand,
          Model: res.data.post.Model,
          reason: res.data.post.reason,
          givenDate: res.data.post.givenDate,
          customerAddress: res.data.post.customerAddress,
          repairPrize: res.data.post.repairPrize,
        });
      }
    });
  }, [id]);
  console.log(post);

  const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = updatedPost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPost({
      ...updatedPost,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validate = () => {
    let errors = {};
  
    if (!repairID.trim()) {
      errors.repairID = 'Repair ID is required';
    }
  
    if (!customerName.trim()) {
      errors.customerName = 'Customer Name is required';
    }
  
    if (!phoneNum.trim()) {
      errors.phoneNum = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/.test(phoneNum)) {
      errors.phoneNum = 'Invalid phone number';
    }
  
    if (!device.trim()) {
      errors.device = 'Device is required';
    }

    if (!Brand.trim()) {
      errors.Brand = 'Brand is required';
    }

    if (!Model.trim()) {
      errors.Model = 'Model is required';
    }
  
    if (!reason.trim()) {
      errors.reason = 'Reason is required';
    }
  
    if (!givenDate.trim()) {
      errors.givenDate = 'Date is required';
    }

    if (!customerAddress.trim()) {
      errors.customerAddress = 'Address is required';
    }
  
    if (!repairPrize.trim()) {
      errors.repairPrize = 'Repair Price is required';
    }
  
    setErrors(errors);
  
    return errors;
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
  
    if (Object.keys(errors).length === 0) {
      const data = {
        repairID: updatedPost.repairID,
        customerName: updatedPost.customerName,
        phoneNum: updatedPost.phoneNum,
        device: updatedPost.device,
        Brand: updatedPost.Brand,
        Model: updatedPost.Model,
        reason: updatedPost.reason,
        givenDate: updatedPost.givenDate,
        customerAddress: updatedPost.customerAddress,
        repairPrize: updatedPost.repairPrize,
      };
  
      axios.put(`/repair/update/${id}`, data).then((res) => {
        console.log(res.data);
        alert('Post updated successfully!');
        setUpdatedPost({
          repairID:"",
          customerName:"",
          phoneNum:"",
          device:"",
          Brand:"",
          Model:"",
          reason:"",
          givenDate:"",
          customerAddress:"",
          repairPrize:"",
        });
        setErrors({});
        navigate('/Repair');
      }).catch(error => {
        console.log(error.response.data);
        alert('Something went wrong while updating post!');
      });
    }
  };
  
  

  return (
    <div className='max-w-lg mx-auto my-8'>
      <h4 className='text-3xl font-bold mb-4'>Edit Repairs</h4>
      <hr />

      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleFormSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Repair ID:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.repairID && "is-invalid"}`}
            name='repairID'
            value={repairID}
            onChange={handleInputChange}
            
          />
          {errors.repairID && (
          <div className="invalid-feedback text-red-500">{errors.repairID}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Customer Name:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.customerName && "is-invalid"}`}
            name='customerName'
            value={customerName}
            onChange={handleInputChange}
          />
          {errors.customerName && (
          <div className="invalid-feedback text-red-500">{errors.customerName}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Phone Number:</label>
          <input
            type='number'
            pattern="[0-9]{10}"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNum && "is-invalid"}`}
            name='phoneNum'
            value={phoneNum}
            onChange={handleInputChange}
            
          />
          {errors.phoneNum && (
          <div className="invalid-feedback text-red-500">{errors.phoneNum}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Device:</label>
          <select 
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.device && "is-invalid"}`} 
                name='device' 
                value={device} 
                onChange={handleInputChange}
                
              >
                <option value="Smart Phone">Smart Phone</option>
                <option value="Mobile Phone">Mobile Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop">Laptop</option>
                <option value="iPad">iPad</option>
                <option value="iPhone">iPhone</option>
                <option value="Mac Book">Mac Book</option>
            </select>
            {errors.device && (
          <div className="invalid-feedback text-red-500">{errors.device}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Brand:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Brand && "is-invalid"}`}
            name='Brand'
            value={Brand}
            onChange={handleInputChange}
          />
          {errors.Brand && (
          <div className="invalid-feedback text-red-500">{errors.Brand}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Model:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Model && "is-invalid"}`}
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
          {errors.Model && (
          <div className="invalid-feedback text-red-500">{errors.Model}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Reason:</label>
          <textarea
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.reason && "is-invalid"}`}
            name='reason'
            value={reason}
            onChange={handleInputChange}
            
          />
          {errors.reason && (
          <div className="invalid-feedback text-red-500 -mt-3">{errors.reason}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Date:</label>
          <input
            type='date'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.givenDate && "is-invalid"}`}
            name='givenDate'
            value={givenDate}
            onChange={handleInputChange}
            
          />
          {errors.givenDate && (
          <div className="invalid-feedback text-red-500">{errors.givenDate}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Customer Address:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.customerAddress && "is-invalid"}`}
            name='customerAddress'
            value={customerAddress}
            onChange={handleInputChange}
          />
          {errors.customerAddress && (
          <div className="invalid-feedback text-red-500">{errors.customerAddress}</div>
        )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Repair Price:</label>
          <input
            type='text'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.repairPrize && "is-invalid"}`}
            name='repairPrize'
            value={repairPrize}
            onChange={handleInputChange}         
          />
          {errors.repairPrize && (
          <div className="invalid-feedback text-red-500">{errors.repairPrize}</div>
        )}
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          style={{ marginTop: '15px' }}
        >
          <i className='far fa-check-square'></i>
          &nbsp;Update
        </button>
      </form>
    </div>
  );
}
