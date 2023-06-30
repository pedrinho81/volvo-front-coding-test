import { Flex, Text } from "vcc-ui";
import React from "react";
import Image from "next/image";
import { Car } from "../../@types/car";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";
import { ChevronSmall } from "../../../docs/chevron-small";
import Link from "next/link";
import { useNavigateByTab } from "../../utils/navigateByTab";
import { Card } from "../../@types/card";
export function CarCard({ bodyType, id, imageUrl, modelName, modelType, noCta }: Card) {
  const {handleNavigateByTab} = useNavigateByTab()
  return (
    <div tabIndex={1} className="card">
      <div>
        <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
          {String(bodyType).toLocaleUpperCase()}
        </Text>
        <Flex extend={{ gap: 2, flexDirection: "row" }}>
          <Text subStyle="emphasis" extend={{ paddingRight: "10px" }}>
            {modelName}
          </Text>
          <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
            {modelType}
          </Text>
        </Flex>
      </div>
      <Image src={imageUrl} alt="" width={800} height={600} />
      { !noCta && (
        <div className="cta">
        <Link href={`/learn/${id}`}>
          <Text
            tabIndex={2}
            onKeyDown={(e) => handleNavigateByTab(e, `/learn/${id}`)}
          >
            Learn <ChevronSmall />
          </Text>
        </Link>
        <Link href={`/shop/${id}`}>
          <Text
            tabIndex={3}
            onKeyDown={(e) => handleNavigateByTab(e, `/shop/${id}`)}
          >
            Shop <ChevronSmall />
          </Text>
        </Link>
      </div>
      )}
      
    </div>
  );
}
