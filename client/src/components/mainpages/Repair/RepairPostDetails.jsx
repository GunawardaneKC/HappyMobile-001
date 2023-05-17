import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/repair/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
      }
    });
  }, [id]);

  const {repairID, customerName, phoneNum, device, Brand, Model, reason, givenDate, customerAddress, repairPrize} = post;

  return (
      <div className="mt-10 ml-10">
        <h3 className="text-xl font-bold mb-4">All the details about {repairID}</h3>
        <table className="table-auto w-auto border bg-sky-800">
          <tbody>
            <tr className="border">
              <td className="py-2 px-4 border">Customer Name:</td>
              <td className="py-2 px-4 border">{customerName}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Phone Number:</td>
              <td className="py-2 px-4 border">{phoneNum}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Device:</td>
              <td className="py-2 px-4 border">{device}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Brand:</td>
              <td className="py-2 px-4 border">{Brand}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Model:</td>
              <td className="py-2 px-4 border">{Model}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Reason:</td>
              <td className="py-2 px-4 border">{reason}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Given Date:</td>
              <td className="py-2 px-4 border">{givenDate}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Customer Address:</td>
              <td className="py-2 px-4 border">{customerAddress}</td>
            </tr>
            <tr className="border">
              <td className="py-2 px-4 border">Repaired Price:</td>
              <td className="py-2 px-4 border">{repairPrize}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}
