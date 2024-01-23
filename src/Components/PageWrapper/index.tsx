import { Outlet } from "react-router-dom";
import Header from "../Header";
import Panel from "../Panel/Panel";
import styles from "./pagewrapper.module.scss";

const PageWrapper = (props: any) => {
  return (
    <div className={styles.pageWrapperContainer}>
      <Header />
      <div className={styles.pageContainer}>
        <div className={styles.sidebar}>
          <Panel />
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
