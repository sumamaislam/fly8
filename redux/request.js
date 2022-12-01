import axios from "axios";
import { errorInterceptor, requestInterceptor } from "./interceptors";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
// const baseURL2 = `${process.env.NEXT_PUBLIC_API_URL_NEW}`;

const request = axios.create({ withCredentials: true, baseURL: baseURL });
// const request2 = axios.create({ withCredentials: true, baseURL2: baseURL2 });

request.interceptors.response.use(null, errorInterceptor);
request.interceptors.request.use(requestInterceptor);

// request2.interceptors.response.use(null, errorInterceptor);
// request2.interceptors.request.use(requestInterceptor);

export default request;
// export { request2 ,baseURL2 };