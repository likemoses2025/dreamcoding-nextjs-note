import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      {products.map((product, index) => (
        <ul key={index}>
          <li>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        </ul>
      ))}
      <MeowArticle />
    </>
  );
}
