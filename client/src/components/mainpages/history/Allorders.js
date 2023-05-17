import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

const Ord = () => {
  const [posts, setPosts] = useState([]);

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

  // const deletePost = (id) => {
  //   axios.delete(`payment/delete/${id}`).then(res => {
  //     alert('Deleted Successfully');
  //     retrievePosts();
  //   });
  // };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.orderId.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.name.toLowerCase().includes(searchKey)
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

      <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/orderRep`}>Get Report</a> 

      <h3 style={{ marginTop: '40px', marginBottom: '-30px'}}>Orders</h3>
      <table className='table table-hover' style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Order ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email Address</th>
            <th scope='col'>Payment</th>
            <th scope='col'>Details</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post._id}>
              <th scope='row'>{index + 1}</th>
              <td>{post.orderId}</td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={post.payment}
                  onChange={(e) => {
                    const value = e.target.value;
                    const id = post._id;
                    axios.put(`/payment/update/${id}`, { payment: value })
                      .then((response) => {
                        console.log(response.data);
                        retrievePosts();
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                </select>
              </td>
              <td>
                <table style={{ margin: "30px 0px" }}>
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Products</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.cart.map((item) => (
                      <tr key={item._id}>
                        <td>{item.product_id}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>LKR {item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              {/* <td>
                &nbsp;
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  export default Ord;