import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages';
import Footer from './components/Footer/Footer';
// import SupportEngine from './components/mainpages/LiveChat/SupportEngine/index';

function App() {
  return (
    
    <DataProvider>
      <Router>
        <div className="">
          <Header />
          <MainPages />
          <Footer />
        </div>
      </Router>
      {/* <SupportEngine/> */}
    </DataProvider>
    
  );
}

export default App;
