import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { appConfig } from './app-config';

class Api {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: appConfig.protocol + '://' + appConfig.apiAddress,
      withCredentials: true,
      timeout: 5000,
    });

    this.get = (url, config = {}) => this.axios
      .get(
        url,
        {
          withCredentials: true,
          method: "GET",
          ...config,
        },
      )
      .then((result) => result.data);

    this.post = (url, data = {}, config = {}) => this.axios.post(
      url,
      data,
      {
        withCredentials: true,
        method: "POST",
        ...config,
      },
    )
      .then((result) => result.data);
  };
}

export const api = new Api();
