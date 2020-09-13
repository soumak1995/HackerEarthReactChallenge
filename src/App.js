import React, {useState,useEffect,useReducer}from 'react';
import './App.css';
import axios from 'axios';
import Router from './Router/Router'
import Reducer from './Reducers/BrandsReducer'
const App=()=>{
  // const [brands,setBrands]=useState(null);
  // const [isLoding,setLoding]=useState(true);
  // const [error,setError]=useState(null);
  
  return (
    <div>
    
    
    <Router/>
  
    </div>
  )
}


export default App;
