import axios from "axios";
import { App } from "vue";

export const install: any = (app: App<Element>) => {
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE;
    console.log('axios loaded!');
}
