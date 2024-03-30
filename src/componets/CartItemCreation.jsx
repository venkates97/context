import React, { useContext, useState } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';
import Totalpricefinding from './Totalpricefinding';

function CartItemCreation() {
    const { cartList, setcartList, productName } = useContext(ProductContext);
    const [quantity, setquantity] = useState();

    
    function RemoveFromCart(index) {
        console.log("Remove Items");
        console.log(productName);
        const updateCart =cartList.filter((e) => e.id != index)
        setcartList(updateCart)
        productName.map((e) => {
            if (e.id == index) {
                e.isAddCart = false;
            }
        })
        return null;
    }




    return (
        <>
        <div className="itemsList">
            {
                cartList.map((cartItem, index) => {
                    
                    function AddQuantity() {
                        cartItem.quantity = cartItem.quantity + 1
                        setquantity(cartItem.quantity);
                        return null;
                    }
                    function RemoveQuantity() {
                        if (cartItem.quantity > 1) {
                            cartItem.quantity = cartItem.quantity - 1
                            setquantity(cartItem.quantity);
                        }
                        return null;
                    }


                    /// Edited
                    // function RemoveFromCart() {

                    //     {
                    //                             cartItem.quantity = 0;
                    //                             // cartItem.isAddcart=false;
                    //                             const chgProductList = productName.map((p) => {
                    //                                 // if(p.id ==cartItem.id){
                    //                                 // }
                    //                                 if (p.id == cartItem.id) {
                    //                                     // console.log(productName[4].id)
                    //                                     // console.log();
                    //                                     p.isAddCart = false
                    //                                 }

                    //                             })
                    //                             const removecart = cartList.filter((e) => e.id != cartItem.id);

                    //                             setcartList(removecart);
                    //                             console.log(removecart);
                    //                             setproductName(productName);
                    //                         }
                    // }
                    return (<>
                        <div className="card mb-12" key={index} style={{ width: "100%", maxHeight: "10rem" }}>
                            <div className="row no-gutters">
                                <div className="col-md-2">
                                    <img style={{ height: "150px" }} src={cartItem.imgUrl} alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{cartItem.name}</h5>
                                        <p className="card-text">{cartItem.description}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-3 pricearea">
                                    <div className="col-md-6 adjustCenterBox">
                                        <div>
                                            <button type="button" className="btn btn-warning"
                                                onClick={() => {
                                                    AddQuantity()
                                                }}
                                            >+</button>
                                            <p className="removeStyleP" style={{ textAlign: "center" }}>{cartItem.quantity}</p>
                                            <button type="button" className="btn btn-warning "
                                                onClick={() => {
                                                    RemoveQuantity()
                                                }}

                                            >-</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 adjustCenterBox">
                                        <div className="tot">Rs.{cartItem.price * cartItem.quantity}</div>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => RemoveFromCart(cartItem.id)}
                                        > Remove</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </>)
                })

                
            }
            </div>
            <Totalpricefinding/>

        </>

    )
}

export default CartItemCreation;