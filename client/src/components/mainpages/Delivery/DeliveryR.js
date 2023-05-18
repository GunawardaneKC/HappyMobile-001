import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import  Button  from "react-bootstrap/Button";

export default class DeliveryR extends Component {
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
      doc.text(10, 70, "Delivery Details");
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
        "Delivery_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  viewPosts(){
    axios.get("/delivery").then(res =>{
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
         <div className='shadow-md rounded my-6 bg-slate-500'>
          <div className='col-lg-12'>
            <div className='table-responsive'> 
       <table className="min-w-full bg-slate-200" >
           <thead>
             <tr className="bg-zinc-950 text-zinc-100">
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>No</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Order ID</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Recipient's Name</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Recipient's Address</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Recipient's Phone Number</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Recipient's NIC</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Recipient's email</th>
              <th scope='col' className='py-3 px-6 font-medium text-zinc-100'>Delivery Status</th>
             </tr>
           </thead>
         
         <tbody style={{background:'pink'}}>
            {this.state.ReportData.map((posts,index)=>(
                 <tr key={index} className={index % 2 === 0 ? 'bg-purple-400' : ''}>
                    <th scope="row">{index+1}</th>
                    <td className=' text-slate-950 px-6'>{posts.OrderID}</td>
                    <td className=' text-slate-950 px-6'>{posts.Name}</td>
                    <td className=' text-slate-950 px-6'>{posts.Address}</td>
                    <td className=' text-slate-950 px-6'>{posts.phone}</td>
                    <td className=' text-slate-950 px-6'>{posts.NIC}</td>
                    <td className=' text-slate-950 px-6'>{posts.email}</td>
                    <td className=' text-slate-950 px-6'>{posts.Status}</td>
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