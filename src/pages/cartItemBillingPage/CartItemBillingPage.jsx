import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';

export const CartItem = (props) =>{

  const {id,image,name,cost} = props.data;
  const {cartItems, AddToCart, RemoveFromCart} = useContext(ShopContext);

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
          <div className='countHandler' style={{marginLeft:'30px'}}>
            <button onClick={()=>{RemoveFromCart(id)}}> - </button>
            <input value={cartItems[id]} style={{color:'whitesmoke', width:'50px', textAlign:'center'}}/>
            <button onClick={()=>{AddToCart(id)}}> + </button>
          </div>
    </div>
  );
}
