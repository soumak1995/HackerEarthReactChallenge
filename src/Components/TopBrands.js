import React,{useContext,useState} from 'react'
import BrandContext from '../Context/brandsContext'
import BrandDetails from './BrandDetals'
const TopBrands=(props)=>{
     const {state}=useContext(BrandContext);
     const[search,setSearch]=useState();
     const Country=props.match.params.id;
     let topBrand=state.brands.filter((country)=>(
        country.Country===Country
     ))
    //  const onSearch=(e)=>{
    //      setSearch(e.target.value);
    //      if(search !== '' && state.brands.Brand.indexOf(search.toLowerCase())!==-1){
    //      topBrand=state.brands.filter((m)=>(
    //             m.Brand===search
    //          ))
    //      }
    //  }

    return(
       
        <div>

         <h1>Top Brands</h1>
          
         {topBrand.map((m)=><BrandDetails key={m.Brand} brandDetails={m}/>)}
        </div>
        
    )
}
export default TopBrands;
