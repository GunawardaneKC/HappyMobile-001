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
    <div className='container'>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input className='form-control' type="search" placeholder='Search' name='searchQuery' onChange={handleSearch} />
        </div>
      </div>
      <div>
        <button className="btn btn-success"><Link to='/add/emp' style={{textDecoration: 'none', color:'black'}}>Add New Employee</Link></button>&nbsp;
      </div>
      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Employees</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
          <th scope='col'>No</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Address</th>
            <th scope='col'>NIC</th>
            <th scope='col'>Allocated Date</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              {/* <td>
                <Link to={`/Emp/${post._id}`} style={{ textDecoration: 'none' }}>
                  {post.repairID}
                </Link>
              </td> */}
              <td>{post.first_name}</td>
              <td>{post.last_name}</td>
              <td>{post.email}</td>
              <td>{post.Phone}</td>
		          <td>{post.Address}</td>
              <td>{post.NIC}</td>
              <td>{post.date}</td>		
              <td>
                <Link to={`/Editemp/${post._id}`} className='btn btn-warning'>
                  <i className='fas fa-edit'></i>&nbsp;Edit
                </Link>
                &nbsp;
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>
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
