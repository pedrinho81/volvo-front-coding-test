import { Card, Block, Flex, CardContent, Text, Spacer } from "vcc-ui";
import Image from "next/image";
import { Car } from "../../types/car";
import { ChevronCircled } from "../../../docs/ChevronCircledIcon";
import { ChevronSmall } from "../../../docs/chevron-small";
import Link from "next/link";
export function CarCard({ bodyType, id, imageUrl, modelName, modelType }: Car) {
  return (
    <div className="card">
      <Text subStyle="emphasis" extend={{ color: "#808c98" }}>{String(bodyType).toLocaleUpperCase()}</Text>
      <Flex extend={{ gap: 4, flexDirection: "row" }}>
        <Text subStyle="emphasis" extend={{ paddingRight: "10px" }}>{modelName}</Text>
        <Text subStyle="emphasis" extend={{ color: "#808c98" }}>{modelType}</Text>
      </Flex>
      <Image src={imageUrl} alt="" width={800} height={600} />
      <div className="cta">
        <Link href={`/learn/${id}`}>
          <Text  extend={{ color: "#337ac0" }}>
            Learn <ChevronSmall />
          </Text>
        </Link>
        <Link href={`/shop/${id}`}>
          <Text  extend={{ color: "#337ac0" }}>
            Shop <ChevronSmall />
          </Text>
        </Link>
      </div>
    </div>
  );
}
