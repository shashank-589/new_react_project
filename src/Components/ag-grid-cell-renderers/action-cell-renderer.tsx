import styled from "styled-components";
import EyeIcon from "../../Images/EyeIcon";
import EditIcon from "../../Images/EditIcon";
import { ICellRendererParams } from "ag-grid-community";

//TODO: add disable edit functionality
interface IActionCellRendererProps extends ICellRendererParams {
  showView?: boolean;
  showEdit?: boolean;
  showCancel?: boolean;
  viewClickHandler: () => void;
  editClickHandler: (data: any) => void;
  cancelClickHandler: () => void;
}

const ActionCellButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button<{ type: string }>`
  border: none;
  width: 66px;
  background-color: #356646;
  color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  margin-right: 10px;
  span {
    font-size: 0.75rem;
    margin-left: 4px;
  }
`;

function ActionCellRenderer(props: IActionCellRendererProps) {
  const {
    showView = false,
    showEdit = false,
    showCancel = false,
    viewClickHandler,
    editClickHandler,
    cancelClickHandler,
    data
  } = props;
  return (
    <ActionCellButtonWrapper>
      {showView && (
        <StyledButton
          type="view"
          className="view-button"
          onClick={viewClickHandler}
        >
          <EyeIcon />
          <span>View</span>
        </StyledButton>
      )}
      {showEdit && (
        <>
          <StyledButton
            type="edit"
            className="edit-button"
            onClick={() => editClickHandler(data)}
          >
            <EditIcon />
            <span>Edit</span>
          </StyledButton>
        </>
      )}
      {/* TODO: add disable as well cancel */}
      {showCancel && (
        <StyledButton onClick={cancelClickHandler} type="cancel">
          <span>Cancel</span>
        </StyledButton>
      )}
    </ActionCellButtonWrapper>
  );
}

export default ActionCellRenderer;
