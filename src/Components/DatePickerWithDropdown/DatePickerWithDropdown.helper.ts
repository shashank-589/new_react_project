import { getYearMonthDateFromDateObj } from "../../utils/common"

export const getFormattedDate = (date: Date) => {
    const {yyyy, mm, dd} = getYearMonthDateFromDateObj(date)
    return `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
}