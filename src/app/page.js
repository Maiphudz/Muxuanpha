import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const products = [
    { id: 1, name: "Yonex 100zz", price: "3.800.000₫", oldPrice: "4.000.000₫", percent: "-20%", image: "/cars/100zz.webp" },
    { id: 2, name: "Yonex saber 10", price: "2.500.000₫", oldPrice: "3.000.000₫", percent: "-15%", image: "/cars/100zz.webp" },
    { id: 3, name: "Linghtning habertec 8000", price: "1.800.000₫", oldPrice: "2.200.000₫", percent: "-10%", image: "/cars/100zz.webp" },
    { id: 4, name: "kumpoo k520", price: "5.200.000₫", oldPrice: "6.500.000₫", percent: "-25%", image: "/cars/100zz.webp" },
    { id: 5, name: "Yosex lambogini 100 rr", price: "7.100.000₫", oldPrice: "8.900.000₫", percent: "-20%", image: "/cars/100zz.webp" },
    { id: 6, name: "lion.Messi", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 7, name: "Yonex 1000 tuaz", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 8, name: "Victor bb12r", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 9, name: "Kumpoo k520 pro", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 11, name: "NamViet 1000rb", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 12, name: "Yonex pixel", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
    { id: 13, name: "Yonex dragon 100z", price: "1.200.000₫", oldPrice: "1.500.000₫", percent: "-18%", image: "/cars/100zz.webp" },
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <ul className={styles.menu}>
          <li>Trang Chủ</li>
          <li>Cửa hàng</li>
          <li>Sản phẩm</li>
          <li>Sale</li>
        </ul>
        <div className={styles.logo}>
          Mxp<span>.Shop</span>
        </div>
      </div>

      {/* PRODUCT GRID SECTION */}
      <div className={styles.mainContent}>
        {products.map((item) => (
          <div className={styles.product} key={item.id}>
            <div className={styles.mainProduct}>
              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.productName}>
                <h5>{item.name}</h5>
              </div>
              <div className={styles.productPrice}>
                <strong className={styles.price}>{item.price}</strong>
                <div className={styles.priceSub}>
                  <label className={styles.oldPrice}>{item.oldPrice}</label>
                  <small className={styles.percent}>{item.percent}</small>
                </div>
              </div>
            </div>
            <div className={styles.buyButton}>Mua ngay</div>
          </div>
        ))}
      </div>

     
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Thông tin shop</h4>
            <p>Mxp.Shop - Chuyên cung cấp vợt cầu lông chính hãng, chất lượng cao nhất thị trường.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Chính sách</h4>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Đổi trả trong 7 ngày</li>
              <li>Giao hàng hỏa tốc</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Liên hệ</h4>
            <p>Email: mxp.badminton@gmail.com</p>
            <div className={styles.socialLinks}>
              <span>Facebook</span> | <span>Zalo</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2026 Mxp.Shop - Design by Badminton Lover
        </div>
      </footer>
    </div>
  );
}