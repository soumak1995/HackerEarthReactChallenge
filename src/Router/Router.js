import React,{useReducer}from 'react'
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import  BrandsContext from '../Context/brandsContext'
import BrandsReducer from '../Reducers/BrandsReducer'
import DashBoard from '../Components/Dashboard'
import Reducer from '../Reducers/BrandsReducer'
import TopBrands from '../Components/TopBrands'
const Router=()=>{
    const initialState={
        loading:true,
        error:'',
        brands:[]
    }
      const [state,dispatch]=useReducer(Reducer,initialState)
   
    return(
        <div>
        <BrandsContext.Provider value={{state,dispatch}}>
        <BrowserRouter >
        <Switch>
        <Route path="/" component={DashBoard} exact={true}/>
        <Route path="/:id" component={TopBrands} exact={true}/>
        </Switch>
        </BrowserRouter>
        </BrandsContext.Provider>
        
        
        </div>
    )

}
export default Router;