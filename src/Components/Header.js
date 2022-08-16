import React from "react";
import { useHistory } from "react-router-dom";



const Header=()=>{
    const router=useHistory()

    return(
        <div style={{textAlign:"right"}}>
            <div className="btn-group btn-group-lg " role="group" aria-label="Large button group">
                <button onClick={()=>router.push('/')} type="button" className="btn btn-outline-dark">products</button>
                <button onClick={()=>router.push('/add')} type="button" className="btn btn-outline-dark">add new</button>
            </div>
        </div>
    )
}

export default Header