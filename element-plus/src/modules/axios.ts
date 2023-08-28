import axios from "axios";

export const install: any = (app: any) => {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE;
    console.log('axios loaded!');
}
