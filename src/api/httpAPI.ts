import { APIResponse, FetchResponse, QueryParams, RequestBody, RequestHeaders } from './types';

class HttpAPI {
  async get<T>(
    url: string,
    queryParams: QueryParams | null = null,
    headers: RequestHeaders = {},
  ): Promise<APIResponse<T>> {
    const config: RequestInit = {
      method: 'GET',
      credentials: 'include',
      headers: this._buildHeaders(headers),
    };

    return this._makeRequest(url, config, queryParams);
  }

  async post<T>(
    url: string,
    body: RequestBody | null = null,
    headers: RequestHeaders = {},
  ): Promise<APIResponse<T>> {
    const config: RequestInit = {
      method: 'POST',
      credentials: 'include',
      headers: this._buildHeaders(headers),
      body: body ? JSON.stringify(body) : null,
    };

    return this._makeRequest(url, config);
  }

  getBaseUrl(): string {
    throw new Error('getBaseUrl() must be implemented by API class');
  }

  getBaseHeaders(): { [key: string]: string } {
    return {};
  }

  _buildHeaders(headers: RequestHeaders | null = {}): RequestHeaders {
    const requestHeaders: RequestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...this.getBaseHeaders(),
      ...headers,
    };

    return requestHeaders;
  }

  _buildUrl(url: string, queryParams: QueryParams | null = null): string {
    const baseUrl = this.getBaseUrl();

    if (!baseUrl) {
      throw new Error('getBaseURL did not return a value in a class that extends HTTP.');
    }

    const queryString = this._buildQueryString(queryParams);

    return queryString ? `${baseUrl}${url}?${queryString}` : `${baseUrl}${url}`;
  }

  _buildQueryString(params: QueryParams | null): string | null {
    if (!params) {
      return null;
    }

    return Object.entries(params)
      .filter(([_, value]) => value != null)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          const encodedValues: string[] = (value as string[])
            .map(v => this._encodeValues(v))
            .filter(v => !!v);

          return `${key}=${encodedValues.join(`&${key}=`)}`;
        }

        return `${key}=${this._encodeValues(value)}`;
      })
      .join('&');
  }

  _encodeValues(value: unknown): string {
    if (typeof value === 'string') return encodeURIComponent(value);
    if (typeof value === 'number') return encodeURIComponent(value.toString());

    return '';
  }

  async _makeRequest<T>(
    url: string,
    config: RequestInit,
    queryParams: QueryParams | null = null,
  ): Promise<APIResponse<T>> {
    try {
      const requestURL = this._buildUrl(url, queryParams);
      const response: FetchResponse = await fetch(requestURL, config);

      const { status } = response;
      const rawData: string = await response.text();
      const data: T | null = rawData.length > 0 ? JSON.parse(rawData) : null;

      if (status >= 400 && status <= 599) {
        console.log(`Request to '${url}' failed with status ${status}.`);
      }

      return { data, status: response.status };
    } catch (error) {
      console.log(error);

      return { data: null, status: 504 };
    }
  }
}

export default HttpAPI;