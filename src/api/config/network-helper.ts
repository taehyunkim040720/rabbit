import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class NetworkHelper {
  private static instance: AxiosInstance;

  constructor() {}

  public static getInstance(): AxiosInstance {
    if (!NetworkHelper.instance) {
      this.instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASEURL
      });
      this.instance.interceptors.response.use(response => response.data);
    }
    return this.instance;
  }

  public static async get(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const result = await this.instance.get(url, config);
    return result;
  }

  public static async post<T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const result = await this.instance.post<T>(url, data, config);
    return result;
  }

  public static async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const result = await this.instance.delete(url, config);
    return result;
  }

  public static async patch<T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const result = await this.instance.patch<T>(url, data, config);
    return result;
  }
}

const networkHelper: NetworkHelper = NetworkHelper.getInstance();

export { networkHelper };
