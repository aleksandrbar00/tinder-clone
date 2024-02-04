export type TFeatureType = 'born' | 'education' | 'location';

export type TFeature = {
  type: TFeatureType;
  label: string;
};

export type TUserCardData = {
  name: string;
  age: number;
  features: Array<TFeature>;
  desc: string;
  image: string;
};
