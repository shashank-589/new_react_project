import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IDatePickerWithDropdown } from "./DatePickerWithDropdown.interface";
import styles from "./DatePickerWithDropdown.module.scss";
import { dateFormatChange } from "../../Globals/helper";
import { StyledDatePicker, StyledInput } from "./DatePickerWithDropdown.styled";
import { getFormattedDate } from "./DatePickerWithDropdown.helper";

export const DatePickerWithDropdown: React.FC<IDatePickerWithDropdown> = (
  props: IDatePickerWithDropdown
) => {
  const { getSelectedDate, label, dropdownOptions } = props;
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(label);
  const [customDateRange, setCustomDateRange] = useState("");

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if (getSelectedDate && start && end) {
        const formattedStartDate = getFormattedDate(start);
        const formattedEndDate = getFormattedDate(end);
        getSelectedDate(formattedStartDate, formattedEndDate);
      }
      if (start && end) {
        setIsActive(!isActive);
      }
    }
  };

  useEffect(() => {
    let displayCustomeDateRange = "Custom";
    if (startDate && endDate) {
      displayCustomeDateRange = `${dateFormatChange(
        startDate
      )} - ${dateFormatChange(endDate)}`;
    }
    setCustomDateRange(displayCustomeDateRange);
  }, [startDate, endDate]);
  return (
    <div className={`${styles.dropdown}`}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={`${styles.dropdownBtn} ${
          isActive ? styles.showDropdown : ""
        }`}
      >
        {selected === "Custom" ? customDateRange : selected}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
        >
          <path d="M5.99916 9L0.803009 0L11.1953 0L5.99916 9Z" fill="white" />
        </svg>
      </div>
      <div
        className={`${styles.dropdownContent}`}
        style={{ display: isActive ? "block" : "none" }}
      >
        {dropdownOptions?.map((option) => (
          <div
            key={option.label}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              if (option.label === "Custom") {
                setShowDatePicker(!showDatePicker);
              } else {
                setIsActive(!isActive);
                getSelectedDate(option.value);
              }
              setIsSelected(option.label);
            }}
            className={`${styles.item}`}
          >
            {option.label === "Custom" ? (
              <>
                <StyledInput value={customDateRange} />
                <StyledDatePicker
                  id="datepicker-input"
                  selected={startDate}
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={handleDateChange}
                />
              </>
            ) : (
              option.label
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
