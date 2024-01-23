import { IInputProps } from "./InfoBox.interface";
import "./InfoBox.scss";

function InfoBox(props: IInputProps) {
  const { label, value, width, icon } = props;
  return (
    <div style={{ width: `${width}` }} className="info-wrapper">
      <label className="info-label">{label}</label>
      <div className="info-box">
        {icon && <img src={icon} alt="home" />}
        <span>{value}</span>
      </div>
    </div>
  );
}

export default InfoBox;
