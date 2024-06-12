import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MyTable from './reactivehe';
import Contactus from './contactus';
import AboutUs from './Aboutus';
import RRDDyes from './RGB&RR';
import ReactiveMe from './ReactiveMe';
import VinylSulphone from './VinylSulphone';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/reactivehe" element={<MyTable/>}/>
      <Route path="/aboutus" element={<AboutUs/>}></Route>
      <Route path ="/RGB&RR" element={<RRDDyes/>}></Route>
      <Route path='/ReactiveMe' element={<ReactiveMe/>}></Route>
      <Route path='/VinylSulphone' element={<VinylSulphone/>}></Route>

  </Routes>
    </BrowserRouter>

    );
}

export default App;
   

