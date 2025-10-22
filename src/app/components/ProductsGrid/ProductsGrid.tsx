import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsGrid.module.css";

export default function ProductsGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
