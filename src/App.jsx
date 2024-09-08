import { useState } from 'react'
import './App.css'
import './alert.css'
import './header1.css'
import React from 'react';
import PopupAlert from './alert';
import HeaderOne from './header1';
import Pics from './pics';


function App() {
  return (
    <>
      <PopupAlert />
      <HeaderOne />
      <Pics />
    </>
  );
}

export default App;

