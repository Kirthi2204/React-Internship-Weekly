import ProductCard from "./ProductCard";

function ProductList({ products, cart, setCart }) {
  return (
    <div className="products">
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
