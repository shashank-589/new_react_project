import { ValueFormatterParams } from "ag-grid-community";

export const getYearMonthDateFromDateObj = (date: Date) => {
    const dateObj = new Date(date);
    const yyyy = dateObj.getFullYear();
    let mm = dateObj.getMonth() + 1;
    let dd = dateObj.getDate();
    return {
        yyyy,
        mm,
        dd
    }
}

export const getTodaysDate = () => {
    const { yyyy, mm, dd } = getYearMonthDateFromDateObj(new Date());
    return `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
};
export const getYesterdaysDate = () => {
    const dateObj = new Date();
    const yesterday = new Date(dateObj);
    yesterday.setDate(dateObj.getDate() - 1)
    const { yyyy, mm, dd } = getYearMonthDateFromDateObj(yesterday);
    return `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
};

export const dateFormatter = (params: ValueFormatterParams) => {
    if (params.data?.created_at) {
        const dateObj = new Date(params.data.created_at);
        const { yyyy, mm, dd } = getYearMonthDateFromDateObj(params.data.created_at);
        const date = `${dd < 10 ? `0${dd}` : dd}-${mm < 10 ? `0${mm}` : mm}-${yyyy}`;
        const HH = dateObj.getHours();
        const min = dateObj.getMinutes();
        const time = `${HH}:${min}`
        return `${date}, ${time}hrs`
    }
    return ''
}