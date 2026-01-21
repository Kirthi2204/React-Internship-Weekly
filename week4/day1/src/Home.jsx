import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="page">
  <h2>E-Commerce Dashboard</h2>
  <div className="products-container">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
  );
}

export default Home;
