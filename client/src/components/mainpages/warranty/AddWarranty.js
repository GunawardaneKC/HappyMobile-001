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

      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add Warranty</h1>
        <form className='needs-validation' noValidate>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Invoice Number</label>
          <input type="text" 
          className='form-control'
          name='invoiceNo'
          placeholder='Enter invoice'
          value={formData.invoiceNo}
          onChange={handleInputChange}/>
          {error.invoiceNo && <div className='invalid-feedback' style={{color:"red"}}>{error.invoiceNo}</div>}
        </div>

      <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Customer's Name</label>
          <input type="text" 
          className='form-control'
          name='cName'
          placeholder='Enter customer Name'
          value={formData.cName}
          onChange={handleInputChange}/>
          {error.cName && <div className='invalid-feedback' style={{color:"red"}}>{error.cName}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Phone Number</label>
          <input type="number" 
          className='form-control'
          name='phoneNo'
          placeholder='Enter Phone Number'
          value={formData.phoneNo}
          onChange={handleInputChange}/>
          {error.phoneNo && <div className='invalid-feedback' style={{color:"red"}}>{error.phoneNo}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Imei Number</label>
          <input type="text" 
          className='form-control'
          name='imeiNo'
          placeholder='Enter imei'
          value={formData.imeiNo}
          onChange={handleInputChange}/>
          {error.imeiNo && <div className='invalid-feedback' style={{color:"red"}}>{error.imeiNo}</div>}
        </div>

        <div className='form-group' style={{marginBottom: '15px'}}>
          <label style={{marginBottom: '5px'}}>Phone Model</label>
          <input type="text" 
          className='form-control'
          name='model'
          placeholder='Enter model'
          value={formData.model}
          onChange={handleInputChange}/>
          {error.model && <div className='invalid-feedback' style={{color:"red"}}>{error.model}</div>}
        </div>

          <button className='btn btn-success' type="submit" style={{marginTop: '15px'}} onClick={onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
          </button>

        </form>
      </div>
    );

}
export default AddWarranty
