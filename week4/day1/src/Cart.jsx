import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./App.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const buyItems = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Thank you for your purchase!");
    clearCart();
  };

  return (
    <div className="page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-buttons">
            <button onClick={clearCart} className="clear-btn">Clear Cart</button>
            <button onClick={buyItems} className="buy-btn">Buy</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
