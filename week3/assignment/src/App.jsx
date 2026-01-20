import React, { useState, useMemo } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Filters from "./Filters";
import { useProducts } from "./useProducts";
import "./App.css";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState("products"); 

  const { products, error } = useProducts();

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    let data = [...products];
    if (search)
      data = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    if (category) data = data.filter(p => p.category === category);
    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);
    return data;
  }, [products, search, category, sort]);

  if (error) return <h3>Error: {error}</h3>;

  return (
    <div className={dark ? "dark" : "light"}>
      <header>
        <h1>E-Commerce Dashboard</h1>
        <div>
          <button className="toggle-btn" onClick={() => setDark(!dark)}>
            {dark ? "Dark Mode" : "Light Mode"}
          </button>
          <button onClick={() => setPage(page === "products" ? "cart" : "products")}>
            {page === "products" ? "Go to Cart" : "Back to Products"}
          </button>
        </div>
      </header>

      {page === "products" && (
        <>
          <Filters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />
          <ProductList products={filteredProducts} cart={cart} setCart={setCart} />
        </>
      )}

      {page === "cart" && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}
export default App;
