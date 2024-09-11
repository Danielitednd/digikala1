import { useState } from 'react'
import './App.css'
import './alert.css'
import './header1.css'
import React from 'react';
import PopupAlert from './alert';
import HeaderOne from './header1';
import Pics from './pics';
import PictureGrid from './butPics';
import PictureGrid2 from './butpics2';
import SpecialOffers from './specialoffers';
import FixedButtons from './fixedbut';
import Buttons from './buttons';

function App() {
  return (
    <>
      <PopupAlert />
      <HeaderOne />
      <Pics />
      <PictureGrid/>
      <SpecialOffers/>
      <FixedButtons/>
      <Buttons />
      <p className='daste'>خرید براساس دسته بندی</p>
      <PictureGrid2/>
    </>
  );
}

export default App;

