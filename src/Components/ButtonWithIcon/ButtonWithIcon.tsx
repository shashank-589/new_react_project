import styled from "styled-components";
import { IButtonWithIcon } from "./ButtonWithIcon.interface";
import { dropdownColorList } from "../../Screen/CustomerPendingDetails/Constants";

const StyledButton = styled.button<{ text: string }>`
  border: none;
  background-color: ${(props) => dropdownColorList[props.text]};
  color: #ffffff;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.19rem 1.31rem;
  
  img {
    margin-right: 1.313rem;
  }
  span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5625rem;
    text-transform: capitalize;
  }
`;
function ButtonWithIcon(props: IButtonWithIcon) {
  const { text = "", icon, onClickHandler, className } = props;

  return (
    <>
      <StyledButton text={text} className={className} onClick={onClickHandler}>
        {icon && <img src={icon} alt={text} />}
        <span>{text}</span>
      </StyledButton>
    </>
  );
}

export default ButtonWithIcon;
