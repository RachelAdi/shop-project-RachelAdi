import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsGrid.module.css";

const products = [
  {
    id: 1,
    name: "מעיל אופנוען קצר ",
    price: 150,
    description: "עם בטנת פרווה דמוית דמוית של DEEKA",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOsdcur4GzumQ38PwZAS2VzepExat7-3GsYqBjw29tpjbPFMGUEc3eiWZRTrszNpbh_3uG-Dd4-gpdx63dt1jdJ7BLD5xRYLtuqnqpR-Xl9W1gsMk3YGNq4g&usqp=CAc",
  },
  {
    id: 2,
    name: "HIMALAYAN LIGHT DOWN JACKET",
    price: 200,
    description: "מעיל ממותג לגברים דה נורט פייס",
    image:
      "https://www.nicklas.co.il/wp-content/uploads/2022/08/Untitled1842.webp",
  },
  {
    id: 3,
    name: "MONCLER",
    price: 350,
    description: "מעיל פוך ",
    image:
      "https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe92e92ab/images/new/602903239/602903239_L_2.jpg?sw=113&sh=170",
  },
];

export default function ProductsGrid() {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
