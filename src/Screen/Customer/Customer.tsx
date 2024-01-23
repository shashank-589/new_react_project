import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Customer.module.scss";
import { DatePickerWithDropdown } from "../../Components/DatePickerWithDropdown/DatePickerWithDropdown";
import SelectWithDropdown from "../../Components/SelectWithDropdown/SelectWithDropdown";
import {
  dateFormatter,
  getTodaysDate,
  getYesterdaysDate,
} from "../../utils/common";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Grid from "../../Components/Grid/Grid";
import ActionCellRenderer from "../../Components/ag-grid-cell-renderers/action-cell-renderer";
import Pagination from "../../Components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { GridApi } from "ag-grid-community";
import { getCustomerList } from "./CustomerApi";
import { pageSize } from "./Constants";
import useGetCityStatePincode from "../../hooks/useGetCityStatePincode";

function Customer() {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [rowData, setRowData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryParams, setQueryParams] = useState('');
  const {
    stateList,
    cityList,
    pincodeList,
    setSelectedState,
    setSelectedPincode,
    setSelectedCity,
    selectedState,
    selectedCity,
    selectedPincode
  } = useGetCityStatePincode();
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(selectedState,
    selectedCity,
    selectedPincode)

  const customerListColDefs = [
    { field: "buyer_id", headerName: "BUYER_ID" },
    { field: "shop", headerName: "SHOP NAME" },
    { field: "mobile", headerName: "BUYER MOBILE" },
    { field: "city", headerName: "DISTRICT", resizable: true },
    { field: "pincode", headerName: "PINCODE", resizable: true },
    { field: "society", headerName: "REJECTED BY", resizable: true },
    {
      field: "updated_by",
      headerName: "DATE",
      resizable: true,
      valueFormatter: dateFormatter,
    },
    {
      field: "Action",
      cellRenderer: ActionCellRenderer,
      cellRendererParams: {
        showEdit: true,
        editClickHandler: (data: any) => {
          //TODO: send customer id in URL
          navigate(`/customer-pending-details/${data.id}`, {
            state: {
              selectedOption: state.selectedOption,
              selectedSubOption: state.selectedSubOption,
            },
          });
        },
      },
      maxWidth: 100,
    },
  ];
  const newLocal = rowData.length / pageSize;
  const totalPages = Math.ceil(newLocal);
  const onPageChanged = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  useEffect(() => {
    async function fetchCustomerList() {
      let customerList = await getCustomerList(
        state.selectedSubOption,
        `?page=${currentPage}&limit=20`
      );
      setRowData(customerList);
      gridApi?.setRowData(customerList);
    }
    fetchCustomerList();
  }, [currentPage, gridApi]);

  useEffect(() => {
    console.log(queryParams,"?????")
  })

  const onDateChanged = (startDate: string, endDate?: string) => {
    setQueryParams(`&startDate=${startDate}&${endDate ?? `endDate=${endDate}`}`)
  };
  return (
    <div className={styles.customerWrapper}>
      <div className={styles.header}>
        <span>CUSTOMER {state?.selectedSubOption}</span>
        <DatePickerWithDropdown
          label={"Today"}
          dropdownOptions={[
            { label: "Today", value: getTodaysDate() },
            { label: "Yesterday", value: getYesterdaysDate() },
            { label: "Custom", value: "" },
          ]}
          getSelectedDate={onDateChanged}
        />
      </div>
      <div className={styles.filtersWrapper}>
        <SearchInput placeholder={"Search by Name, Mobile No, ID"} />
        <SelectWithDropdown
          name="state"
          id="state"
          label={"Select State"}
          dropdownOptions={stateList?.map((e: any) => {
            return { label: e?.name, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {
            setSelectedState(selectedOption);
          }}
        />
        <SelectWithDropdown
          name="city"
          id="city"
          label={"Dist/City"}
          disabled={cityList && cityList.length === 0 ? true : false }
          dropdownOptions={cityList?.map((e: any) => {
            return { label: e?.city, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {
            setSelectedCity(selectedOption);
          }}
        />
        <SelectWithDropdown
          name="pincode"
          id="pincode"
          label={"Pincode"}
          disabled={pincodeList && pincodeList.length === 0 ? true : false }  
          dropdownOptions={pincodeList?.map((e: any) => {
            return { label: e?.pincode, value: e?.id, ...e };
          })}
          getSelectedDropdownOption={(selectedOption) => {
            setSelectedPincode(selectedOption);
          }}
        />
      </div>
      <Grid
        className={styles.grid}
        onGridReady={onGridReady}
        colDefs={customerListColDefs}
        rowData={rowData}
        gridOptions={{
          pagination: true,
          paginationPageSize: 10,
          suppressPaginationPanel: true,
        }}
        paginationComponent={
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChanged}
            totalDataCount={rowData.length || 0}
            pageSize={pageSize}
            visiblePageNumberCount={4}
          />
        }
      />
    </div>
  );
}

export default Customer;
