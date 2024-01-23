import styles from "./CustomerPendingDetails.module.scss";
import { useLocation } from "react-router-dom";
import SelectWithDropdown from "../../Components/SelectWithDropdown/SelectWithDropdown";
import InfoBox from "../../Components/InfoBox/InfoBox";
import { PendingInputFieldMapper, dropdownColorList } from "./Constants";
import { useState } from "react";
import ButtonWithIcon from "../../Components/ButtonWithIcon/ButtonWithIcon";

export const CustomerPendingDetails = () => {
  const { state } = useLocation();
  const { selectedOption, selectedSubOption } = state;
  const [selectedDropdpwnOption, setSelectedDropdownOption] =
    useState(selectedSubOption);

  const getSelectedDropdownOption = (label: string) => {
    setSelectedDropdownOption(label);
  };

  return (
    <div className={styles.customerPEndingDetailsWrapper}>
      <div className={styles.header}>
        <span className={styles.heading}>CUSTOMER {selectedSubOption}</span>
        {selectedSubOption === "Pending" ? (
          <SelectWithDropdown
            style={{
              backgroundColor: dropdownColorList[selectedDropdpwnOption],
              border: "none",
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9775 0C5.36252 0 0 5.3726 0 12C0 18.6274 5.36252 24 11.9775 24C18.5925 24 23.955 18.6274 23.955 12C23.955 5.3726 18.5925 0 11.9775 0ZM11.9775 15.6923L6.44942 10.1538H17.5056L11.9775 15.6923Z"
                  fill="black"
                />
              </svg>
            }
            label={selectedSubOption}
            name={selectedSubOption}
            id={selectedSubOption}
            dropdownOptions={[
              { label: "Approve", value: "approve", textColor: "#00B087" },
              { label: "Reject", value: "reject", textColor: "#F00" },
            ]}
            getSelectedDropdownOption={getSelectedDropdownOption}
          />
        ) : (
          <ButtonWithIcon
            text={selectedSubOption}
            onClickHandler={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
      <div className={styles.fieldWrapper}>
        {PendingInputFieldMapper.map((field, idx) => (
          <InfoBox
            key={idx}
            label={field.label}
            value={"field.key"}
            /*value={field.key}*/ width={"20rem"}
          />
        ))}
      </div>
    </div>
  );
};
