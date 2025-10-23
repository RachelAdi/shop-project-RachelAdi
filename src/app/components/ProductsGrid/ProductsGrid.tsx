import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsGrid.module.css";
type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type ProductsGridProps = {
  products: Product[];
};
export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
