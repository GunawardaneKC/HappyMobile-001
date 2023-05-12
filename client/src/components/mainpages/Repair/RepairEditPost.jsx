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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
      navigate('/Repair');
    });
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
            className='form-control'
            name='repairID'
            value={repairID}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Customer Name:</label>
          <input
            type='text'
            className='form-control'
            name='customerName'
            value={customerName}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type='number'
            pattern="[0-9]{10}"
            className='form-control'
            name='phoneNum'
            value={phoneNum}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Device:</label>
          <input
            type='text'
            className='form-control'
            name='device'
            value={device}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Brand:</label>
          <input
            type='text'
            className='form-control'
            name='Brand'
            value={Brand}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Model:</label>
          <input
            type='text'
            className='form-control'
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Reason:</label>
          <input
            type='text'
            className='form-control'
            name='reason'
            value={reason}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Date:</label>
          <input
            type='date'
            className='form-control'
            name='givenDate'
            value={givenDate}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Customer Address:</label>
          <input
            type='text'
            className='form-control'
            name='customerAddress'
            value={customerAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Repair Price:</label>
          <input
            type='text'
            className='form-control'
            name='repairPrize'
            value={repairPrize}
            onChange={handleInputChange}
          />
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
