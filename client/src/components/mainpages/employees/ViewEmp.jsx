// import React, { Component } from 'react'

// import { BsDatabaseFillAdd,BsFillCaretLeftFill } from 'react-icons/bs';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import { BsCart4} from "react-icons/bs";
// import Form from 'react-bootstrap/Form';



// export default class ViewEmp extends Component {
//   constructor(props){
//     super(props);
 
//     this.state={
//       posts:[]
//     };
//   }
//   componentDidMount(){
//     this.viewPosts();
//   }
   
//  //retrivew funtion
//   viewPosts(){
//     axios.get("http://localhost:5000/Emp").then(res =>{
//       if(res.data.success){
//         this.setState({
//           posts:res.data.existingPosts
//         });
//         //show array list 
//         console.log(this.state.posts)        
//       }
//     });
//   }
//   //delete function
//   onDelete=(id)=>{
//     axios.delete(`http://localhost:5000/Emp/delete/${id}`).then((res)=>{
//       alert("Deleted");
//       this.viewPosts();
//     })
//   }
  
//  //seraching part  
//  filterData(posts,searchKey){
  

//   const result = posts.filter((post)=>
//       // post.first_name.toLowerCase().includes(searchKey)||
//       // post.last_name.toLowerCase().includes(searchKey)||
//       post.email.toLowerCase().includes(searchKey)||
//       post.NIC.toLowerCase().includes(searchKey)
      
//   )
//   this.setState({posts:result})
// }


// handleSearchArea =(e)=>{

// console.log(e.currentTarget.value);

// const searchKey = e.currentTarget.value;

// axios.get("http://localhost:5000/Emp").then(res =>{
// if(res.data.success){
  
//   this.filterData(res.data.existingPosts,searchKey)
         
// }
// });
// }
   

//   render() {

//     return (
      
//         <div className='container'>
//           <Form className="d-flex mb-4 mx-0" >
//                   <Form.Control
//                     type="search"
//                     placeholder="Enter"
//                     className="me-2"
//                     aria-label="Search"
//                     name="searchQuary"
//                     onChange={this.handleSearchArea}
//                   />
//                   <Button variant="danger">Search</Button>
//                 </Form><br/>

           
//         <a className="btn btn-primary" href="/add/emp" style={{marginBottom:'20px'}}>
//                          <i className="fas fa-tash-altt"></i>&nbsp;Add new Employee
//            </a>
//         <div className='row'>
//         {this.state.posts.map((posts)=>(
//         <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>    
//           <div className='card p-0 overflow-hidden h-100 shadow' alt='im'>
//           <img src={posts.CusImg} className='card-img-top img-fluid' alt='brand'/>   
//                <div className='card-body text-center'>  
//                     <h5 className='card-title'>{posts.first_name}&nbsp;{posts.last_name}</h5>
//                     <p className='text'>{posts.email}</p>
//                     <p className='text'>{posts.Phone}</p>
//                     <p className='text'>{posts.Address}</p>
//                     <p className='text'>{posts.NIC}</p>
//                     <p className='text'>{posts.date}</p>
             
//                     <a className="btn btn-warning" href={`/Editemp/${posts._id}`}>
//                          <i className="fas fa-edit"></i>&nbsp;Edit
//                        </a>
//                        &nbsp; &nbsp; 
//                        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
//                          <i className="fas fa-tash-altt"></i>&nbsp;Delete
//                        </a>
//                 </div>
                
//             </div>
            
//          </div>
               
//        ))}
//        <div className='btnback'>
//        <a className="btn btn-warning" href={`/admin`}>
//        <BsFillCaretLeftFill/>Back
       
//                        </a></div>
                 
//        </div>
                      
//            </div> 
            
 
//   )
// }
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Emp = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/Emp').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/Emp/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };


  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.email.toLowerCase().includes(searchKey)||
      post.NIC.toLowerCase().includes(searchKey)

    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/Emp').then(res => {
      if (res.data.success) {
        filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  return (
    <div className='mx-auto max-w-7xl mt-16'>
      <div className="flex items-center justify-between mb-8">
      <div className='flex items-center'>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <i className='fas fa-search text-gray-500'></i>
      </div>  
          <input className='ml-3 py-2 px-4 w-80 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-cyan-500 text-gray-950' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
        <div className='flex space-x-4'>
          <button className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md"><Link to='/add/emp' style={{textDecoration: 'none'}}>Add New Employee</Link></button>&nbsp;
        </div>
      </div>
      <h3 className='mb-4 mt-8 text-lg font-medium'>Employees</h3>
      <table className='w-full border-collapse border border-gray-400'>
        <thead>
          <tr class="bg-purple-950">
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>No</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>First Name</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Last Name</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Email Address</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Phone Number</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Address</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>NIC</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Allocated Date</th>
            <th class="px-4 py-2 text-left border border-gray-400" scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id} className='bg-transparent'>
              <th class="px-4 py-2 text-left border border-gray-400 " scope='row'>{index + 1}</th>
              {/* <td>
                <Link to={`/Emp/${post._id}`} style={{ textDecoration: 'none' }}>
                  {post.repairID}
                </Link>
              </td> */}
              <td class="px-4 py-2 text-left border border-gray-400">{post.first_name}</td>
              <td class="px-4 py-2 text-left border border-gray-400">{post.last_name}</td>
              <td class="px-4 py-2 text-left border border-gray-400">{post.email}</td>
              <td class="px-4 py-2 text-left border border-gray-400">{post.Phone}</td>
		          <td class="px-4 py-2 text-left border border-gray-400">{post.Address}</td>
              <td class="px-4 py-2 text-left border border-gray-400">{post.NIC}</td>
              <td class="px-4 py-2 text-left border border-gray-400">{post.date}</td>		
              <td class="px-4 py-2 text-left border border-gray-400 font-bold">
                <Link to={`/Editemp/${post._id}`} className='text-amber-400 hover:underline mr-6'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
                &nbsp;
                <button className='text-red-800 hover:underline' onClick={() => deletePost(post._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
	</table>
    </div>
  );
}
export default Emp;  
