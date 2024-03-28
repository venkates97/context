import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './ProductContextApi/ProductContextApi';
import ItemsCreation from './componets/ItemsCreation';

function ShopApp() {
  const navigate = useNavigate();
  const { productName } = useContext(ProductContext);

  return (
    <>
      <h1>Mobile Phones</h1>
    
      <div className="itemsList">
        {
          productName.map((e, index) => <ItemsCreation key={index} item={e} />)
        }
      </div>

    </>
  )
}

export default ShopApp