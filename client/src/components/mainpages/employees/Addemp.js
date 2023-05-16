// import React from 'react'
// import axios from 'axios';
// import { useState } from 'react'
 
// export default function Addemp() {
    
//     const [first_name , setfirst_name] = useState("");
//     const [last_name , setlast_name] = useState("");
//     const [email,setemail] = useState("");
//     const [Address,setAddress] = useState("");
//     const[NIC,setNIC] = useState("");
//     const[Phone,setPhone] = useState("");
//     // const[CusImg,setCusImg] = useState("")
//     const[massage,setMessage] = useState("")
   
   
   
    
//   //  const onChangeFile = e =>{
//   //   setCusImg(e.target.files[0]);
//   //  }

//    const changeOnClick = (e) =>{
//     e.preventDefault();
    
//     const formData = new FormData();

//     formData.append("first_name",first_name)
//     formData.append("last_name",last_name)
//     formData.append("email",email)
//     formData.append("Address",Address)
//     formData.append("NIC",NIC)
//     formData.append("Phone",Phone)
//     // formData.append("CusImg",CusImg)

//      setfirst_name("");
//      setlast_name("");
//      setemail("");
//      setAddress("");
//      setNIC("");
//      setPhone("");
//     //  setCusImg("");
//     axios.post("http://localhost:5000/Emp/save",formData)
//     .then((res) =>setMessage(res.data))
//     alert("Added Successfully")
//     .catch((err)=>{
//         console.log(err);
//     });
        

//     }
    
   
//    return (
//      <div className='container'>
//          <form onSubmit={changeOnClick} encType='multipart/form-data'>
//            <div className='mb-4'>
//            <label htmlFor="first_name">First Name</label>
//             <input type={'text'}
//              value={first_name}
//              onChange={(e)=>setfirst_name(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='first_name'
//              />
//              </div>

//            <div className='mb-4'>
//            <label htmlFor="last_name">Last Name</label>
//             <input type={'text'}
//              value={last_name}
//              onChange={(e)=>setlast_name(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='Last_Name'
//              />
//              </div>

//              <div className='mb-4'>
//            <label htmlFor="email">Email</label>
//             <input type={'email'}
//              value={email}
//              onChange={(e)=>setemail(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='email'
//              />
//              </div>


//            <div className='mb-4'>
//            <label htmlFor="Address">Address</label>
//             <input type={'text'}
//              value={Address}
//              onChange={(e)=>setAddress(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='Address'
//              />
//              </div>


//            <div className='mb-4'>
//            <label htmlFor="NIC">NIC</label>
//             <input type={'text'}
//              value={NIC}
//              onChange={(e)=>setNIC(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='NIC'
//              />
//              </div>

//              <div className='mb-4'>
//            <label htmlFor="Phone">Phone</label>
//             <input type={'number'}
//              value={Phone}
//              onChange={(e)=>setPhone(e.target.value)}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='Phone'
//              />
//              </div>

//              {/* <div className='mb-4'>
//            <label htmlFor="file">image</label>
//             <input type={'file'}
//              image="CusImg"
//              onChange={onChangeFile}
//              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//              placeholder='add c'
//              />
//              </div> */}
//              <button type='submit'>add</button>
//          </form>
//      </div>
//    )
//  }

import React, { Component } from 'react'
import axios from 'axios';
export default class CreatePosts extends Component {

  constructor(props){
    super(props);
    this.state={
       first_name:"",
       last_name:"",
       email:"",
       Address:"",
       NIC:"",
      Phone:"",
      date:"",
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

    const {first_name,last_name,email,Address,NIC,Phone,date} = this.state;

    const data = {
      first_name:first_name,
       last_name:last_name,
       email:email,
       Address:Address,
       NIC:NIC,
       Phone:Phone,
       date:date,
    }

    console.log(data)

    axios.post("/Emp/save",data).then((res) => {
      if(res.data.success){
        alert("New Employee added Successfully!");
        	this.setState({
        	first_name:"",
       		last_name:"",
      		email:"",
          Address:"",
       		NIC:"",
      		Phone:"",
          date:"",
       	 })
      }
    })

  }

  render() {
    return (

      <div className='max-w-lg mx-auto my-8'>
        <h1 className='text-3xl font-bold mb-4'>Add new Employee</h1>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' noValidate>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>First Name</label>
            <input type="text" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='first_name'
            placeholder='Enter First Name'
            value={this.state.first_name}
            onChange={this.handleInputChange}
            required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Last Name</label>
            <input type="text" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='last_name'
            placeholder='Enter Last Name'
            value={this.state.last_name}
            onChange={this.handleInputChange}/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Email</label>
            <input type="email" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='email'
            placeholder='Enter Email'
            value={this.state.email}
            onChange={this.handleInputChange}/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Address</label>
            <input type="text" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='Address'
            placeholder='Enter Address'
            value={this.state.Address}
            onChange={this.handleInputChange}/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>NIC</label>
            <input type="text" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='NIC'
            placeholder='Enter NIC'
            value={this.state.NIC}
            onChange={this.handleInputChange}/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Phone Number</label>
            <input type="number" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='Phone'
            placeholder='Enter Phone Number'
            value={this.state.Phone}
            onChange={this.handleInputChange}/>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Allocated Date</label>
            <input type="date" 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='date'
            placeholder='Enter the Date'
            value={this.state.date}
            onChange={this.handleInputChange}/>
          </div>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" style={{marginTop: '15px'}} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
          </button>

        </form>
      </div>
    );
  }
}
