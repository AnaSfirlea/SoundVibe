export interface APIPage<T> {
  previous: string | null;
  next: string | null;
  results: T[];
}
export interface APIResponse<T> {
  data: T | null;
  status: number;
}
export type QueryParamValue = string | string[] | number | number[] | null | boolean;
export interface QueryParams {
  [prop: string]: QueryParamValue;
}
export type RequestBody = unknown;
export interface RequestHeaders {
  [prop: string]: string;
}
export interface FetchResponse {
  text: () => Promise<string>;
  status: number;
}
