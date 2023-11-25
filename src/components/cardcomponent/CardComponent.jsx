import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import "./cardComponent.css"

function CardComponent(props){
    const {AddToCart, cartItems} = useContext(ShopContext);
    const {id,image,name,cost} = props.data;

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
           <img src={image} className="productImage"/>
           <div className="description">
            <p>
                <b>{name}</b>
            </p>
            <p className='costCard'>
                ${cost}
            </p>
           </div>
           <button className="buttonCart" onClick={()=>{AddToCart(id)}}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
}

export default CardComponent;
