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
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Repairs</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Repair ID:</label>
          <input
            type='text'
            className={`form-control ${errors.repairID && "is-invalid"}`}
            name='repairID'
            value={repairID}
            onChange={handleInputChange}
            
          />
          {errors.repairID && (
          <div className="invalid-feedback">{errors.repairID}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Customer Name:</label>
          <input
            type='text'
            className={`form-control ${errors.customerName && "is-invalid"}`}
            name='customerName'
            value={customerName}
            onChange={handleInputChange}
          />
          {errors.customerName && (
          <div className="invalid-feedback">{errors.customerName}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type='number'
            pattern="[0-9]{10}"
            className={`form-control ${errors.phoneNum && "is-invalid"}`}
            name='phoneNum'
            value={phoneNum}
            onChange={handleInputChange}
            
          />
          {errors.phoneNum && (
          <div className="invalid-feedback">{errors.phoneNum}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Device:</label>
          <select 
                className={`form-control ${errors.device && "is-invalid"}`} 
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
          <div className="invalid-feedback">{errors.device}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Brand:</label>
          <input
            type='text'
            className={`form-control ${errors.Brand && "is-invalid"}`}
            name='Brand'
            value={Brand}
            onChange={handleInputChange}
          />
          {errors.Brand && (
          <div className="invalid-feedback">{errors.Brand}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Model:</label>
          <input
            type='text'
            className={`form-control ${errors.Model && "is-invalid"}`}
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
          {errors.Model && (
          <div className="invalid-feedback">{errors.Model}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Reason:</label>
          <textarea
            type='text'
            className={`form-control ${errors.reason && "is-invalid"}`}
            name='reason'
            value={reason}
            onChange={handleInputChange}
            
          />
          {errors.reason && (
          <div className="invalid-feedback">{errors.reason}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Date:</label>
          <input
            type='date'
            className={`form-control ${errors.givenDate && "is-invalid"}`}
            name='givenDate'
            value={givenDate}
            onChange={handleInputChange}
            
          />
          {errors.givenDate && (
          <div className="invalid-feedback">{errors.givenDate}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Customer Address:</label>
          <input
            type='text'
            className={`form-control ${errors.customerAddress && "is-invalid"}`}
            name='customerAddress'
            value={customerAddress}
            onChange={handleInputChange}
          />
          {errors.customerAddress && (
          <div className="invalid-feedback">{errors.customerAddress}</div>
        )}
        </div>

        <div className='form-group'>
          <label>Repair Price:</label>
          <input
            type='text'
            className={`form-control ${errors.repairPrize && "is-invalid"}`}
            name='repairPrize'
            value={repairPrize}
            onChange={handleInputChange}         
          />
          {errors.repairPrize && (
          <div className="invalid-feedback">{errors.repairPrize}</div>
        )}
        </div>

        <button
          type='submit'
          className='btn btn-success'
          style={{ marginTop: '15px' }}
        >
          <i className='far fa-check-square'></i>
          &nbsp;Update
        </button>
      </form>
    </div>
  );
}
