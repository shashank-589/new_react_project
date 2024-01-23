import { useEffect, useState } from "react";
import * as api from "../api";
import { API_ENDPOINTS } from "../api/api-endpoints";

const useGetCityStatePincode = () => {
    const [stateList, setStateList] = useState<any>([]);
    const [cityList, setCityList] = useState<any>([]);
    const [pincodeList, setPincodeList] = useState<any>([]);
    const [selectedState, setSelectedState] = useState<any>(null);
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const [selectedPincode, setSelectedPincode] = useState<any>(null);

    useEffect(() => {
        (async () => {
            await getStateList();
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (selectedState?.id){
                await getCityListByState(selectedState?.id);
            }
        })()
    }, [selectedState?.id])

    useEffect(() => {
        (async () => {
            if (selectedCity?.id)
                await getPincodeListByCity(selectedCity?.id);
        })()
    }, [selectedCity?.id])

    const getStateList = async () => {
        const result = await api.get(API_ENDPOINTS.GET_STATE);
        if (result?.success) {
            setStateList(result?.data?.result)
        }
    }

    const getCityListByState = async (stateId: string | number) => {
        const result = await api.get(API_ENDPOINTS.GET_CITY_BY_STATE(stateId));
        if (result?.success) {
            setCityList(result?.data?.result)
        }
    }

    const getPincodeListByCity = async (cityId: string | number) => {
        const result = await api.get(API_ENDPOINTS.GET_PINCODE_BY_CITY(cityId));
        if (result?.success) {
            setPincodeList(result?.data?.result)
        }
    }

    return {
        stateList,
        cityList,
        pincodeList,
        setSelectedState,
        setSelectedPincode,
        setSelectedCity,
        selectedState,
        selectedCity,
        selectedPincode
    }
}

export default useGetCityStatePincode;