import { getProduct, getProducts } from "@/service/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  if (slug === "nothing") {
    notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product.name} 제품 설명 페이지</h1>;
}

// 동적라우팅에 정적 라우팅 추가하기 ( 가장 많이 사용하는 라우팅을 정정으로 변환)
// 모든 제품의 페이지를 미리 만들어 둠 (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

// npm Build
// Route (app)                              Size     First Load JS
// ┌ ○ /                                    153 B            82 kB
// ├ ○ /_not-found                          875 B          82.7 kB
// ├ ○ /about                               152 B            82 kB
// ├ ○ /contact                             151 B            82 kB
// ├ ○ /products                            151 B            82 kB
// └ ● /products/[slug]                     151 B            82 kB
//     ├ /products/pants
//     └ /products/skirt
// + First Load JS shared by all            81.8 kB
//   ├ chunks/938-5e061ba0d46125b1.js       26.7 kB
//   ├ chunks/fd9d1056-735d320b4b8745cb.js  53.3 kB
//   ├ chunks/main-app-194c02b36e691665.js  220 B
//   └ chunks/webpack-1eb62cb6608eefa9.js   1.64 kB

// ○  (Static)  prerendered as static content
// ●  (SSG)     prerendered as static HTML (uses getStaticProps)
