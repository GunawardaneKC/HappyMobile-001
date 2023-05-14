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
      [name]:value
    });
  }


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

      <div className='max-w-lg mx-auto my-8'>
        <h1 className='text-3xl font-bold mb-4'>Add new Repair</h1>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' noValidate>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='repairID'>Repair ID</label>
            <input type='text'
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.repairID ? 'is-invalid' : ''
                  }`}
                  name='repairID'
                  placeholder='Enter repairID'
                  value={this.state.repairID}
                  onChange={this.handleInputChange}
                  required />
                {errors.repairID && (
                  <div className='invalid-feedback text-red-500'>{errors.repairID}</div>
                )}
          </div>

          <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2' htmlFor='customerName' >Customer Name</label>
                <input
                type='text'
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.customerName ? 'is-invalid' : ''
                }`}
                name='customerName'
                placeholder="Enter Customer's Name"
                value={this.state.customerName}
                onChange={this.handleInputChange}
                required/>
              {errors.customerName && (
                <div className='invalid-feedback text-red-500'>{errors.customerName}</div>
              )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='phoneNum'>Phone Number</label>
            <input
              type='number'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phoneNum ? 'is-invalid' : ''
              }`}
              name='phoneNum'
              placeholder='Enter Phone Number'
              value={this.state.phoneNum}
              onChange={this.handleInputChange}
              required
            />
        {errors.phoneNum && (
          <div className='invalid-feedback text-red-500'>{errors.phoneNum}</div>
        )}
          </div>

          <div className='mb-4'>
                  <label className='block text-gray-700 font-bold mb-2' htmlFor='device'>Device</label>
                  {/* <input type="text" 
                  className='form-control'
                  name='device'
                  placeholder='Enter Device Name'
                  value={this.state.device}
                  onChange={this.handleInputChange}/> */}
               <select
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.device ? 'is-invalid' : ''
          }`}
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
            <div className='invalid-feedback text-red-500'>{errors.device}</div>
          )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Brand</label>
            <input type="text" 
           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.Brand ? 'is-invalid' : ''
            }`}
            name='Brand'
            placeholder='Enter the Brand'
            value={this.state.Brand}
            onChange={this.handleInputChange}
            required />
            {errors.Brand && (
                <div className='invalid-feedback text-red-500'>{errors.Brand}</div>
              )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Model</label>
            <input type="text" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.Model ? 'is-invalid' : ''
              }`}
            name='Model'
            placeholder='Enter the Model'
            value={this.state.Model}
            onChange={this.handleInputChange}/>
            {errors.Model && (
                <div className='invalid-feedback text-red-500'>{errors.Model}</div>
              )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='reason'>Reason</label>
            <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.reason ? 'is-invalid' : ''
          }`}
          name='reason'
          placeholder='Enter the Reason'
          value={this.state.reason}
          onChange={this.handleInputChange}
          required></textarea>
        {errors.reason && (
          <div className='invalid-feedback text-red-500 -mt-3'>{errors.reason}</div> )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='givenDate'>Date</label>
            <input type="date" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.givenDate ? 'is-invalid' : ''
            }`}
            name='givenDate'
            placeholder='Enter the Date'
            value={this.state.givenDate}
            onChange={this.handleInputChange}/>
            {errors.givenDate && (
          <div className='invalid-feedback text-red-500'>{errors.givenDate}</div> )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Customer Address</label>
            <input type="text" 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.customerAddress ? 'is-invalid' : ''
            }`}
            name='customerAddress'
            placeholder='Enter Customer Address'
            value={this.state.customerAddress}
            onChange={this.handleInputChange}/>
            {errors.customerAddress && (
          <div className='invalid-feedback text-red-500'>{errors.customerAddress}</div> )}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor='repairPrize'>Repair Price</label>
            <input type='number'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='repairPrize'
              placeholder='Enter The Price'
              value={this.state.repairPrize}
              onChange={this.handleInputChange}
            />
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            style={{ marginTop: '15px' }}
            onClick={this.onSubmit}>
            <i className='far fa-check-square'></i>
            &nbsp;Save
          </button>

        </form>
</div>

    );
  }
}