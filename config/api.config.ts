export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const API_URL = `${SERVER_URL}/api/v1`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getCandlesUrl = (string: string) => `/candles${string}`;
