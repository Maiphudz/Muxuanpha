"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function chitietsanpham() {
  const [openId, setOpenId] = useState(null);

  const products = [
    {
      id: 1,
      name: "Yonex 100ZZ",
      price: "3.800.000₫",
      oldPrice: "4.000.000₫",
      percent: "-20%",
      image: "/cars/100zz.webp",
      specs: [
        "Độ dẻo: Cứng",
        "Khung: HM Graphite + Namd",
        "Thân: HM Graphite",
        "Trọng lượng: 4U (80-84g)",
        "Chu vi cán: G5",
        "Điểm cân bằng: Nặng đầu",
        "Sức căng: 28-32 LBS",
        "Màu sắc: Đỏ / Đen"
      ]
    }
  ];

  const toggleDetail = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1>Chi tiết sản phẩm</h1>

      <div className={styles.mainContent}>
        {products.map((item) => (
          <div
            className={styles.product}
            key={item.id}
            onClick={() => toggleDetail(item.id)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={150}
              height={150}
            />

            <h4>{item.name}</h4>

            <p className={styles.price}>{item.price}</p>

            {/* 👇 CHỈ HIỆN KHI CLICK */}
            {openId === item.id && (
              <div className={styles.detail}>
                <ul>
                  {item.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}