import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

interface ResponseData{
  code: number,
  message: string
}

type ObjectOrNull = {} | null

class Http {
  protected readonly http: AxiosInstance;

  constructor () {
    this.http = _http;
  }

  get (
    url: string,
    data: ObjectOrNull | URLSearchParams = null,
    config: AxiosRequestConfig = {}
  ) {
    return this.http.get(url, {
      ...config,
      params: data
    });
  }

  post (url: string, data: ObjectOrNull = null, config: AxiosRequestConfig = {}) {
    return this.http.post(url, data, config);
  }

  put (url: string, data: ObjectOrNull = null, config: AxiosRequestConfig = {}) {
    return this.http.put(url, data, config);
  }

  delete (url: string, config: AxiosRequestConfig = {}) {
    return this.http.delete(url, config);
  }
}

const _http = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

_http.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    const { code, message = '' } = response.data;

    if (code) {
      handleError(code, message);
      console.error('错误🍐', response);
      return Promise.reject(response);
    }

    return response;
  },
  (err: AxiosError) => {
    // console.log(err, err.response)
    return Promise.reject(err);
  }
);

_http.interceptors.request.use(
  (config) => {
    // const token = Cookies.get(TOKEN_KEY);
    // token && (config.headers.Authorization = token);

    return config;
  },
  (err: AxiosError) => {
    console.log('请求出错了', err, err?.response, err?.request);
  }
);

function handleError (code: number, message: string) {
  switch (code){
  case 10008:
    // Cookies.remove(TOKEN_KEY);
    alert('code: 10008, 状态码失效');
    break;

  default:
    alert(`😭😭😭 错误: ${ code }, ${ message }`);
    return Promise.reject();
  }
}


export default Http;