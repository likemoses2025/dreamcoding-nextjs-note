import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      {products.map((product, index) => (
        <ul key={index}>
          <li>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        </ul>
      ))}
    </>
  );
}
