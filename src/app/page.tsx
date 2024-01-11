import Counter from "@/components/Counter";
import Image from "next/image";
import { notFound } from "next/navigation";
import os from "os"; //노드 API
import { useState } from "react";

export default function Home() {
  console.log("너 서버냐 - 서버");
  console.log(os.hostname());
  // const [first, setfirst] = useState("second");
  return (
    <>
      <h1>홈 페이지2</h1>
      <Counter />
      <Image
        src='https://pixabay.com/ko/photos/%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%A3%BC%EB%B0%A9-%EB%8F%99%EB%AC%BC-%ED%8A%B8%EB%A6%AC-8361048/https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%81%B0-%ED%95%98%EB%82%98%EB%8A%94-%EC%9A%94%EC%95%BD-%EC%82%AC%EC%A7%84%EC%9C%BC%EB%A1%9C-%EC%97%A0%ED%8C%8C%EC%9D%B4%EC%96%B4-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8-%EB%B9%8C%EB%94%A9%EC%9D%98-%EC%82%AC%EC%A7%84%EC%9D%84-%EC%B0%8D%EA%B3%A0-%EC%9E%88%EB%8A%94-%ED%95%9C-%EB%82%A8%EC%9E%90%EC%9D%98-%EB%AA%A8%EC%8A%B5%EC%9E%85%EB%8B%88%EB%8B%A4-t5fqtwIn9HQ'
        alt='shop'
        width={400}
        height={400}
      />
    </>
  );
}
