import React, { useContext, useState } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';

function CartItemCreation({ cartItem }) {
    const { cartList, setcartList,productName,setproductName} = useContext(ProductContext);
    const [quantity, setquantity] = useState(cartItem.quantity);
    cartItem.quantity = quantity;
    return (
        <>
        {
            // console.log(productName[0].isAddCart)
        }
          
            <div class="card mb-12" style={{ width: "100%", maxHeight: "10rem" }}>
                <div class="row no-gutters">
                    <div class="col-md-2">
                        <img style={{ height: "150px" }} src={cartItem.imgUrl} alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{cartItem.name}</h5>
                            <p class="card-text">{cartItem.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-3 pricearea">
                        <div className="col-md-6 adjustCenterBox">
                            <div>
                                <button type="button" class="btn btn-warning"
                                    onClick={() => { 
                                        setquantity(quantity + 1);
                                        cartItem.quantity=quantity
                                        setcartList([...cartList]);
                                        // console.log(cartList);
                                    }}
                                >+</button>
                                <p className="removeStyleP" style={{ textAlign: "center" }}>{quantity}</p>
                                <button type="button" class="btn btn-warning "
                                    onClick={() => {
                                        if (quantity >= 1) {
                                            setquantity(quantity - 1);
                                            cartItem.quantity=quantity
                                            setcartList([...cartList]);
                                        }
                                    }}

                                >-</button>
                            </div>
                        </div>
                        <div className="col-md-6 adjustCenterBox">
                            <div className="tot">Rs.{cartItem.price * quantity}</div>
                            <button type="button" class="btn btn-danger"
                                onClick={() => {
                                    cartItem.quantity=0;
                                    // cartItem.isAddcart=false;
                                    const chgProductList =productName.map((p)=>{
                                        // if(p.id ==cartItem.id){
                                        // }
                                        if(p.id == cartItem.id){
                                            // console.log(productName[4].id)
                                            // console.log();
                                            p.isAddCart=false
                                        }

                                    })
                                    const removecart = cartList.filter((e) => e.id != cartItem.id);

                                    setcartList(removecart);
                                    setproductName(productName);
                                }
                                }
                            > Remove</button>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default CartItemCreation;