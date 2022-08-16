import {createStore,combineReducers} from 'redux'
import { categoryReducer } from './reducers/categoriesReducer'
import { productReducer } from './reducers/producReducer'

const rootReducer=combineReducers({
    productReducer:productReducer,
    categoryReducer:categoryReducer
})

export const store=createStore(rootReducer)