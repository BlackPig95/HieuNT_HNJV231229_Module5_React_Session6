import React, { useState } from 'react';
import './App.css';
import "./styles/header.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';

function App()
{
  const onPanelChange = (value, mode) =>
  {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <>
      {/* <Calendar onPanelChange={ onPanelChange } />; */ }
      <ProductList />
    </>
  );
}

export default App;
