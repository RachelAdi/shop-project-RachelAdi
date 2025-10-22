"use client";
import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductsGrid/ProductsGrid";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
