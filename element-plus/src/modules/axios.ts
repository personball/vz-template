import axios from "axios";

export const install: any = (app: any) => {
    axios.defaults.baseURL = 'https://localhost:44333'; // TODO from env
}
