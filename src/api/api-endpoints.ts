export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJpZCI6MiwiaWF0IjoxNzAxODc5NjU4LCJleHAiOjE3MzM0MTU2NTh9.NB7vcoCQMRMy6NWN7cHiLXd3frvLm2l3GRNPD4g3ZO8";
export const API_ENDPOINTS = {
    GET_STATE: `/state/list`,
    GET_CITY_BY_STATE: (stateId: number | string) => `/common/getCityByState/${stateId}`,
    GET_PINCODE_BY_CITY: (cityId: number | string) => `/common/getPincodeByCity/${cityId}`,
    GET_CUSTOMER_LIST: (typeOfCustomer: number, queryParam?: string) => `/customer/list/${typeOfCustomer}${queryParam}`,
}