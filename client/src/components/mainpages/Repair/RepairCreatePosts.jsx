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
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add new Repair</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Repair ID</label>
            <input
              type='text'
              className={`form-control ${
                errors.repairID ? 'is-invalid' : ''
              }`}
              name='repairID'
              placeholder='Enter Repair ID'
              value={this.state.repairID}
              onChange={this.handleInputChange}
              required
            />
            {errors.repairID && (
              <div className='invalid-feedback'>{errors.repairID}</div>
            )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Customer Name</label>
            <input
                type='text'
                className={`form-control ${
                  errors.customerName ? 'is-invalid' : ''
                }`}
                name='customerName'
                placeholder="Enter Customer's Name"
                value={this.state.customerName}
                onChange={this.handleInputChange}
                required
              />
              {errors.customerName && (
                <div className='invalid-feedback'>{errors.customerName}</div>
              )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Phone Number</label>
            <input
              type='number'
              className={`form-control ${
                errors.phoneNum ? 'is-invalid' : ''
              }`}
              name='phoneNum'
              placeholder='Enter Phone Number'
              value={this.state.phoneNum}
              onChange={this.handleInputChange}
              required
            />
        {errors.phoneNum && (
          <div className='invalid-feedback'>{errors.phoneNum}</div>
        )}
          </div>

          <div className='' style={{marginBottom: '15px', width:'200px'}}>
            <label style={{marginBottom: '5px'}}>Device</label>
            {/* <input type="text" 
            className='form-control'
            name='device'
            placeholder='Enter Device Name'
            value={this.state.device}
            onChange={this.handleInputChange}/> */}
            <select
          className={`form-control ${
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
            <div className='invalid-feedback'>{errors.device}</div>
          )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Brand</label>
            <input type="text" 
           className={`form-control ${
            errors.Brand ? 'is-invalid' : ''
            }`}
            name='Brand'
            placeholder='Enter the Brand'
            value={this.state.Brand}
            onChange={this.handleInputChange}
            required />
            {errors.Brand && (
                <div className='invalid-feedback'>{errors.Brand}</div>
              )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Model</label>
            <input type="text" 
            className={`form-control ${
              errors.Model ? 'is-invalid' : ''
              }`}
            name='Model'
            placeholder='Enter the Model'
            value={this.state.Model}
            onChange={this.handleInputChange}/>
            {errors.Model && (
                <div className='invalid-feedback'>{errors.Model}</div>
              )}
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Reason</label>
            <textarea
          className={`form-control ${
            errors.reason ? 'is-invalid' : ''
          }`}
          name='reason'
          placeholder='Enter the Reason'
          value={this.state.reason}
          onChange={this.handleInputChange}
          required
        ></textarea>
        {errors.reason && (
          <div className='invalid-feedback'>{errors.reason}</div> )}
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
