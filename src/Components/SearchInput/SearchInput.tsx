import "./Input.scss";
import { ISearchProps } from "./SearchInput.interface";


//TODO: add input handler props
function SearchInput(props: ISearchProps) {
  const {placeholder = ''} = props;
  return (
    <input
      className="search-input-wrapper"
      placeholder={placeholder}
    />
  );
}

export default SearchInput;
