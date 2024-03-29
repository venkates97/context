import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContextApi/ProductContextApi';
import ItemsCreation from './componets/ItemsCreation';

function ShopApp() {
  const navigate = useNavigate();
  const { productName,setproductName } = useContext(ProductContext);

  return (
    <>
      <h1>Mobile Phones</h1>
    {
      productName.map((e)=>{
        if(e.isAddCart === undefined)
        {
          e.isAddCart = false;
        }
      })
    }
    {/* {
      setproductName(productName)
    } */}
    {console.log("abouve")}
    {console.log(productName)}
      <div className="itemsList">
        <ItemsCreation />
        
      </div>

    </>
  )
}

export default ShopApp