import { typesOfCustomerMapping } from "./Constants";
import * as api from "../../api";
import { API_ENDPOINTS } from "../../api/api-endpoints";

export const getCustomerList = async (subOption: string, paramString?: string) => {
    const response = await api.get(`${API_ENDPOINTS.GET_CUSTOMER_LIST(typesOfCustomerMapping[subOption], paramString)}`);
    return response.data.data.customers;
}