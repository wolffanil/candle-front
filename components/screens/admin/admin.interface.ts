import { ICandle } from "@/shared/types/candle.interface";

export interface IAdmin {
  type: "Edit" | "Create";
  candle?: ICandle;
}
