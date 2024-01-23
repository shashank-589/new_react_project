import { useState } from "react";
import { ISelectWithDropdown } from "./SelectWithDropdown.interface";
import styles from "./SelectWithDropdown.module.scss";

function SelectWithDropdown(props: ISelectWithDropdown) {
  const { label, dropdownOptions, disabled, icon, style, getSelectedDropdownOption } = props;
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(label);

  return (
    <div
      style={
        disabled
          ? { backgroundColor: "#ddd", borderRadius: "5px", cursor: "none", ...style }
          : {...style}
      }
      className={styles.dropdown}
    >
      <div
        onClick={() => !disabled && setIsActive(!isActive)}
        className={styles.dropdownBtn}
        style={
          isActive
            ? { borderRadius: "5px 5px 0px 0px" }
            : { borderRadius: "5px" }
        }
      >
        {selected}
        {icon ?? (
          <span className={isActive ? `${styles.circle}${styles.top}` : `${styles.circle}${styles.bottom}`}></span>
        )}
      </div>
      {isActive ? (
        <div className={styles.dropdownContent}>
          {dropdownOptions?.map((option) => (
            <div
              key={option.label}
              style={{color: `${option.textColor}`}}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setIsSelected(e.currentTarget.textContent || "");
                setIsActive(!isActive);
                getSelectedDropdownOption && getSelectedDropdownOption(option)
              }}
              className={styles.item}
            >
              {option.label}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectWithDropdown;
