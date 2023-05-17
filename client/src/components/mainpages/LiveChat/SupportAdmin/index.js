import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <div className='mt-16 mx-16' style={{ color: 'blue' }}>
      <ChatEngine 
        projectID={process.env.REACT_APP_CE_PROJECT_ID}
        userName="Osh"
        userSecret="Osh@123456"
        height='calc(100vh - 20px)'
      />
    </div>
  );
}

export default SupportAdmin;
