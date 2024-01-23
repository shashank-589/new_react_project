import { GridApi } from "ag-grid-community";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionCellRenderer from "../../Components/ag-grid-cell-renderers/action-cell-renderer";
import CheckBox from "../../Components/CheckBox";
import { DatePickerWithDropdown } from "../../Components/DatePickerWithDropdown/DatePickerWithDropdown";
import Grid from "../../Components/Grid/Grid";
import Pagination from "../../Components/Pagination/Pagination";
import SearchInput from "../../Components/SearchInput/SearchInput";
import SelectWithDropdown from "../../Components/SelectWithDropdown/SelectWithDropdown";
import useGetCityStatePincode from "../../hooks/useGetCityStatePincode";
import { getTodaysDate, getYesterdaysDate } from "../../utils/common";
import styles from "./order.module.scss";
import {
  getColumnDefBasedOnStage,
  getNextStageText,
  isOrderStage,
} from "./orderUtils";

const rowDataMock = [
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
  {
    orderId: "B2C-Milkano-1",
    buyerName: "Virender kundu",
    contactNo: 987651321,
    mode: "DLF4",
    status: "DLF47",
    orderValue: "1234",
    dateTime: new Date(),
  },
];

const Order = ({}) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [rowData, setRowData] = useState<any>(rowDataMock);
  const [colDefs, setColDefs] = useState([]);
  const [refreshGrid, setRefresGrid] = useState(1);
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    stateList,
    cityList,
    pincodeList,
    setSelectedState,
    setSelectedPincode,
    setSelectedCity,
  } = useGetCityStatePincode();

  //TODO: add proper field names
  const getColDefs = (stage: string) => {
    let cols: any = getColumnDefBasedOnStage(stage);
    cols = cols?.map((e: any) => {
      if (isOrderStage(stage) && e.field === "Action") {
        return {
          ...e,
          cellRenderer: ActionCellRenderer,
          cellRendererParams: {
            showEdit: true,
            editClickHandler: (data: any) => {
              navigate(`/order-details/view/${data.id}`, {
                state: {
                  selectedOption: state.selectedOption,
                  selectedSubOption: state.selectedSubOption,
                },
              });
            },
          },
        };
      }
      return { ...e };
    });
    return cols;
  };
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Define your page size
  const totalPages = Math.ceil(rowData.length / pageSize);
  const onPageChanged = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  useEffect(() => {
    setRowData(rowDataMock);
  }, []);

  useEffect(() => {
    // Update AG Grid data when the page changes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const rowDataPerPage = rowData.slice(startIndex, endIndex);
    gridApi?.setRowData(rowDataPerPage);
  }, [currentPage, pageSize, rowData, gridApi]);

  useEffect(() => {
    const cols = getColDefs(state?.selectedSubOption);
    console.log("COLS", cols);
    setColDefs(cols);
  }, [state?.selectedSubOption]);

  useEffect(() => {
    setRefresGrid(refreshGrid + 1);
  }, [colDefs]);

  const goToNextStage = (path: string) => {
    navigate(`/order/${path?.toLowerCase()}`, {
      state: {
        selectedOption: state.selectedOption,
        selectedSubOption: path,
      },
    });
  };

  const renderFilterBasedOnStage = (stage: string) => {
    const currenctStage = stage?.toLowerCase();
    if (isOrderStage(stage))
      return <SearchInput placeholder={"Search by Name, Mobile No, ID"} />;
    else if (currenctStage === "pack size download") {
      return (
        <SelectWithDropdown
          name="category"
          id="category"
          style={{
            width: "30%",
          }}
          label={"Select Category"}
          dropdownOptions={[]}
        />
      );
    } else if (currenctStage === "order value download") {
      return <SearchInput placeholder={"Search by Order ID"} />;
    }
  };

  return (
    <div className={styles.orderWrapper}>
      <div className={styles.header}>
        <span>
          {state?.selectedSubOption}{" "}
          {isOrderStage(state?.selectedSubOption) ? "Orders" : ""}
        </span>
        <DatePickerWithDropdown
          label={"Today"}
          dropdownOptions={[
            { label: "Today", value: getTodaysDate() },
            { label: "Yesterday", value: getYesterdaysDate() },
            { label: "Custom", value: "" },
          ]}
          getSelectedDate={(start, end) => console.log(start, end)}
          // onChange={() => console.log("onchange clicked..")}
        />
      </div>
      <div className={styles.filtersWrapper}>
        {renderFilterBasedOnStage(state?.selectedSubOption)}
        <SelectWithDropdown
          name="state"
          id="state"
          label={"Select State"}
          dropdownOptions={stateList?.map((e: any) => {
            return { label: e?.name, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {setSelectedState(selectedOption)}}
        />
        <SelectWithDropdown
          name="city"
          id="city"
          label={"Dist/City"}
          dropdownOptions={cityList?.map((e: any) => {
            return { label: e?.city, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {setSelectedCity(selectedOption)}}
        />
        <SelectWithDropdown
          name="pincode"
          id="pincode"
          label={"Pincode"}
          dropdownOptions={pincodeList?.map((e: any) => {
            return { label: e?.pincode, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {setSelectedPincode(selectedOption)}}
        />
      </div>
      <Grid
        className={styles.grid}
        onGridReady={onGridReady}
        colDefs={colDefs}
        key={refreshGrid}
        rowData={rowData}
        gridOptions={{
          pagination: true,
          paginationPageSize: 10,
          suppressPaginationPanel: true,
          defaultColDef: {
            flex: 1,
            minWidth: 100,
            headerClass: isOrderStage(state?.selectedSubOption)
              ? "whiteBg"
              : "",
          },
          rowSelection: "multiple",
        }}
        paginationComponent={
          <div className={styles.bottomPagination}>
            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChanged}
                totalDataCount={rowData.length || 0}
                pageSize={pageSize}
                visiblePageNumberCount={4}
              />
            </div>
            <div className={styles.progressBtn}>
              {getNextStageText(state?.selectedSubOption) && (
                <button
                  onClick={() => {
                    goToNextStage(getNextStageText(state?.selectedSubOption));
                  }}
                >
                  {getNextStageText(state?.selectedSubOption)}
                </button>
              )}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Order;
