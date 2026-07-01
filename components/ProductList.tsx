"use client";

import useFetch from "../hooks/useFetch";

interface Product {

  id: number;

  title: string;

  price: number;

  category: string;

}

function ProductList() {

  const {

    data: products,

    loading,

    error

  } = useFetch<Product>("https://fakestoreapi.com/products");

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

            <strong>{product.title}</strong>

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