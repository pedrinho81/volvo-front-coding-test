import Head from "next/head";
import { CarsList } from "../src/components/CarsList/CarsList";

export default function Home() {

  return (
    <>
     <Head>
        <title>Challenge Front | Home</title>
      </Head>
      <CarsList />
    </>
  );
}
