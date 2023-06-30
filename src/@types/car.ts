export enum  BodyType  {
  SUV = 'suv',
  ESTATE = "estate",
  SEDAN = 'sedan',
  ALL = 'all'
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

