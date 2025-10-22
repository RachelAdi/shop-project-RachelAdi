"use client";
import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductsGrid/ProductsGrid";
import { getProducts } from "../services/client/products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
