import React, { useContext } from 'react'
import CartItemCreation from './CartItemCreation'
import { ProductContext } from '../ProductContextApi/ProductContextApi'
import Totalpricefinding from './Totalpricefinding';

export function Mycart() {
  const { cartList,subtotal, setsubtotal,productName } = useContext(ProductContext);

  return (
    <>
      <h1>My Cart - Product List</h1>

      <div className="itemsList">
        {
          cartList.map((e, index) => <CartItemCreation key={index} cartItem={e} />)
        }
      </div>
      <Totalpricefinding />


    </>
  )
}
