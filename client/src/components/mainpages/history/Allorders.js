import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

const Ord = () => {
  const state = useContext(GlobalState)
  const [history] = state.userAPI.history
  const [orderDetails, setOrderDetails] = useState([])

  const [posts, setPosts] = useState([]);
  
  const params = useParams()


  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/Ord').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  useEffect(() => {
    if(params.id){
        history.forEach(item =>{
            if(item._id === params.id) setOrderDetails(item)
        })
    }
  },[params.id, history])


  const deletePost = (id) => {
    axios.delete(`payment/delete/${id}`).then(res => {
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
    axios.get('/Ord').then(res => {
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
            <th scope='col'>Order ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Details</th>
            {/* <th scope='col'>Address</th> */}
            {/* <th scope='col'>NIC</th>
            <th scope='col'>Allocated Date</th> */}
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
              <td>{post._id}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>
              <table style={{margin: "30px 0px"}}>
                <thead>
                    <tr>
                        {/* <th></th> */}
                        <th>Product ID</th>
                        <th>Products</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.cart.map(item =>(
                        <tr key={item._id}>
                            {/* <td><img src={item.images.url} alt="" /></td> */}
                            <td>{item.product_id}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>LKR {item.price * item.quantity}</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>

              </td>
		          {/* <td>{post.Address}</td>
              <td>{post.NIC}</td>
              <td>{post.date}</td>		 */}
              <td>
                <Link to={`/Editord/${post._id}`} className='btn btn-warning'>
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
export default Ord;