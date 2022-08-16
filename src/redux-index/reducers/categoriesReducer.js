

const defaultState={
    categories:[]
 }
 
 const add_category='add_category'
 
 export const categoryReducer=(state=defaultState,action)=>{
     switch (action.type) {
         case 'add_category':
             return {...state,categories:[...state.categories,action.payload]}  
         break;
     default:
         return state;
     }
 }
 
 
 export const addCategoryFunc=(payload)=>({type:add_category,payload:payload})
 