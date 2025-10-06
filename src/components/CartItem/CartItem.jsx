import React from "react";
import CartItemQuantity from "../CartItemQuantity/CartItemQuantity";

function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item?.image} {item?.name}
      </div>
      {<CartItemQuantity item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>}
    </li>
  );
}

export default CartItem;
