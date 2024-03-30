import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';

function Totalpricefinding() {
    const { cartList, subtotal, setsubtotal} = useContext(ProductContext)
    var dummy = 0;

    return (
        <>
   {
    console.log("in Total Price")
   }
   {
    console.log(cartList)
   }
            <div className="totalprice">
                <div className="SUBTOTAL">
                    <p>SUBTOTAL</p>
                    {
                        cartList.length>0 ? cartList.map((e) => {
                            dummy = dummy + (e.quantity * e.price)
                            setsubtotal(dummy);
                        })
                        :
                        setsubtotal(0)
                    }
                    <p>
                        {subtotal}
                    </p>
                </div>
                <div className="SUBTOTAL">
                    <p>SHIPPING</p>
                    <p>FREE</p>
                </div>
                <div className="dropdown-divider"></div>
                <div className="SUBTOTAL">
                    <p>TOTAL</p>
                    <p>{subtotal}</p>
                </div>
             
            </div>

        </>
    )
}

export default Totalpricefinding