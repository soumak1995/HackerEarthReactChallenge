import React from 'react'
import '../css/cardDetails.css'
const BrandDetails=({brandDetails})=>{
    return(
        <div style={{height:'100px',width:'100px',marginleft:'30%',padding:'50px'}}>
        <div>
        <h4>Brand:</h4>
        <h1>{brandDetails.Brand}</h1>
        </div>
        
        <div className='inline'>
        <h4>Style:</h4>
        <h1>{brandDetails.Style}</h1>
        </div>
       
        <div className='inline'>
        <h4>Country:</h4>
        <h1>{brandDetails.Country}</h1>
        </div>
        <div></div>
        <h4>Stars:</h4>
        <h1>{brandDetails.Stars}</h1>
        <div></div>
        <div style={{marginTop:'10px'}}>
        <p>{brandDetails.Variety}</p>
        </div>
        
        </div>
    )
}
export default BrandDetails;