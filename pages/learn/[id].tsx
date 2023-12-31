import React from "react";
import { CarCard } from "../../src/components/CarsList/CarCard";
import { useRouter } from "next/router";
import { useCar } from "../../src/hooks/useCar";
import { Flex, Spinner, Text } from "vcc-ui";
import { BackBtn } from "../../src/components/BackPageBtn";
import Head from "next/head";

export default function HomePage() {
  const router = useRouter();

  const id = router.query.id as unknown as string;
  const { data, isLoading } = useCar(id);

  return (
    <>
      <Head>
        <title>Challenge Front | Learn</title>
      </Head>
      {isLoading && <Spinner />}
      {!!data && (
        <>
          <Flex extend={{flexDirection: 'row', maxWidth: '1000px', margin: '0 auto', justifyContent: 'space-between', alignItems: 'center' }}>
            <BackBtn navigate="/" />
            <Text extend={{flex: 1}}  className="title-page">Learn</Text>
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
            <Text extend={{ maxWidth: "450px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              dolorem dignissimos quidem architecto accusantium qui repellendus
              fugiat incidunt harum beatae? Veniam dolorem adipisci tempora quae
              officia quia, nobis doloribus sed.
            </Text>
          </Flex>
        </>
      )}
    </>
  );
}
