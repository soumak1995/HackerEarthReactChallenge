import React from 'react'
import {Link} from 'react-router-dom'
import '../css/CountryCard.css'
const CountryCard=({Country})=>{
    return(
        <Link to={`/${Country}`}>
        <div className='card' >
          <h1 style={{textDecoration:'none',color:'#fff'}}>{Country}</h1>
        </div>
        </Link>
    )
}
export default CountryCard;