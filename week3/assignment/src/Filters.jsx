function Filters({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <div className="filters">
      <input
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
      </select>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort By Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}

export default Filters;
