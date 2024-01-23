import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

interface GridStyleProps {
  headerBg?:string;
}

export const StyledAgGridReact = styled(AgGridReact)`
    --ag-header-height: 30px;
    --ag-header-foreground-color: white;
    --ag-header-background-color: #356646;
    --ag-header-cell-hover-background-color: #356646;
    --ag-header-cell-moving-background-color: #356646;
    --ag-checkbox-checked-color:#356646;
  
  .ag-header-cell {
    border-right: 1px solid white;
  }

  .ag-header-cell.whiteBg{
    background-color: #fff;
    color:#356646;

    &:hover{
      color:#fff;
    }
  }

  .ag-cell {
    display: flex;
    align-items: center;
  }

  .ag-root-wrapper {
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
  }
`;
