import React from "react";
import { CarCard } from "../../src/components/CarsList/CarCard";
import { useRouter } from "next/router";
import { useCar } from "../../src/hooks/useCar";
import { Flex, Spinner, Text } from "vcc-ui";
import { BackBtn } from "../../src/components/BackPageBtn";

export default function HomePage() {
  const router = useRouter();

  const id = router.query.id as unknown as string;
  console.log(id);
  const { data, isLoading } = useCar(id);
  console.log(data);
  return (
    <>
      {isLoading && <Spinner />}
      {!!data && (
        <>
          <Text className="title-page"><BackBtn navigate="/"/>Learn</Text>
          
          <Flex
            extend={{
              flexDirection: "row",
              alignItems: "center",
              maxWidth: "1000px",
              flexWrap: 'wrap',
              margin: '0 auto',
              gap: '1.5rem',
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
            <Text extend={{maxWidth: '450px'}}>
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
