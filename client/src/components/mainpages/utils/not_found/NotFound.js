import React, { useState, useEffect } from 'react';
import loadingIMG from '../../../../images/loading.webp';

function NotFound() {
  const [showLoading, setShowLoading] = useState(true);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
      setShowNotFound(true);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showLoading && (
        <>
          <img src={loadingIMG} alt='BlackCart' style={{ display: "block", margin: "0 auto", width: "200px", height: "200px" }} />
          <h2 style={{ fontSize: "3rem", marginTop: "30px", marginBottom: "10px" }}>Loading...</h2>
          <p style={{ fontSize: "1.5rem", color: "#999" }}>Wait until we process your request</p>
        </>
      )}

      {showNotFound && (
        <div>
          <h2 style={{ fontSize: "3rem", marginTop: "30px", marginBottom: "10px" }}>NOT FOUND</h2>
          <p style={{ fontSize: "1.5rem", color: "#999" }}>The requested page could not be found.</p>
        </div>
      )}
    </div>
  );
}

export default NotFound;
