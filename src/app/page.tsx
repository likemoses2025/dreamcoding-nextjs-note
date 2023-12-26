import Counter from "@/components/Counter";
import { notFound } from "next/navigation";
import os from "os"; //노드 API
import { useState } from "react";

export default function Home() {
  console.log("너 서버냐 - 서버");
  console.log(os.hostname());
  // const [first, setfirst] = useState("second");
  return (
    <>
      <h1>홈 페이지</h1>
      <Counter />
    </>
  );
}
