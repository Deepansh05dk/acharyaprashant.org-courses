import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import Footbar from "@/components/Footbar";
import MainBody from "@/components/MainBody";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>संतवाणी श्रृंखला | आचार्य प्रशांत</title>
        <link
          rel="icon"
          href="https://acharyaprashant.org/ic_favicon.png"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <SecondaryNavbar />
      <main>
        <MainBody data={data} />
      </main>
      <Footbar />
    </>
  );
}

export async function getServerSideProps() {
  const res1 = await fetch(
    "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
  );
  const data1 = await res1.json();
  const res2 = await fetch(
    "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
  );
  const data2 = await res2.json();
  const data = { ...data1, faqs: data2 };
  return { props: { data } };
}
