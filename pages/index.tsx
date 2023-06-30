import Head from "next/head";
import { CarsList } from "../src/components/CarsList/CarsList";
import { Filter } from "../src/components/Filter";

export default function Home() {

  return (
    <>
     <Head>
        <title>Challenge Front | Home</title>
      </Head>
      <Filter/>
      <CarsList />
    </>
  );
}
