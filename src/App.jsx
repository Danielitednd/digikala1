import { useState } from 'react'
import './App.css'
import './alert.css'
import './header1.css'
import React from 'react';
import PopupAlert from './alert';
import HeaderOne from './header1';

function App() {
  return (
    <>
      <PopupAlert />
      <HeaderOne />
    </>
  );
}

export default App;

