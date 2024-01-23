import { useState } from "react";
import { IGridProps } from "./Grid.interface";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { StyledAgGridReact } from "./Grid.styled";

function Grid(props: IGridProps) {
  const {
    colDefs,
    rowData,
    className,
    height = "100%",
    paginationComponent,
    gridOptions,
    onGridReady
  } = props;
  const [gridData] = useState(rowData);
  const [columnDefs] = useState(colDefs);
  return (
    <div
      className="ag-theme-alpine"
      style={{ width: "100%", height: `${height}` }}
    >
      <StyledAgGridReact
        onGridReady={onGridReady}
        className={className}
        rowData={gridData}
        columnDefs={columnDefs}
        animateRows={true}
        {...gridOptions}
      />
      {paginationComponent}
    </div>
  );
}

export default Grid;
