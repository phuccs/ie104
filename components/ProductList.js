import styles from "@/styles/ProductList.module.css";

export default function ProductList() {
  const products = [
    { id: 1, name: "ASTROX 88 S PRO", price: "$200", img: "/88spro.png" },
    { id: 2, name: "NANOFLARE 700 PRO", price: "$250", img: "/racket2.jpg" },
    { id: 3, name: "DUORA Z-STRIKE", price: "$250", img: "/racket2.jpg" },
    { id: 4, name: "ASTROX NEXTAGE", price: "$250", img: "/racket2.jpg" },
    { id: 5, name: "ASTROX 88 D PRO", price: "$250", img: "/racket2.jpg" },
  ];

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
