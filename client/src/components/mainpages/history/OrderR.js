import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import  Button  from "react-bootstrap/Button";

export default class orderR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.text(85, 10, "Happy Mobile");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Order Details");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "Orders_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  viewPosts(){
    axios.get("/Ord").then(res =>{
      if(res.data.success){
        this.setState({
          ReportData:res.data.existingPosts,
                    
        });
        //show array list 
        console.log(this.state.posts )
         
      }
    });
  }

  componentDidMount() {
    this.viewPosts()
  }

  render() {
    return (
      <>
      <div className='container mx-auto mt-8' id="pdfdiv">
         <div className='shadow-md rounded my-6'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
            <table className="w-full border border-red-950 text-xs">
  <thead>
    <tr className="bg-zinc-950 text-zinc-100">
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">No</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">Order ID</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">User ID</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">User Name</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">User Email</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">Payment Status</th>
      <th scope="col" className="py-2 px-4 font-medium border border-red-950">Details</th>
    </tr>
  </thead>
  <tbody style={{ background: 'pink' }}>
    {this.state.ReportData.map((posts, index) => (
      <tr key={index} className={index % 2 === 0 ? 'bg-transparent' : ''}>
        <th scope="row" className="border-red-950">{index + 1}</th>
        <td className="text-slate-950 px-2 border border-red-950">{posts.orderId}</td>
        <td className="text-slate-950 px-2 border border-red-950">{posts.user_id}</td>
        <td className="text-slate-950 px-2 border border-red-950">{posts.name}</td>
        <td className="text-slate-950 px-2 border border-red-950">{posts.email}</td>
        <td className="text-slate-950 px-2 border border-red-950">{posts.payment}</td>
        <td className="text-slate-950 px-2 border border-red-950">
          <table style={{ margin: "10px 0" }} className="border border-gray-300">
            <thead>
              <tr className="bg-purple-700 text-zinc-100">
                <th className="text-slate-50 px-4 border border-red-950">Product ID</th>
                <th className="text-slate-50 px-4 border border-red-950">Products</th>
                <th className="text-slate-50 px-4 border border-red-950">Quantity</th>
                <th className="text-slate-50 px-4 border border-red-950">Price</th>
              </tr>
            </thead>
            <tbody>
              {posts.cart.map((item) => (
                <tr key={item._id}>
                  <td className="border border-red-950">{item.product_id}</td>
                  <td className="border border-red-950">{item.title}</td>
                  <td className="border border-red-950">{item.quantity}</td>
                  <td className="border border-red-950">LKR {item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div></div></div></div>
        <center>
          <div>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            > <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
              Download PDF
            </Button>
            <br />
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}