import Layout from "@/components/Layout";
import productList from "@/components/Products";
import styles from "@/styles/Racket.module.css"
import styles2 from "@/styles/ProductList.module.css"
export default function RacketsPage() {
  // Lọc danh sách vợt
  const rackets = productList.filter((product) => product.category === "racket");

  return (
    <Layout>
      <aside className={styles.menu}>
        <ul>
          <li>All Racquets</li>
          <li>Yonex</li>
          <li>Lining</li>
          <li>Victor</li>
          <li>VNB</li>
        </ul>
      </aside>

      <section className={styles.products}>
        <h1>Rackets</h1>
        <div className={styles2.productList}>
          {rackets.map((racket) => (
            <div key={racket.id} className={styles2.productCard}>
              <img src={racket.img} alt={racket.name} />
              <p>{racket.name}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
