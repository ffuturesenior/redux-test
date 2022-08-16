import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryFunc } from "../redux-index/reducers/categoriesReducer";
import { addProductFunc } from "../redux-index/reducers/producReducer";



const AddProduct=()=>{
    
    const categories=useSelector(state=>state.categoryReducer.categories)
    const [newObj,setNewObj]=useState({
        name:'',
        type:'',
        price:'',
        text:''
    })
    const [newCategory,setNewCategory]= useState({value:''})
    const dispatch=useDispatch()

    const submit1=(e)=>{
        e.preventDefault()
        if(isNaN(newObj.price)||newObj.price==''){
            alert('enter price')
        }else{
            dispatch(addProductFunc({...newObj,id:Date.now()}))
            alert('added')   
        } 
        
    }

    const submit2=(e)=>{
        e.preventDefault()
        dispatch(addCategoryFunc(newCategory))
        alert('added')
    }


    return(
        <div>
            <div>
                <p className="fs-2 text-center">add product</p>
                <form onSubmit={submit1} className="row g-3 needs-validation" novalidate>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" class="form-label">name of product</label>
                    <input value={newObj.name} onChange={(e)=>setNewObj({...newObj,name:e.target.value})} type="text" className="form-control" id="validationTooltip01"  required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-3 position-relative">
                    <label for="validationTooltip04" className="form-label">State</label>
                    <select value={newObj.type} onChange={(e)=>setNewObj({...newObj,type:e.target.value})} className="form-select" id="validationTooltip04" required>
                        <option selected>Choose type of product</option>
                        {categories.map((p)=>
                            <option value={p.value}>{p.value}</option>
                        )}
                    </select>
                    <div class="invalid-tooltip">
                    Please select a valid state.
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" className="form-label">price</label>
                    <input value={newObj.price} onChange={(e)=>setNewObj({...newObj,price:e.target.value})}type="tel" className="form-control" id="validationTooltip01"  required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" className="form-label">text</label>
                    <textarea  value={newObj.text} onChange={(e)=>setNewObj({...newObj,text:e.target.value})} className="form-control" id="validationTextarea"  required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">add neww product</button>  
                </form>   
            </div>

            <div>
                <p className="fs-2 text-center">add category</p>
                <form onSubmit={submit2} className="row g-3 needs-validation" novalidate>
                <div className="col-md-4 position-relative">
                    <label for="validationTooltip01" class="form-label">name of category</label>
                    <input value={newCategory.value} onChange={(e)=>setNewCategory({value:e.target.value})} type="text" className="form-control" id="validationTooltip01"  required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <button class="btn btn-primary" type="submit">add new category</button>  
                </form>   
            </div>
        </div>
    )
}

export default AddProduct