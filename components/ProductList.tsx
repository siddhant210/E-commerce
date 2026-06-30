"use client";

import { useEffect, useState } from "react";

interface Product {

  id: number;

  title: string;

  price: number;

  category: string;

}

function ProductList() {

  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string>("");

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response = await fetch("https://fakestoreapi.com/products");

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

    return <h2>Loading...</h2>;

  }

  if (error) {

    return <h2>{error}</h2>;

  }

  return (

    <div className="products">

      <h2>Products</h2>

      <ul>

        {products.map((product) => (

          <li key={product.id}>

            {product.title}

            <br />

            ₹ {product.price}

            <br />

            {product.category}

          </li>

        ))}

      </ul>

    </div>

  );

}

export default ProductList;