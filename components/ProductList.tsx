"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
        <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

 return (
  <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;