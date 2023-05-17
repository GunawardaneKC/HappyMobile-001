// import React, { Component } from 'react'
// import axios from 'axios';
// export default class CreatePosts extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       repairID:"",
//       customerName:"",
//       phoneNum:"",
//       device:"",
//       Brand:"",
//       Model:"",
//       reason:"",
//       givenDate:"",
//       customerAddress:"",
//       repairPrize:"",
//     }
//   }

//   handleInputChange = (e) => {
//     const {name, value} = e.target;

//     this.setState({
//       ...this.state,
//       [name]:value
//     })
//   }


//   onSubmit = (e) => {
//     e.preventDefault();

//     const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = this.state;

//     const data = {
//       repairID:repairID,
//       customerName:customerName,
//       phoneNum:phoneNum,
//       device:device,
//       Brand:Brand,
//       Model:Model,
//       reason:reason,
//       givenDate:givenDate,
//       customerAddress:customerAddress,
//       repairPrize:repairPrize,
//     }

//     console.log(data)

//     axios.post("/repair/save",data).then((res) => {
//       if(res.data.success){
//         alert("New Repair added Successfully!");
//         this.setState({
//           repairID:"",
//           customerName:"",
//           phoneNum:"",
//           device:"",
//           Brand:"",
//           Model:"",
//           reason:"",
//           givenDate:"",
//           customerAddress:"",
//           repairPrize:"",
//         })
//       }
//     })
//   }

//   render() {
//     return (

//       <div className='col-md-8 mt-4 mx-auto'>
//         <h1 className='h3 mb-3 font-weight-normal'>Add new Repair</h1>
//         <form className='needs-validation' noValidate>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Repair ID</label>
//             <input type="text" 
//             className='form-control'
//             name='repairID'
//             placeholder='Enter repairID'
//             value={this.state.repairID}
//             onChange={this.handleInputChange}
//             required
//             />
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Customer Name</label>
//             <input type="text" 
//             className='form-control'
//             name='customerName'
//             placeholder='Enter customerName'
//             value={this.state.customerName}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Phone Number</label>
//             <input type="number" 
//             className='form-control'
//             name='phoneNum'
//             placeholder='Enter Post Category'
//             value={this.state.phoneNum}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Device</label>
//             <input type="text" 
//             className='form-control'
//             name='device'
//             placeholder='Enter Device Name'
//             value={this.state.device}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Brand</label>
//             <input type="text" 
//             className='form-control'
//             name='Brand'
//             placeholder='Enter the Brand'
//             value={this.state.Brand}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Model</label>
//             <input type="text" 
//             className='form-control'
//             name='Model'
//             placeholder='Enter the Model'
//             value={this.state.Model}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Reason</label>
//             <textarea 
//             className='form-control'
//             name='reason'
//             placeholder='Enter the Reason'
//             value={this.state.reason}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Date</label>
//             <input type="date" 
//             className='form-control'
//             name='givenDate'
//             placeholder='Enter the Date'
//             value={this.state.givenDate}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Customer Address</label>
//             <input type="text" 
//             className='form-control'
//             name='customerAddress'
//             placeholder='Enter Customer Address'
//             value={this.state.customerAddress}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className='form-group' style={{marginBottom: '15px'}}>
//             <label style={{marginBottom: '5px'}}>Repair Price</label>
//             <input type="number" 
//             className='form-control'
//             name='repairPrize'
//             placeholder='Enter The Price'
//             value={this.state.repairPrize}
//             onChange={this.handleInputChange}/>
//           </div>

//           <button className='btn btn-success' type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
//               <i className='far fa-check-square'></i>
//               &nbsp;Save
//           </button>

//         </form>
//       </div>
//     );
//   }
// }

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
      newErrors.customerName = 'First Name is required';
    }

    if (!formData.device) {
      newErrors.device = 'Last Name is required';
    }

    if (!formData.phoneNum) {
      newErrors.phoneNum = 'Phone Number is required';
    } else if (!/^[0-9]{10}$/i.test(formData.PhonephoneNum)) {
      newErrors.phoneNum = 'Phone Number is invalid';
    }

    if (!formData.Brand) {
      newErrors.Brand = 'Address is required';
    }

    if (!formData.Model) {
      newErrors.Model = 'Date is required';
    }

    if (!formData.reason) {
      newErrors.reason = 'Date is required';
    }

    if (!formData.givenDate) {
      newErrors.givenDate = 'Date is required';
    }

    if (!formData.customerAddress) {
      newErrors.customerAddress = 'Date is required';
    }

    if (!formData.repairPrize) {
      newErrors.repairPrize = 'Date is required';
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
    <div className='col-md-8 mt-4 mx-auto'>
      <h1 className='h3 mb-3 font-weight-normal'>Add new Repair</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Repair ID</label>
          <input
            type='text'
            className={`form-control ${errors.repairID && 'is-invalid'}`}
            name='repairID'
            placeholder='Enter repairID'
            value={formData.repairID}
            onChange={handleInputChange}
            required
          />
          {errors.repairID && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.repairID}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Customer Name</label>
          <input
            type='text'
            className={`form-control ${errors.customerName} && 'is-invalid'}`}
            name='customerName'
            placeholder='Enter customerName'
            value={formData.customerName}
            onChange={handleInputChange}
          />
          {errors.customerName && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.customerName}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Phone Number</label>
          <input
            type='number'
            className={`form-control ${errors.phoneNum && 'is-invalid'}`}
            name='phoneNum'
            placeholder='Enter Post Category'
            value={formData.phoneNum}
            onChange={handleInputChange}
          />
          {errors.phoneNum && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.phoneNum}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Device</label>
          <input
            type='text'
            className={`form-control ${errors.device && 'is-invalid'}`}
            name='device'
            placeholder='Enter Device Name'
            value={formData.device}
            onChange={handleInputChange}
          />
          {errors.device && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.device}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Brand</label>
          <input
            type='text'
            className={`form-control ${errors.Brand && 'is-invalid'}`}
            name='Brand'
            placeholder='Enter the Brand'
            value={formData.Brand}
            onChange={handleInputChange}
          />
          {errors.Brand && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.Brand}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Model</label>
          <input
            type='text'
            className={`form-control ${errors.Model && 'is-invalid'}`}
            name='Model'
            placeholder='Enter the Model'
            value={formData.Model}
            onChange={handleInputChange}
          />
          {errors.Model && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.Model}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Reason</label>
          <textarea
            className={`form-control ${errors.reason && 'is-invalid'}`}
            name='reason'
            placeholder='Enter the Reason'
            value={formData.reason}
            onChange={handleInputChange}
          />
          {errors.reason && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.reason}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Date</label>
          <input
            type='date'
            className={`form-control ${errors.givenDate && 'is-invalid'}`}
            name='givenDate'
            placeholder='Enter the Date'
            value={formData.givenDate}
            onChange={handleInputChange}
          />
          {errors.givenDate && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.givenDate}</div>
          )}
        </div>
  
        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Customer Address</label>
          <input
            type='text'
            className={`form-control ${errors.customerAddress && 'is-invalid'}`}
            name='customerAddress'
            placeholder='Enter Customer Address'
            value={formData.customerAddress}
            onChange={handleInputChange}
          />
          {errors.customerAddress && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.customerAddress}</div>
          )}
        </div>

        <div className='form-group' style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Repair Price</label>
          <input
            type='text'
            className={`form-control ${errors.repairPrize && 'is-invalid'}`}
            name='repairPrize'
            placeholder='Enter Customer Address'
            value={formData.repairPrize}
            onChange={handleInputChange}
          />
          {errors.repairPrize && (
            <div className="invalid-feedback" style={{color:"red"}}>{errors.repairPrize}</div>
          )}
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: '15px' }}
        >
          <i className="far fa-check-square"></i>
          &nbsp;Save
        </button>
      </form>
    </div>
  );
};
  

export default CreatePosts;
