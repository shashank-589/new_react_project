import DatePicker from "react-datepicker";
import styled from "styled-components";

export const StyledDatePicker = styled(DatePicker)`
  opacity: 0;
`;

export const StyledCalendarImg = styled.img`
  position: absolute;
  top: 58%;
  right: 8%;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 75px;
  right: 5px;
  background: #356646;
  padding: 0px;
  cursor: pointer;
  border: none;
  color: #fff;
  width: 90%;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
`;
