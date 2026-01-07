import { useReducer,useState } from "react";
import laptop from "./assets/laptop.png";
import phone from "./assets/phone.png";
import headphone from "./assets/headphone.png";
import watch from "./assets/watch.png";
import camera from "./assets/camera.png";
import "./App.css";

const initialcarts = { cart : [] };
const cartReducer = (state, action) =>{
  switch (action.type){
    case "ADD-ITEMS":
      const existingitems = state.cart.find( items => items.id === action.payload.id );
      if(existingitems){
        return{
          cart : state.cart.map(items => items.id === action.payload.id ? {...items, quantity : items.quantity + 1} : items)
        };
      }
      return {
        cart : [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case "REMOVE-ITEMS":
      return {
        cart : state.cart.filter(items => items.id !== action.payload)
      };
    case "INCREMENT-QNT":
      return {
        cart : state.cart.map(items => items.id === action.payload ? {...items, quantity : items.quantity + 1} : items)
      };
    case "DECREMENT-QNT":
      return {
        cart : state.cart.map(items => items.id === action.payload && items.quantity > 1 ? {...items, quantity : items.quantity - 1} : items)
      };
    default:
      return state;
  }
}
function App(){
  const [state , cartitem] = useReducer( cartReducer,initialcarts );
  const products = [
    { id : 1, name : "Laptop", price : "55000", img : laptop, alt : "Laptop"},
    { id : 2, name : "Mobile Phone", price : "25000", img : phone, alt : "Phone"},
    { id : 3, name : "Headphone", price : "5000", img : headphone, alt : "Headphone"},
    { id : 4, name : "Smart Watch", price : "7000", img : watch, alt : "Watch"},
    { id : 5, name : "Camera", price : "45000", img : camera, alt : "Camera"}
  ];
  return (
  <div className="page">
    <h2>SHOPPING CART</h2>
    <div className="card">
      {products.map((product) => ( 
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.alt} className="img-grp"/>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <button onClick={() => cartitem({ type: "ADD-ITEMS", payload: product })}>
            Add to Cart
          </button>
        </div>
      ))}
      <h3>Cart</h3>
      {state.cart.length === 0 && <p>Cart is empty</p>}
      {state.cart.map((item) => ( <div key={item.id} className="cart-item">
      <h4>{item.name}</h4>
      <img src={item.img} alt={item.name} className="cart-img"/>
      <div className="qty-row">
        <span>Qty: {item.quantity}</span>
      <button onClick={() =>cartitem({ type: "INCREMENT-QNT", payload: item.id })}>+</button>

      <button onClick={() =>cartitem({ type: "DECREMENT-QNT", payload: item.id })}>-</button>
    </div>
    <button className="remove-btn" onClick={() => cartitem({ type: "REMOVE-ITEMS", payload: item.id })}>
      Remove
    </button>
  </div>
  ))}
  </div>
  </div>
);

}
export default App;