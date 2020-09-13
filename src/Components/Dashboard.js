import React,{useContext,useEffect,useReducer} from 'react'
import BrandsContext from '../Context/brandsContext'
import axios from 'axios';
import Reducer from '../Reducers/BrandsReducer';
import CountryCard from './CountryCard'
import '../css/DashBoard.css'
const DashBoard=()=>{
      const {state,dispatch}=useContext(BrandsContext);
      useEffect(()=>{
           axios.get("http://starlord.hackerearth.com/TopRamen")
           .then((res)=>{
             dispatch({type:'FATCH_BRANDS',payload:res.data})
           }).catch((e)=>{
              dispatch({type:'FETCH_ERROR'})
           })
      },[])
     // const Countries= Array.from(new Set(state.brands));
     const dataArr = state.brands.map(item=>([item.Country,item])
    ); 
    const maparr = new Map(dataArr); 
    
    var Countries = [...maparr.values()];
     
    return (
        <div >
       <h1>DashBoard!!</h1> 
       <div className='container'>
       {state.loading?'loading...':Countries.map((m)=><CountryCard key={m.Country} Country={m.Country}/>)}
       {state.error?state.error:null}
      </div>
        </div>
    )
}
export default DashBoard;