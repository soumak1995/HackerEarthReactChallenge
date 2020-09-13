const Reducer=(state,action)=>{
    switch(action.type){
      case 'FATCH_BRANDS':
      return {
        loading:false,
        brands:action.payload,
        error:''
      }
      case 'FETCH_ERROR':
      return {
        loading:false,
        brand:{},
        error:'something went wrong'
      }
      default:
      return state;
    }
  }
  export default Reducer