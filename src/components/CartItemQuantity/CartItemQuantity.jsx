import React from "react";

function CartItemQuantity({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item?.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}

export default CartItemQuantity;
