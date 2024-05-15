export interface ICandle {
  _id: string;
  title: string;
  material: string;
  description: string;
  smell: string;
  volume: string;
  currentPrice: number;
  discount: number;
  photoUrl: string;
}

export interface ICandleEditInput extends Omit<ICandle, "_id"> {}
