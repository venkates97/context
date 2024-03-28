import React, { useContext, useState } from 'react'
import { ProductContext } from '../ProductContextApi/ProductContextApi';

function ItemsCreation({item}) {
    if(item.isAddCart === undefined){
        item.isAddCart = false;
    }

    const [isAddCart, setisAddCart] = useState(item.isAddCart)
    const {cartList, setcartList,productName, setproductName} = useContext(ProductContext)
    item.isAddCart=isAddCart;
    return (
        <>
        {
            setproductName(productName)
        }

            <div class="card" style={{width: "18rem"}}>
                <img src={item.imgUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description}</p>
                        <button type="button" class={isAddCart ? "btn btn-danger":"btn btn-success"}
                        onClick={()=>{
                            setisAddCart(!isAddCart);
                            if(isAddCart){
                                const removecart =cartList.filter((e)=>e.id!=item.id);
                                setcartList(removecart);
                            }else{
                              item.quantity=1;
                              item.isAddCart=isAddCart;
                                setcartList([...cartList,item]);

                            }
                            
                            
                        }}
                        >
                        {
                            item.isAddCart? "Remove from Cart": "Add To Cart"
                        }
                        </button>

                    </div>
            </div>
        </>
    )
}

export default ItemsCreation