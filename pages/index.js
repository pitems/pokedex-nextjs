import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/pokemon">Pokedex</Link>
    </>
  );
}
