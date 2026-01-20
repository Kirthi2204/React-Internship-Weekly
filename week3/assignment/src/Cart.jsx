function Cart({ cart, setCart }) {
  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map(i => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = id => setCart(cart.filter(i => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleBuy = () => {
    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p style={{ textAlign: "center" }}>Cart is empty</p>}
      {cart.map(i => (
        <div key={i.id} className="cart-item">
          <img src={i.image} alt={i.title} />
          <span>{i.title}</span>
          <input type="number" value={i.qty} min="1" onChange={e => updateQty(i.id, Number(e.target.value))} />
          <button onClick={() => removeItem(i.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total.toFixed(2)}</h3>

      {cart.length > 0 && (
        <div className="cart-actions">
          <button className="buy-btn" onClick={handleBuy}>Buy</button>
          <button className="clear-btn" onClick={() => setCart([])}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
