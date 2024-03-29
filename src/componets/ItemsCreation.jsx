import React, { useContext, useState } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';

function ItemsCreation() {


    const [isAddCart, setisAddCart] = useState()
    const { cartList, setcartList, productName, setproductName } = useContext(ProductContext)
    var dummy;


 function RemoveFromCart(index) {
        console.log("remove from cart")
        dummy = cartList.filter((e) => e.id != index)
        setcartList(dummy);
        productName.map((e) => {
            if (e.id == index) {
                e.isAddCart = false;
            }
        })
    }

    function AddToCart(index) {
        console.log("Add to cart");
        productName.map((e) => {
            if (e.id == index) {
                e.quantity = 1;
                e.isAddCart = true;
                setcartList([...cartList, e])
            }
        })
        console.log(cartList);

    }

    return (
        <>
            {
                productName.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <button type="button" className={item.isAddCart ? "btn btn-danger" : "btn btn-success"}
                                        onClick={() => {
                                            console.log(item.isAddCart);
                                            item.isAddCart == true ? RemoveFromCart(item.id) : AddToCart(item.id)
                                        }
                                        }
                                    >
                                        {
                                            item.isAddCart ? "Remove from Cart" : "Add To Cart"
                                        }
                                    </button>

                                </div>
                            </div>
                        </div>
                    )

                })
            }
            {
                console.log("product name in Item Creatim:")
            }
            {
                console.log(productName)
            }


        </>
    )
}

export default ItemsCreation




