export interface ISelectWithDropdown {
    label: string;
    name: string;
    id: string;
    dropdownOptions: Array<{ value: string, label: string, textColor?: string }>;
    disabled?: boolean;
    icon?: any;
    style?: any;
    getSelectedDropdownOption?: (selectedOption: any) => void;
}