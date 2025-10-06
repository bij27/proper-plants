import { useState } from "react";
import PLANTS from "./data";
import Cart from "./components/Cart/Cart";
import Plants from "./components/Plants/Plants";
import CartItemQuantity from "./components/CartItemQuantity/CartItemQuantity";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    // check if plant is in cart
    const itemExists = cart.find((cartItem) => cartItem.id === plant.id);
    // if it is in cart, increase its quantity by one
    if (itemExists) {
      const newCartArray = cart.map((cartItem) =>
        cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(newCartArray);
    } else {
      // if not in cart, add to cart
      const newCartArray = [...cart, { ...plant, quantity: 1 }];
      setCart(newCartArray);
    }
  };

  const removeFromCart = (plant) => {
    const newCartArray = cart
      .map((cartItem) =>
        cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    setCart(newCartArray);
  };
  return (
    <>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
