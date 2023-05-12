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
    <div class="table-responsive" style={{marginTop: '20px'}}>
      <h3>{repairID}</h3>
  <table class="table table-bordered table-hover" >
    <tbody>
      <tr>
        <td class="col-sm-3">Customer Name:</td>
        <td class="col-sm-9">{customerName}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Phone Number:</td>
        <td class="col-sm-9">{phoneNum}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Device:</td>
        <td class="col-sm-9">{device}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Brand:</td>
        <td class="col-sm-9">{Brand}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Model:</td>
        <td class="col-sm-9">{Model}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Reason:</td>
        <td class="col-sm-9">{reason}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Given Date:</td>
        <td class="col-sm-9">{givenDate}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Customer Address:</td>
        <td class="col-sm-9">{customerAddress}</td>
      </tr>
      <tr>
        <td class="col-sm-3">Repaired Price:</td>
        <td class="col-sm-9">{repairPrize}</td>
      </tr>
    </tbody>
  </table>
</div>


  );
}
