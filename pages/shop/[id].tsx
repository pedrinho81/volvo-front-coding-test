import React from "react";
import { CarCard } from "../../src/components/CarsList/CarCard";
import { useRouter } from "next/router";
import { useCar } from "../../src/hooks/useCar";
import { Block, Button, Flex, Spinner, Text } from "vcc-ui";
import { BackBtn } from "../../src/components/BackPageBtn";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  const id = router.query.id as unknown as string;
  const { data, isLoading } = useCar(id);
  return (
    <>
      <Head>
        <title>Challenge Front | Shop</title>
      </Head>
      {isLoading && <Spinner />}
      {data && (
        <>
          <Flex
            extend={{
              flexDirection: "row",
              maxWidth: "1000px",
              margin: "0 auto",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BackBtn navigate="/" />
            <Text extend={{flex: 1}} className="title-page">Shop</Text>
          </Flex>

          <Flex
            extend={{
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "1000px",
              flexWrap: "wrap",
              margin: "0 auto",
              gap: "2.5rem",
              justifyContent: "center",
            }}
          >
            <CarCard
              key={data.id}
              id={data.id}
              bodyType={data.bodyType}
              imageUrl={data.imageUrl}
              modelName={data.modelName}
              modelType={data.modelType}
              noCta
            />
            <Block>
              <Text extend={{ fontSize: "1.5rem !important" }}>$ 109.000</Text>
              <Button extend={{ maxWidth: "10px" }}>Buy</Button>
            </Block>
          </Flex>
        </>
      )}
      {!data && !isLoading && <h1>Oops... nothing here...</h1>}
    </>
  );
}
