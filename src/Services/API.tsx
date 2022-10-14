import axios from "axios";


axios.defaults.withCredentials = false;
const apiInstance = axios.create({
    baseURL: "https://www.ag-grid.com",
    timeout: 300000,
});
const apiPrefix: string = "/example-assets/row-data.json";
class API {
    getData = async () => {
        const response = await apiInstance.get(`${apiPrefix}`);
        return response.data;
    };
}
export default new API();
