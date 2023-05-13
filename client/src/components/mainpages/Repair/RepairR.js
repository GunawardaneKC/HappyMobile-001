import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { PDFExport } from '@progress/kendo-react-pdf';
import logo from '../../../images/logo-hm.png';

const PdfExportButton = () => {
  const [pdfExportComponent, setPdfExportComponent] = useState(null);

  const handleExport = () => {
    pdfExportComponent.save();
  };

  // eslint-disable-next-line no-unused-vars
  const exportPDF = (pdf) => {
    const blob = new Blob([pdf], { type: 'application/pdf' });
    saveAs(blob, 'completed-repairs.pdf');
  };

  const [completedPosts, setCompletedPosts] = useState([]);
  const [searchQuery] = useState('');

  useEffect(() => {
    retrieveCompletedPosts();
  }, []);

  const retrieveCompletedPosts = () => {
    axios.get('/repairCompleted').then(res => {
      if (res.data.success) {
        setCompletedPosts(res.data.completedPosts);
      }
    });
  };

  const filteredPosts = completedPosts.filter(post => {
    const { customerName, device, Brand, phoneNum } = post;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      customerName.toLowerCase().includes(lowerCaseQuery) ||
      device.toLowerCase().includes(lowerCaseQuery) ||
      Brand.toLowerCase().includes(lowerCaseQuery) ||
      phoneNum.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div style={{fontSize:"10px"}}>
    <button className='btn btn-primary' style={{ marginTop: "20px" }} onClick={handleExport}>Export to PDF</button>
    <PDFExport ref={(component) => setPdfExportComponent(component)} paperSize="A4" margin={{ top: 30, left: 30, right: 30, bottom: 30 }}>
      <div className='container'>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h3 className="mt-4 text-2xl">Completed Repairs</h3>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <img src={logo} alt="logo" style={{ height: "70px" }} />
          </div>
        </div>
        <div className="table-responsive mt-4">
        <table className='table table-hover text-slate-100' style={{borderCollapse: 'collapse', width: '100%'}}>
  <thead>
    <tr style={{backgroundColor: '#480258'}}>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Repair ID</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Customer Name</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Phone Number</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Customer Device</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Given Date</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Repaired Price</th>
      <th scope='col' style={{padding: '10px', border: '1px solid #ddd'}}>Damaged Reason</th>
    </tr>
  </thead>
  <tbody style={{backgroundColor: '#9807B9'}}>
    {filteredPosts.map((post, index) => (
      <tr key={post._id} style={{border: '1px solid #ddd'}}>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>
            {post.repairID}
        </td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.customerName}</td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.phoneNum}</td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.device}</td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.givenDate}</td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.repairPrize}</td>
        <td style={{padding: '10px', border: '1px solid #ddd'}}>{post.reason}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      </div>
    </PDFExport>
  </div>
  );
};

export default PdfExportButton;