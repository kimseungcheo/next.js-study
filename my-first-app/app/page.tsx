import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>
        home page
      </h1>
      <Link href="/pages/about">Go to About</Link>
    </div>
  );
}
