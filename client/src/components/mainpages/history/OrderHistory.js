// import React, { useContext, useEffect } from 'react'
// import { GlobalState } from '../../../GlobalState'
// import axios from 'axios'

// function OrderHistory() {
//   const state = useContext(GlobalState)
//   const [history, setHistory] = state.userAPI.history
//   const [isAdmin] = state.userAPI.isAdmin
//   const [token] = state.token

//   useEffect(() => {
//     if (token) {
//       const getHistory = async () => {
//         if (isAdmin) {
//           const res = await axios.get('/api/payment', {
//             headers: { Authorization: token },
//           })
//           setHistory(res.data)
//         } else {
//           const res = await axios.get('/user/history', {
//             headers: { Authorization: token },
//           })
//           setHistory(res.data)
//         }
//       }
//       getHistory()
//     }
//   }, [token, isAdmin, setHistory])

//   const params = useParams()

//   useEffect(() => {
//     if (params.id) {
//       history.forEach((item) => {
//         if (item._id === params.id) setHistory(item)
//       })
//     }

//   }, [params.id, history])

//   const handleDelete = (id) => {
//     axios.delete(`payment/delete/${id}`, {
//       headers: { Authorization: token },
//     }).then((res) => {
//       setHistory(history.filter((item) => item._id !== id))
//       alert('Order Cancled Successfully');
//     }).catch((err) => {
//       alert(err.response.data.msg)
//     })
//   }

//   return (
//     <div className="history-page m-8">
//       <h2>History</h2>

//       <h4>You have {history.length} ordered</h4>

//       <table>
//         <thead>
//           <tr>
//             <th>Date of Purchased</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {history.map((items) => (
//             <tr key={items._id}>
//               <td>{new Date(items.createdAt).toLocaleDateString()}</td>
//               <td>
//                 <table style={{ margin: '30px 0px' }}>
//                   <thead>
//                     <tr>
//                       <th></th>
//                       <th>Products</th>
//                       <th>Quantity</th>
//                       <th>Price</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {items.cart.map((item) => (
//                       <tr key={item._id}>
//                         <td>
//                           <img src={item.images.url} alt="" />
//                         </td>
//                         <td>{item.title}</td>
//                         <td>{item.quantity}</td>
//                         <td>LKR {item.price * item.quantity}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <td>
//                 {
//                   <div className="delete-payment ">
//                     <button className=' hover:text-red-700' onClick={() => handleDelete(items._id)}>Cancel Order</button>
//                   </div>
//                 }
//                 </td>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default OrderHistory;

import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
  const state = useContext(GlobalState)
  const [history, setHistory] = state.userAPI.history
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get('/api/payment', {
            headers: { Authorization: token },
          })
          setHistory(res.data)
        } else {
          const res = await axios.get('/user/history', {
            headers: { Authorization: token },
          })
          setHistory(res.data)
        }
      }
      getHistory()
    }
  }, [token, isAdmin, setHistory])

  const params = useParams()

  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) setHistory(item)
      })
    }

  }, [params.id, history])

  const handleDelete = (id) => {
    axios.delete(`payment/delete/${id}`, {
      headers: { Authorization: token },
    }).then((res) => {
      setHistory(history.filter((item) => item._id !== id))
      alert('Order Cancled Successfully');
    }).catch((err) => {
      alert(err.response.data.msg)
    })
  }

  return (
    <div className="history-page m-8">
      <h2>History</h2>

      <h4>You have {history.length} ordered</h4>

      <table>
        <thead>
          <tr>
            <th>Date of Purchased</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((items) => (
            <tr key={items._id}>
              <td>{new Date(items.createdAt).toLocaleDateString()}</td>
              <td>
                <table style={{ margin: '30px 0px' }}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Products</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.cart.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <img src={item.images.url} alt="" />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>LKR {item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <td>
                {
                  <div className="delete-payment ">
                    <button className=' hover:text-red-700' onClick={() => handleDelete(items._id)}>Cancel Order</button>
                  </div>
                }
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistory;