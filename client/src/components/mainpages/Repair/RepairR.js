import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { PDFExport } from '@progress/kendo-react-pdf';

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
    <div className='' style={{fontSize:"10px"}}>
    <PDFExport ref={(component) => setPdfExportComponent(component)} paperSize="Tabloid">
      <div className='container pb-20 mx-auto'>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h3 className="mt-4 text-2xl text-red-700">Completed Repairs</h3>
          </div>
        </div>
        <div className="table-responsive mt-4">
        <table className='table table-hover text-slate-100 ' style={{borderCollapse: 'collapse', width: '100%'}}>
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
    <button className="py-2 px-4 ml-44 bg-purple-500 hover:bg-purple-600 text-white rounded-md" onClick={handleExport}>Export to PDF</button>
  </div>
  );
};

export default PdfExportButton;