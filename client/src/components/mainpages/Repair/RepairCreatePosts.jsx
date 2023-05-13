import React, { Component } from 'react'
import axios from 'axios';

export default class CreatePosts extends Component {
  constructor(props){
    super(props);
    this.state={
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
      errors: {},
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      ...this.state,
      [name]:value,
    });
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = this.state;

    // Validations
    const errors = {};
    if (!repairID) {
      errors.repairID = 'Repair ID is required';
    }
    if (!customerName) {
      errors.customerName = 'Customer Name is required';
    }
    if (!phoneNum) {
      errors.phoneNum = 'Phone Number is required';
    } else if (!/^[0-9]+$/.test(phoneNum)) {
      errors.phoneNum = 'Phone Number must be numeric';
    }
    if (!device) {
      errors.device = 'Device is required';
    } 
    if (!Brand) {
      errors.Brand = 'Brand is required';
    }
    if (!Model) {
      errors.Model = 'Model is required';
    }
    if (!reason) {
      errors.reason = 'Reason is required';
    }
    if (!givenDate) {
      errors.givenDate = 'Date is required';
    }
    if (!customerAddress) {
      errors.customerAddress = 'Address is required';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      });
      return;
    }

    const data = {
      repairID:repairID,
      customerName:customerName,
      phoneNum:phoneNum,
      device:device,
      Brand:Brand,
      Model:Model,
      reason:reason,
      givenDate:givenDate,
      customerAddress:customerAddress,
      repairPrize:repairPrize,
    }

    console.log(data)

    axios.post("/repair/save",data).then((res) => {
      if(res.data.success){
        alert("New Repair added Successfully!");
        this.setState({
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
          errors: {},
        });
      }
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='mx-auto max-w-md'>
  <h1 className='text-xl font-bold mb-4'>Add new Repair</h1>
  <form className='needs-validation' noValidate>
    <div className='mb-4'>
      <label className='block mb-1' htmlFor='repairID'>Repair ID</label>
      <input
        type='text'
        className={`w-full px-3 py-2 border rounded ${
          errors.repairID ? 'border-red-500' : 'border-gray-400'
        }`}
        id='repairID'
        name='repairID'
        placeholder='Enter Repair ID'
        value={this.state.repairID}
        onChange={this.handleInputChange}
        required
      />
      {errors.repairID && (
        <div className='text-red-500 text-xs mt-1'>{errors.repairID}</div>
      )}
    </div>
    <div className='mb-4'>
      <label className='block mb-1' htmlFor='phoneNum'>Phone Number</label>
      <input
        type='number'
        className={`w-full px-3 py-2 border rounded ${
          errors.phoneNum ? 'border-red-500' : 'border-gray-400'
        }`}
        id='phoneNum'
        name='phoneNum'
        placeholder='Enter Phone Number'
        value={this.state.phoneNum}
        onChange={this.handleInputChange}
        required
      />
      {errors.phoneNum && (
        <div className='text-red-500 text-xs mt-1'>{errors.phoneNum}</div>
      )}
    </div>
    <div className='mb-4'>
      <label className='block mb-1' htmlFor='device'>Device</label>
      <select
        className={`w-full px-3 py-2 border rounded ${
          errors.device ? 'border-red-500' : 'border-gray-400'
        }`}
        id='device'
        name='device'
        value={this.state.device}
        onChange={this.handleInputChange}
        required
      >
        <option value=''>Select a device</option>
        <option value='Smart Phone'>Smart Phone</option>
        <option value='Mobile Phone'>Mobile Phone</option>
        <option value='Tablet'>Tablet</option>
        <option value='Laptop'>Laptop</option>
        <option value='iPad'>iPad</option>
        <option value='iPhone'>iPhone</option>
        <option value='Mac Book'>Mac Book</option>
      </select>
      {errors.device && (
        <div className='text-red-500 text-xs mt-1'>{errors.device}</div>
      )}
    </div>
    <div className='mb-4'>
      <label className='block mb-1' htmlFor='reason'>Reason</label>
      <textarea
        className={`w-full px-3 py-2 border rounded ${
          errors.reason ? 'border-red-500' : 'border-gray-400'
        }`}
        id='reason'
        name='reason'
        placeholder='Enter the Reason'
        value={this.state.reason}
        onChange={this.handleInputChange}
        required
      ></textarea>
      {errors.reason && (
        <div className='text-red-500 text-xs mt-1'>{errors.reason}</div>
      )}
    </div>
          <div className='' style={{marginBottom: '15px', width:'200px'}}>
            <label style={{marginBottom: '5px'}}>Date</label>
            <input type="date" 
            className={`form-control ${
              errors.givenDate ? 'is-invalid' : ''
            }`}
            name='givenDate'
            placeholder='Enter the Date'
            value={this.state.givenDate}
            onChange={this.handleInputChange}/>
            {errors.givenDate && (
          <div className='invalid-feedback'>{errors.givenDate}</div> )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Customer Address</label>
            <input type="text" 
            className={`form-control ${
              errors.customerAddress ? 'is-invalid' : ''
            }`}
            name='customerAddress'
            placeholder='Enter Customer Address'
            value={this.state.customerAddress}
            onChange={this.handleInputChange}/>
            {errors.customerAddress && (
          <div className='invalid-feedback'>{errors.customerAddress}</div> )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Repair Price</label>
            <input type="text" 
            className='form-control'
            name='repairPrize'
            placeholder='Enter The Price'
            value={this.state.repairPrize}
            onChange={this.handleInputChange}/>
          </div>

          <button className='btn btn-success' type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
          </button>

        </form>
      </div>
    );
  }
}
