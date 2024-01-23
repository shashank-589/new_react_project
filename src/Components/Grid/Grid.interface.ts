import { ColDef } from 'ag-grid-community';
import { AgGridReactProps } from 'ag-grid-react';
export interface IGridProps extends AgGridReactProps {
    colDefs: Array<ColDef>;
    rowData: any[];
    className?: string;
    height?: string;
    paginationComponent?: any;
}