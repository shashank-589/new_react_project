export interface IDatePickerWithDropdown  {
    getSelectedDate: (startDate: string, endDate?: string) => void;
    label: string;
    dropdownOptions?: Array<{ value: string, label: string }>;
}