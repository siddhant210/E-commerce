"use client";

import { useEffect, useRef, useState } from "react";

function ProductFilter() {

  const [search, setSearch] = useState<string>("");

  const [category, setCategory] = useState<string>("All");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    inputRef.current?.focus();

  }, []);

  return (

    <div>

      <h2>Product Filter</h2>

      <br />

      <label>Search Product</label>

      <br />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <br />
      <br />

      <label>Category</label>

      <br />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Books</option>
      </select>

      <br />
      <br />

      <h3>Current Search</h3>

      <p>{search}</p>

      <h3>Selected Category</h3>

      <p>{category}</p>

    </div>

  );

}

export default ProductFilter; //export branch from, main
