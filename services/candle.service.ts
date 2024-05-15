import { ICandle, ICandleEditInput } from "@/shared/types/candle.interface";
import { request } from "./api/request.api";
import { getCandlesUrl } from "@/config/api.config";

export const CandleService = {
  async getAll() {
    return request<ICandle[]>({
      url: getCandlesUrl(""),
      method: "GET",
    });
  },

  async getById(_id: string) {
    console.log(_id, "dfdf");
    return request<ICandle>({
      url: getCandlesUrl(`/${_id}`),
      method: "GET",
    });
  },

  async create(data: ICandleEditInput) {
    return request<ICandle>({
      url: getCandlesUrl(""),
      method: "POST",
      data,
    });
  },

  async update(_id: string, data: ICandleEditInput) {
    return request<ICandle>({
      url: getCandlesUrl(`/${_id}`),
      method: "PATCH",
      data,
    });
  },

  async delete(_id: string) {
    return request<string>({
      url: getCandlesUrl(`/${_id}`),
      method: "DELETE",
    });
  },
};
