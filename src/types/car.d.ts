import { EnumType } from "typescript";
enum BodyType {
  "suv",
  "estate",
  "sedan",
}
enum ModelType {
  "plug-in hybrid",
  "pure electric",
}
export interface Car {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: string;
}

