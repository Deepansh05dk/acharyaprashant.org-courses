import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import Footbar from "@/components/Footbar";
import MainBody from "@/components/MainBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <main>
        <MainBody />
      </main>
      <Footbar />
    </>
  );
}
