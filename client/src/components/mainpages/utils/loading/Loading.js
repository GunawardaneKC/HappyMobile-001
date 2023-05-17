import React from 'react';
import './loading.css';
import loadingIMG from '../../../../images/loading.webp';

function Loading() {
    return (
        // <div className="mt-2 bg-purple-800 bg-opacity-30 rounded-lg backdrop-filter backdrop-blur-lg">
        //     <div className="loader">
        //         <div>
        //             <div>
        //                 <div>
        //                     <div>
        //                         <div>
        //                             <div>
        //                                 <div>
        //                                     <div></div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div style={{textAlign: "center", marginTop: "50px"}}>
                <img src={loadingIMG} alt='BlackCart' style={{display: "block", margin: "0 auto", width: "200px", height: "200px"}}/>
                <h2 style={{fontSize: "3rem", marginTop: "30px", marginBottom: "10px"}}>Loading...</h2>
                <p style={{fontSize: "1.5rem", color: "#999"}}>Wait until we process your request</p>
        </div>
    )
}

export default Loading
