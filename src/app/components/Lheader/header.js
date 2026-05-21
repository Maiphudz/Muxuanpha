import Image from "next/image";
import styles from "./footer";

export function Header() {
  return (
    <div className={styles.header} >
      <nav className={styles.nav}>
        <ul>
          <li>Trang chủ</li>
          <li>Sản phẩm</li>
          <li>Cửa hàng</li>
          <li>Sale</li>
        </ul>
      </nav>
      <div>
        <Image src="/next.svg" alt="Vercel Logo" width={100} height={24} />
      </div>
    </div>
  );
}