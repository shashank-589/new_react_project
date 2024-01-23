import { useState } from "react";
import { panelOptions } from "./constants";
import { IPanelOptions } from "./Panel.interface";
import rightArrow from "../../Assets/right-arrow-green.svg";
import downArrow from "../../Assets/down-arrow-gray.svg";
import styles from "./Panel.module.scss";
import { Link } from "react-router-dom";

function Panel() {
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const optionClickHandler = (option: IPanelOptions) => {
    setSelectedTab(option.label);
    if (option && option.children && option.children.length > 0)
      setSelectedSubOption(option.children[0].label);
  };
  const subOptionClickHandler = (label: string) => {
    setSelectedSubOption(label);
  }
  return (
    <nav className={`${styles.panelWrapper}`}>
      {panelOptions.map((option: IPanelOptions, idx: number) => (
        <div key={idx}>
          {selectedTab === option.label ? (
            <div className={`${styles.subOptionWrapper}`}>
              <div className={`${styles.options}`}>
                <img src={option.image} alt={option.label}></img>
                <div className={`${styles.labelAndSubOption}`}>
                  <div className={`${styles.optionSpan}`}>{option.label}</div>
                  {option &&
                    option.children &&
                    option.children.map((subOption, idx) => (
                      <div key={idx} className={`${styles.subOption}`}>
                        <div className={`${styles.labelAndLine}`}>
                          <hr className={`${styles.horizontal}`} />
                          <Link
                            onClick={() => subOptionClickHandler(subOption.label)}
                            style={
                              selectedSubOption === subOption.label ? { color: "#ffffff" } : {}
                            }
                            to={`${option.path}${subOption.path}`}
                            state={{ selectedOption: option.label, selectedSubOption: subOption.label }}
                          >
                            {subOption.label}
                          </Link>
                        </div>
                        <div className={`${styles.vertical}`} />
                      </div>
                    ))}
                </div>
              </div>
              <img
                className={`${styles.downArrow}`}
                src={downArrow}
                alt="down-arrow"
              />
            </div>
          ) : (
            <Link
              to={`/${option.path}${option && option?.children && option.children[0]?.path}`}
              key={option.idx}
              className={`${styles.optionWrapper}`}
              onClick={() => optionClickHandler(option)}
              state={{ selectedOption: option.path, selectedSubOption: option && option?.children && option.children[0]?.label }}
            >
              <div className={`${styles.imgWrapper}`}>
                <img src={option.image} alt={option.label}></img>
                <span>{option.label}</span>
              </div>
              <img src={rightArrow} alt="right-arrow" />
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Panel;
