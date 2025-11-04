import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";



import ForexPedia from "./component/ForexPediaa/ForexPedia";
import ForexFooter from "./component/ForexPediaa/ForexFooter";
import ForexTerm from "./component/ForexPediaa/ForexTerm";
import ForexPrivacy from "./component/ForexPediaa/ForexPrivacy";
import ForexRefund from "./component/ForexPediaa/ForexRefund";
import ForexDisclosure from "./component/ForexPediaa/ForexDisclosure";
import ForexContact from "./component/ForexPediaa/ForexContact";
import ScrollToTop from "./component/ForexPediaa/ScrollToTop";





function App() {
  return (
    <div className='app-container'>


      <div className="container1">
        

         <ScrollToTop />

        <Routes>
          <Route path="/" element={<ForexPedia/>}    />
          <Route path="/terms" element={<ForexTerm/>}    />
          <Route path="/privacy" element={<ForexPrivacy/>}    />
          <Route path="/refund" element={<ForexRefund/>}    />
          <Route path="/disclosure" element={<ForexDisclosure/>}    />
          <Route path="/contact" element={<ForexContact/>}    />
          
        </Routes>
        <ForexFooter/>
         
        
      </div> 

    </div>

  )
}

export default App