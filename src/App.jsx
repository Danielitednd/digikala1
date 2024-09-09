import { useState } from 'react'
import './App.css'
import './alert.css'
import './header1.css'
import React from 'react';
import PopupAlert from './alert';
import HeaderOne from './header1';
import Pics from './pics';
import PictureGrid from './butPics';
import SpecialOffers from './specialoffers';


function App() {
  return (
    <>
      <PopupAlert />
      <HeaderOne />
      <Pics />
      <PictureGrid/>
      <SpecialOffers/>
    </>
  );
}

export default App;

