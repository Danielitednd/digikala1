import { useState } from 'react'
import './App.css'
import './alert.css'
import './header1.css'
// import './tableModal.css'
import React from 'react';
import PopupAlert from './alert';
import HeaderOne from './header1';
// import TableModal from './tableModal';


function App() {
  return (
    <>
      <PopupAlert />
      <HeaderOne />
      {/* <TableModal /> */}
    </>
  );
}

export default App;

