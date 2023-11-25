// import React, { createContext, useState } from 'react';
// import {camerarows} from "../cameraCatlogDummyData"


// //function to access all the items in the cart and set the initial value to 0
// export const ShopContext = createContext(null);

// const getDeafultCart = ()=>{
// let cart = {}
// for (let i =1; i < camerarows.length +1; i++){
//   cart[i] =0
// }
// return cart;
// }


// export const ShopContextProvider= (props)=> {
//   const [cartItems, setCartItems] = useState(getDeafultCart());

//   //Add items to cart, grab the previous value and add +1 to it
//   const AddToCart = (itemId) =>{
//     setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}));
//   }
//   //Similarly remove one item from it
//   const RemoveFromCart = (itemId) =>{
//     setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}));
//   }
//   //access these context values outside this file, pass it in a provider
//   const contextValue = {cartItems, AddToCart, RemoveFromCart}
//   //console logging changing values
//   console.log("cart items change value",cartItems);
//   return (
//   <ShopContext.Provider value={contextValue}>
//     {props.children}
//     </ShopContext.Provider>
//   );
// }




// // shopContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import { camerarows } from "../cameraCatlogDummyData.js";

// export const ShopContext = createContext(null);

// const getDeafultCart = () => {
//   let cart = {};
//   for (let i = 0; i < camerarows.length; i++) {
//     const productId = camerarows[i].id;
//     cart[productId] = 0;
//   }
//   return cart;
// };

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems) : getDeafultCart();

//   });
//   const getTotalAmount = ()=>{
//     let totalAmount = 0;
//     for (cont item in cartItems){
//       if(cartItems[item]>0){
//         let itemInfo = camerarows.find((product)=> product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.cost;
//       }
//     }
//     retun totalAmount;
//   }

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const AddToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const RemoveFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const contextValue = { cartItems, AddToCart, RemoveFromCart };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// shopContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { camerarows } from "../cameraCatlogDummyData.js";

export const ShopContext = createContext(null);

const getDeafultCart = () => {
  let cart = {};
  for (let i = 0; i < camerarows.length; i++) {
    const productId = camerarows[i].id;
    cart[productId] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : getDeafultCart();
  });

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = camerarows.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.cost;
      }
    }
    return totalAmount;
  };

  const AddToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const contextValue = { cartItems, AddToCart, RemoveFromCart, getTotalAmount };
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

