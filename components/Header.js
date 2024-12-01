import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from 'next/image'

const ProfileImage = ({ src, width, height, alt }) => {
  return (
    <Image
      src={src}
      width={width} 
      height={height}
      alt={alt}
    />
  );
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <ProfileImage 
            src="/Logo.png"
            width={50}
            height={50}
            alt="Logo"
          ></ProfileImage>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.dropdown}><Link href="/badminton">Badminton</Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/badminton/racket">Racket</Link></li>
              <li><Link href="/badminton/shoes">Shoes</Link></li>
              <li><Link href="/badminton/string">String</Link></li>
              <li><Link href="/badminton/accessories">Accessories</Link></li>
            </ul>
          </li>
          
          <li className={styles.dropdown}><Link href="/tennis">Tennis</Link>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/badminton/racket">Racket</Link></li>
              <li><Link href="/badminton/shoes">Footwear</Link></li>
              <li><Link href="/badminton/string">String</Link></li>
              <li><Link href="/badminton/Balls">Balls</Link></li>
              <li><Link href="/badminton/accessories">Accessories</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}><Link href="/running">Running</Link>
          <ul className={styles.dropdownMenu}>
              <li><Link href="/badminton/Man">Man</Link></li>
              <li><Link href="/badminton/Women">Women</Link></li>
              <li><Link href="/badminton/Unisex">Unisex</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}><Link href="/football">Football </Link>
          <ul className={styles.dropdownMenu}>
              <li><Link href="/badminton/Shoes">Shoes</Link></li>
              <li><Link href="/badminton/Shockets">Shockets</Link></li>
              <li><Link href="/badminton/Balls">Balls</Link></li>
              <li><Link href="/badminton/Clothes">Clothes</Link></li>
            </ul>
          </li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link> </li>          
        </ul>
      </nav>
    </header>
  );
}
