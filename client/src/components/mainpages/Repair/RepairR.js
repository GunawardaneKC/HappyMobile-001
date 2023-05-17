// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import { PDFExport } from '@progress/kendo-react-pdf';

// const PdfExportButton = () => {
//   const [pdfExportComponent, setPdfExportComponent] = useState(null);


// export default class RepairR extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ReportData: [],
//     };
//   }
//   printDocument() {
//     const input = document.getElementById("pdfdiv");
//     html2canvas(input).then((canvas) => {
//       var img = new Image();
//       const doc = new jsPDF("p", "mm", "a4");
//       doc.setTextColor(255, 0, 0);
//       doc.setFontSize(28);
//       doc.text(85, 10, "Happy Mobile");
//       doc.setTextColor(0, 0, 255);
//       doc.setFontSize(16);
//       doc.text(10, 70, "Repair Details");
//       doc.setTextColor(0, 255, 0);
//       doc.setFontSize(12);
      
//       //Date
//       var m_names = new Array(
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//       );

//   const handleExport = () => {
//     pdfExportComponent.save();
//   };

//   // eslint-disable-next-line no-unused-vars
//   const exportPDF = (pdf) => {
//     const blob = new Blob([pdf], { type: 'application/pdf' });
//     saveAs(blob, 'completed-repairs.pdf');
//   };

//   const [completedPosts, setCompletedPosts] = useState([]);
//   const [searchQuery] = useState('');

//   useEffect(() => {
//     retrieveCompletedPosts();
//   }, []);

//       today =
//         m_names[curr_month] +
//         " " +
//         curr_date +
//         "/ " +
//         curr_year +
//         " | " +
//         hours +
//         "h : " +
//         minutes +
//         "min : " +
//         seconds +
//         "sec";
//       var newdat = today;
//       doc.setTextColor(0, 0, 0);
//       doc.setFontSize(11);
//       doc.text(130, 93, newdat);
//       var imgHeight = (canvas.height * 200) / canvas.width;
//       const imgData = canvas.toDataURL("image/png");
//       doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
//       const date = Date().split(" ");
//       // we use a date string to generate our filename.
//       const dateStr =
//         "Repair_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
//       doc.save(`report_${dateStr}.pdf`);
//     });
//   }

//   viewPosts(){
//     axios.get("/getRepairs").then(res =>{
//       if(res.data.success){
//         this.setState({
//           ReportData:res.data.existingPosts,
                    
//         });
//         //show array list 
//         console.log(this.state.posts )
         

//   const retrieveCompletedPosts = () => {
//     axios.get('/repairCompleted').then(res => {
//       if (res.data.success) {
//         setCompletedPosts(res.data.completedPosts);
//       }
//     });
//   };

//   const filteredPosts = completedPosts.filter(post => {
//     const { customerName, device, Brand, phoneNum } = post;
//     const lowerCaseQuery = searchQuery.toLowerCase();
//     return (
//       customerName.toLowerCase().includes(lowerCaseQuery) ||
//       device.toLowerCase().includes(lowerCaseQuery) ||
//       Brand.toLowerCase().includes(lowerCaseQuery) ||
//       phoneNum.toLowerCase().includes(lowerCaseQuery)
//     );
//   });
  

//   return (
//     <div className='' style={{fontSize:"10px"}}>
//     <PDFExport ref={(component) => setPdfExportComponent(component)} paperSize="Tabloid">
//       <div className='container pb-20 mx-auto'>
//         <div className="row">
//           <div className="col-lg-9 mt-2 mb-2">
//             <h3 className="mt-4 text-2xl text-red-700">Completed Repairs</h3>
//           </div>
//         </div>
//         <div className="table-responsive mt-4">
//         <table className='table table-hover text-slate-100 ' style={{borderCollapse: 'collapse', width: '100%'}}>
//   <thead>
//     <tr style={{backgroundColor: '#480258'}}>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Repair ID</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Customer Name</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Phone Number</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Customer Device</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Given Date</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Repaired Price</th>
//       <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Damaged Reason</th>
//     </tr>
//   </thead>
//   <tbody style={{backgroundColor: '#9807B9'}}>
//     {filteredPosts.map((post, index) => (
//       <tr key={post._id} style={{border: '1px solid #ddd'}}>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>
//             {post.repairID}
//         </td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.customerName}</td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.phoneNum}</td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.device}</td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.givenDate}</td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.repairPrize}</td>
//         <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.reason}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//         </div>
        
//       </div>
//     </PDFExport>
//     <button className="py-2 px-4 ml-44 bg-purple-500 hover:bg-purple-600 text-white rounded-md" onClick={handleExport}>Export to PDF</button>
//   </div>
//   );
//   };

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { PDFExport } from '@progress/kendo-react-pdf';

const PdfExportButton = () => {
  const [pdfExportComponent, setPdfExportComponent] = useState(null);

  const handleExport = () => {
    pdfExportComponent.save();
  };

  const exportPDF = (pdf) => {
    const blob = new Blob([pdf], { type: 'application/pdf' });
    saveAs(blob, 'completed-repairs.pdf');
  };

  return (
    <div className='' style={{ fontSize: '10px' }}>
      <PDFExport ref={(component) => setPdfExportComponent(component)} paperSize="Tabloid">
        {/* PDF content */}
      </PDFExport>
      <button className="py-2 px-4 ml-44 bg-purple-500 hover:bg-purple-600 text-white rounded-md" onClick={handleExport}>Export to PDF</button>
    </div>
  );
};

const RepairR = () => {
  const [ReportData, setReportData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    retrieveCompletedPosts();
  }, []);

  const retrieveCompletedPosts = () => {
    axios.get('/repairCompleted').then(res => {
      if (res.data.success) {
        setReportData(res.data.completedPosts);
      }
    });
  };

  const filteredPosts = ReportData.filter(post => {
    const { customerName, device, Brand, phoneNum } = post;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      customerName.toLowerCase().includes(lowerCaseQuery) ||
      device.toLowerCase().includes(lowerCaseQuery) ||
      Brand.toLowerCase().includes(lowerCaseQuery) ||
      phoneNum.toLowerCase().includes(lowerCaseQuery)
    );
  });

  const printDocument = async () => {
    const input = document.getElementById("pdfdiv");
    const canvas = await html2canvas(input);

    const doc = new jsPDF("p", "mm", "a4");
    doc.setTextColor(255, 0, 0);
    doc.setFontSize(28);
    doc.text(85, 10, "Happy Mobile");
    doc.setTextColor(0, 0, 255);
    doc.setFontSize(16);
    doc.text(10, 70, "Repair Details");
    doc.setTextColor(0, 255, 0);
    doc.setFontSize(12);

    const today = new Date();
    const curr_month = today.getMonth();
    const curr_date = today.getDate();
    const curr_year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const m_names = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const newdat =
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

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.text(130, 93, newdat);

    const imgHeight = (canvas.height * 200) / canvas.width;
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);

    const date = new Date().toString().split(" ");
    const dateStr =
      "Repair_Management" + date[0] + date[1] + date[2] + date[3] + date[4];
    doc.save(`report_${dateStr}.pdf`);
  };

  return (
    <div>
      <div className='container pb-20 mx-auto'>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h3 className="mt-4 text-2xl text-red-700">Completed Repairs</h3>
          </div>
        </div>
        <div className="table-responsive mt-4">
          <table className='table table-hover text-slate-100 ' style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#480258' }}>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Repair ID</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Customer Name</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Phone Number</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Customer Device</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Given Date</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Repaired Price</th>
                <th scope='col' style={{ padding: '10px', border: '1px solid #ddd' }}>Damaged Reason</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#9807B9' }}>
              {filteredPosts.map((post, index) => (
                <tr key={post._id} style={{ border: '1px solid #ddd' }}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                    {post.repairID}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.customerName}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.phoneNum}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.device}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.givenDate}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.repairPrize}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{post.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div id="pdfdiv" style={{ display: "none" }}>
        {/* Hide this div when printing */}
        <div>
          <h1>PDF Content</h1>
          {/* Add your content to be printed */}
        </div>
      </div>
      <button className="py-2 px-4 ml-44 bg-purple-500 hover:bg-purple-600 text-white rounded-md" onClick={printDocument}>Print</button>
      <PdfExportButton />
    </div>
  );
};

export default RepairR;
