import { memo } from "react";

function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    const item = cart.find(i => i.id === product.id);
    if (item) {
      setCart(
        cart.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default memo(ProductCard);
