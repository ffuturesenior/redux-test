

const defaultState={
   products:[]
}

const add_product='add_product'

export const productReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case 'add_product':
            return {...state,products:[...state.products,action.payload]}  
        break;
    default:
        return state;
    }
}


export const addProductFunc=(payload)=>({type:add_product,payload:payload})
