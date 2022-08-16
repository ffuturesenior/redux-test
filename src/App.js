import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from "./Components/Header";
import AddProduct from "./pages/addProduct";
import ProductPage from "./pages/productPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <div className="App">
            <Header/>
            <Route path='/' component={ProductPage} exact/>
            <Route path='/add' component={AddProduct} exact/>
          </div>
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
