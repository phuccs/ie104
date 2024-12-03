import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.info}>
          <h3 className={styles.heading}>About Us</h3>
          <p>Your go-to website for badminton gear and accessories.</p>
          <p>Email: support@yourwebsite.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Badminton St., Yonex City</p>
        </div>

        <div className={styles.quickLinks}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className={styles.social}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/fb-icon.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x-icon.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ins-icon.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
