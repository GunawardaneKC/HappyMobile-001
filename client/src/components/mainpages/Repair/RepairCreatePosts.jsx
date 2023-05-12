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
    }
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  onSubmit = (e) => {
    e.preventDefault();

    const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = this.state;

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
        })
      }
    })

    

  }

  render() {
    return (

      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add new Repair</h1>
        <form className='needs-validation' noValidate>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Repair ID</label>
            <input type="text" 
            className='form-control'
            name='repairID'
            placeholder='Enter repairID'
            value={this.state.repairID}
            onChange={this.handleInputChange}
            required
            />
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Customer Name</label>
            <input type="text" 
            className='form-control'
            name='customerName'
            placeholder='Enter customerName'
            value={this.state.customerName}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Phone Number</label>
            <input type="number" 
            className='form-control'
            name='phoneNum'
            placeholder='Enter Post Category'
            value={this.state.phoneNum}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Device</label>
            <input type="text" 
            className='form-control'
            name='device'
            placeholder='Enter Device Name'
            value={this.state.device}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Brand</label>
            <input type="text" 
            className='form-control'
            name='Brand'
            placeholder='Enter the Brand'
            value={this.state.Brand}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Model</label>
            <input type="text" 
            className='form-control'
            name='Model'
            placeholder='Enter the Model'
            value={this.state.Model}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Reason</label>
            <textarea 
            className='form-control'
            name='reason'
            placeholder='Enter the Reason'
            value={this.state.reason}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Date</label>
            <input type="date" 
            className='form-control'
            name='givenDate'
            placeholder='Enter the Date'
            value={this.state.givenDate}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Customer Address</label>
            <input type="text" 
            className='form-control'
            name='customerAddress'
            placeholder='Enter Customer Address'
            value={this.state.customerAddress}
            onChange={this.handleInputChange}/>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom: '5px'}}>Repair Price</label>
            <input type="number" 
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
