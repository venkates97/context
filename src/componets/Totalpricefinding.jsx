import React, { useContext } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';

function Totalpricefinding() {
    const { setcartList,cartList, subtotal, setsubtotal,productName,setproductName} = useContext(ProductContext)
    var dummy = 0;

    return (
        <>
   
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
                <div class="dropdown-divider"></div>
                <div className="SUBTOTAL">
                    <p>TOTAL</p>
                    <p>{subtotal}</p>
                </div>
             
            </div>

        </>
    )
}

export default Totalpricefinding