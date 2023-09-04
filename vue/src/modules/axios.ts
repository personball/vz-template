import axios from "axios";
import { App } from "vue";

export const install: any = (app: App<Element>) => {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE;
    axios.defaults.headers.post["Content-Type"] = 'application/json'

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        const { getToken } = useTokenService()
        const token = getToken()

        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error)
    })

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });


    console.log('axios loaded!');
}
