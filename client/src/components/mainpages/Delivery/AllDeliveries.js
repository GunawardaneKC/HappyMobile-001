import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

const Ord = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    retrievePosts();
  }, []);

  const retrievePosts = () => {
    axios.get('/delivery').then(res => {
      if (res.data.success) {
        setPosts(res.data.existingPosts);
      }
    });
  };

  const deletePost = (id) => {
    axios.delete(`/delivery/delete/${id}`).then(res => {
      alert('Deleted Successfully');
      retrievePosts();
    });
  };

  const filterPosts = (posts, searchKey) => {
    const result = posts.filter(post =>
      post.OrderID.toLowerCase().includes(searchKey) ||
      post.Address.toLowerCase().includes(searchKey) ||
      post.email.toLowerCase().includes(searchKey) ||
      post.NIC.toLowerCase().includes(searchKey)
    );
    setPosts(result);
  };

  const handleSearch = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get('/delivery').then(res => {
      if (res.data.success) {
        filterPosts(res.data.existingPosts, searchKey);
      }
    });
  };

  return (
    <div className="bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg m-4 p-6 rounded-md">
  <div className="mb-4">
    <input
      className="w-1/5 p-2 border border-gray-300 rounded-md focus:outline-none"
      type="search"
      placeholder="Search"
      name="searchQuery"
      onChange={handleSearch}
    />
  </div>
  <a className="bg-yellow-400 hover:bg-yellow-700 text-white py-2 px-4 rounded-l mb-4" href="/deliveryrepo">Get Report</a>
  <h3 className="mb-4 mt-4">Deliveries</h3>
  <table className="w-full" style={{ borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th scope="col" style={{ border: "2px solid blue" }}>No</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Order ID</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Recipient's Name</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Phone Number</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Recipient's Address</th>
      <th scope="col" style={{ border: "2px solid blue" }}>NIC</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Recipient's Email</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Delivery Status</th>
      <th scope="col" style={{ border: "2px solid blue" }}>Action</th>
    </tr>
  </thead>
  <tbody>
    {posts.map((post, index) => (
      <tr key={post._id}>
        <th scope="row" style={{ border: "2px solid blue" }}>{index + 1}</th>
        <td style={{ border: "2px solid blue" }}>{post.OrderID}</td>
        <td style={{ border: "2px solid blue" }}>{post.Name}</td>
        <td style={{ border: "2px solid blue" }}>{post.phone}</td>
        <td style={{ border: "2px solid blue" }}>{post.Address}</td>
        <td style={{ border: "2px solid blue" }}>{post.NIC}</td>
        <td style={{ border: "2px solid blue" }}>{post.email}</td>
        <td style={{ border: "2px solid blue" }}>
          <select
            className="text-slate-900"
            aria-label="Default select example"
            value={post.Status}
            onChange={(e) => {
              const value = e.target.value;
              const id = post._id;
              axios.put(`/delivery/update/${id}`, { Status: value })
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
            <option value="Delivered">Delivered</option>
          </select>
        </td>
        <td style={{ border: "2px solid blue" }}>
          <button className="text-red-500 hover:text-red-600" onClick={() => deletePost(post._id)}>
            <i className="fas fa-trash-alt"></i>&nbsp;Delete
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