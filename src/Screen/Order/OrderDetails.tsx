import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import bonusLogo from "../../Assets/bonus_logo.png";
import CustomerCareInfo from "../../Components/CustomerCareInfo";
import PrintOrDownloadStrip from "../../Components/PrintOrDownloadStrip";
import Grid from "../../Components/Grid/Grid";
import { useEffect, useState } from "react";
import { GridApi } from "ag-grid-community";
import { getColumnDefBasedOnStage } from "./orderUtils";
import styles from "./order.module.scss";

const rowDataMock = [
  {
    serialNo: "1",
    item: "abc",
    category: "Category",
    quantity: "Quantity",
    unit: "Unit/Bag",
    crateOut: "Crate Out",
    crateIn: "Crate In",
    price: "Price",
    totalPrice: "Total Price",
  },
  {
    serialNo: "1",
    item: "abc",
    category: "Category",
    quantity: "Quantity",
    unit: "Unit/Bag",
    crateOut: "Crate Out",
    crateIn: "Crate In",
    price: "Price",
    totalPrice: "Total Price",
  },
  {
    serialNo: "1",
    item: "abc",
    category: "Category",
    quantity: "Quantity",
    unit: "Unit/Bag",
    crateOut: "Crate Out",
    crateIn: "Crate In",
    price: "Price",
    totalPrice: "Total Price",
  },
];

const OrderDetails = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [rowData, setRowData] = useState<any>();
  const colDefs:any = getColumnDefBasedOnStage("orderDetails");
  let navigate = useNavigate();
  console.log("colDefs",colDefs,rowData);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  useEffect(() => {
    setRowData(rowDataMock);
  }, []);

  useEffect(() => {
    gridApi?.setRowData(rowDataMock);
  }, [gridApi]);

  return (
    <div className={styles.orderDetailsWrapper}>
      <div className={styles.header}>
        <h2>ORDER DETAILS</h2>
        <div className={styles.logoHeader}>
          <div className={styles.logo}>
            <img src={bonusLogo} alt="bonus-logo" />
          </div>
          <div className={styles.orderInfo}>
            <p>Order Id - Milkano1234</p>
            <p>Pincode - 110063</p>
          </div>
        </div>
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.suplierDetails}>
          <p className={styles.label}>Name of the supplier</p>
          <p className={styles.bigText}>Milkano Agro Pvt Ltd.</p>
          <p>Milkano Agro Pvt Ltd.</p>
          <p>
            <span className={"bold"}>Milkano </span> Agro Pvt Ltd.
          </p>
        </div>
        <div className={styles.buyerDetails}>
          <p className={styles.label}>Name of the supplier</p>
          <p className={styles.bigText}>Milkano Agro Pvt Ltd.</p>
          <p>Milkano Agro Pvt Ltd.</p>
          <p>
            <span className={"bold"}>Milkano </span> Agro Pvt Ltd.
          </p>
        </div>
      </div>
      <div className={styles.paymentMode}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <p className="bold">
            PAYMENT STATUS - <span className="red">COD</span>
          </p>
        </div>
      </div>
      <Grid
        className={styles.grid}
        onGridReady={onGridReady}
        colDefs={colDefs}
        rowData={rowData}
        gridOptions={{
          defaultColDef: {
            flex: 1,
            minWidth: 100,
          },
          rowSelection: "multiple",
        }}
        
      />
      <div className={styles.orderSummary}>
        <div className={styles.sign}>
          <div className={styles.signBox}>
            <div className={styles.signDisplay}></div>
            <div className="textCenter bold">BUYER RECEVING SIGNATURE</div>
          </div>
        </div>
        <div className={styles.orderTotal}>
          <div className={styles.row}>
            <div className="bold">Total</div>
            <div className="lightGrey">1000</div>
          </div>
          <div className={styles.row}>
            <div className="bold">GST(0%)</div>
            <div className="lightGrey">00</div>
          </div>
          <div className={styles.row}>
            <div className="bold">Grand Total</div>
            <div className="lightGrey">1000</div>
          </div>
        </div>
      </div>
      <CustomerCareInfo />
      <div className={styles.buttons}>
        <div className={styles.btnWrap}>
          <button className={styles.cancelBtn}>Cancel Order</button>
          <button className={styles.backBtn} onClick={() => navigate?.(-1)}>Back</button>
        </div>
      </div>
      <PrintOrDownloadStrip />
    </div>
  );
};

export default OrderDetails;

