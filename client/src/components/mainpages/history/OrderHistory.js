
import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";


function OrderHistory() {
  const state = useContext(GlobalState);
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, isAdmin, setHistory]);

  return (
    <div className="history-page bg-opacity-60 backdrop-filter backdrop-blur-lg bg-purple-900 text-white mt-8 py-8 px-4 rounded-lg mx-8 shadow-xl">
  <h2 className="text-3xl font-bold mb-4">Order History</h2>

  <h4 className="text-lg mb-2">
    You have {history.length} {history.length === 1 ? "order" : "orders"}
  </h4>

  <table className="w-full table-auto">
    <thead>
      <tr>
        {/* <th>Payment ID</th> */}
        <th className="px-4 py-2">Date of Purchased</th>
        <th className="px-4 py-2">Products</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {history.map((items) => (
        <tr key={items._id}>
          {/* <td>{items.paymentID}</td> */}
          <td className="border px-4 py-2">
            {new Date(items.createdAt).toLocaleDateString()}
          </td>
          <td className="border px-4 py-2">{`${items._id}`}</td>
          <td className="border px-4 py-2">{`${items.title}`}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default OrderHistory;
