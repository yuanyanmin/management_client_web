import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const baseURL: string = 'http://localhost:3000';

interface IResponse {
  code: number;
  msg: any;
}

const api = axios.create({
  baseURL,
  timeout: 8000,
})

api.interceptors.request.use((req: AxiosRequestConfig):any => {
  const token:string = localStorage.getItem('token')  as string;
  return req;
})

api.interceptors.response.use((res: AxiosResponse):any => {
  const response: IResponse = res.data;
  if (response.code !== 0) {
    console.log('response', response.msg);
  }
  return res.data.msg;
}, err => {
  console.log(err);
})

export default api;
