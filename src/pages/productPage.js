import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductPage=()=>{
    const products=useSelector(state=>state.productReducer.products)

    return(
        <div>
          {products.length==0?
            <div className="d-flex flex-column ">
              <p className="fs-2 text-center">no product yet</p>
              <p className="text-center"><Link to='/add'>add new</Link></p>
            </div>
          :<></>}
          <div style={{display:'grid',gridTemplateColumns:"repeat(auto-fill,18rem)",gridTemplateRows:"repeat(auto-fill,150px)"}}>
            {products.map((p)=>
               <div key={p.id} className="card" style={{width:"18rem"}}>
               <div className="card-body">
                 <h5 className="card-title">{p.category}</h5>
                 <h6 className="card-subtitle mb-2 text-muted">{p.name}</h6>
                 <p className="card-text">{p.text}</p>
                 <button className="btn btn-primary">{p.price}$</button>
               </div>
             </div>
            )}
          </div>
            
        </div>
    )
}

export default ProductPage