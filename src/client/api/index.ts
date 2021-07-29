import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { appConfig } from './app-config';

class Api {
  get: (url: string, config?: AxiosRequestConfig) => Promise<any>;
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<any>;
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: appConfig.protocol + '://' + appConfig.apiAddress,
      withCredentials: true,
    });

    this.get = (url, config = {}) => this.axios.get(
      url,
      {
        ...config,
        method: "GET",
      },
    );

    this.post = (url, data = {}, config = {}) => this.axios.post(
      url,
      data,
      {
        ...config,
        method: "POST",
      },
    );
  };
}

export const api = new Api();
