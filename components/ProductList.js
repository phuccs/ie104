import styles from "@/styles/ProductList.module.css";
import products from "@/components/Products"
export default function ProductList() {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
