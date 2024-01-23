export const dateFormatChange = (date: Date | null) => {
    if (date) {
        const month = date.toLocaleString('default', { month: 'long' });
        let dd = date.getDate();
        return `${dd} ${month}`
    }
}