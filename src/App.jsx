import React, { useContext } from 'react'
import ShopApp from './ShopApp'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Mycart } from './componets/Mycart'
import { ProductContext } from './ProductContextApi/ProductContextApi';


function App() {
  const navigate=useNavigate();
  const {cartList}=useContext(ProductContext);

  return (
    <>
    {/* Navigation Bar */}
    <ul className="nav nav-pills " style={{backgroundColor:"black"}}>
        <li className="nav-item" onClick={()=>navigate("/")}>
          <Link className="nav-link text-white text-bold" to="/">PhoneKadai.com</Link>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-success heigthAd"
        onClick={()=>navigate("/mycart")}
        >My Cart {cartList.length}</button>

        </li>
   
      </ul>
   

    <Routes>
        <Route path="/" element={<ShopApp/>}></Route>
        <Route path="/mycart" element={<Mycart />}></Route>
    </Routes>

    
    </>
  )
}

export default App