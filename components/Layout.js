
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
