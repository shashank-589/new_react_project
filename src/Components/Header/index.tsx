import styles from "./header.module.scss";
import bonusLogo from "../../Assets/bonus_logo.png"

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <img src={bonusLogo} alt="bonus-logo"/>
        </div>
        <div className={styles.userBox}>
          <div className={styles.userInfo}>
            <p className={styles.name}>Virender Kundu</p>
            <p className={styles.info}>virender.singh@milkanoagro.com</p>
            <p className={styles.info}>Gurgaon CC</p>
          </div>
          <div className={styles.userAvtar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="58"
              viewBox="0 0 59 58"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4649 21.0913C40.4649 23.8882 39.3539 26.5705 37.3762 28.5481C35.3986 30.5258 32.7163 31.6368 29.9195 31.6368C27.1226 31.6368 24.4404 30.5258 22.4627 28.5481C20.4851 26.5705 19.374 23.8882 19.374 21.0913C19.374 18.2945 20.4851 15.6122 22.4627 13.6346C24.4404 11.6569 27.1226 10.5459 29.9195 10.5459C32.7163 10.5459 35.3986 11.6569 37.3762 13.6346C39.3539 15.6122 40.4649 18.2945 40.4649 21.0913ZM35.1922 21.0913C35.1922 22.4898 34.6367 23.8309 33.6479 24.8197C32.659 25.8086 31.3179 26.3641 29.9195 26.3641C28.5211 26.3641 27.1799 25.8086 26.1911 24.8197C25.2023 23.8309 24.6467 22.4898 24.6467 21.0913C24.6467 19.6929 25.2023 18.3518 26.1911 17.363C27.1799 16.3741 28.5211 15.8186 29.9195 15.8186C31.3179 15.8186 32.659 16.3741 33.6479 17.363C34.6367 18.3518 35.1922 19.6929 35.1922 21.0913Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9688 0C13.9528 0 0.96875 12.9841 0.96875 29C0.96875 45.0159 13.9528 58 29.9688 58C45.9847 58 58.9688 45.0159 58.9688 29C58.9688 12.9841 45.9847 0 29.9688 0ZM6.24148 29C6.24148 34.51 8.1212 39.5824 11.2717 43.6107C13.4842 40.7052 16.3385 38.3505 19.6116 36.7306C22.8848 35.1108 26.4881 34.2696 30.1401 34.2727C33.7449 34.2693 37.3029 35.0887 40.543 36.6686C43.7832 38.2485 46.6199 40.5471 48.8372 43.3893C51.1215 40.3933 52.6595 36.8965 53.324 33.1881C53.9885 29.4797 53.7604 25.6664 52.6586 22.0637C51.5568 18.461 49.6129 15.1724 46.9878 12.4701C44.3626 9.7678 41.1318 7.72945 37.5625 6.52371C33.9932 5.31796 30.1881 4.97949 26.462 5.53629C22.7359 6.0931 19.196 7.52917 16.1351 9.72569C13.0743 11.9222 10.5804 14.816 8.85999 18.1677C7.13955 21.5194 6.24195 25.2326 6.24148 29ZM29.9688 52.7273C24.5219 52.7355 19.2395 50.8616 15.0153 47.4229C16.7156 44.9888 18.9786 43.0015 21.612 41.63C24.2453 40.2585 27.171 39.5433 30.1401 39.5455C33.0722 39.5431 35.9625 40.2403 38.571 41.5792C41.1795 42.9181 43.431 44.86 45.1384 47.2436C40.8814 50.794 35.5119 52.7351 29.9688 52.7273Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.logoutButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M22 12L17 8V11L8 11V13L17 13V16L22 12Z" fill="#FCC300" />
              <path
                d="M10.999 21.0009C12.1815 21.0042 13.3529 20.7728 14.4453 20.3202C15.5377 19.8675 16.5294 19.2026 17.363 18.3639L15.949 16.9499C14.627 18.2719 12.869 19.0009 10.999 19.0009C9.12904 19.0009 7.37104 18.2719 6.04904 16.9499C4.72704 15.6279 3.99804 13.8699 3.99804 11.9999C3.99804 10.1299 4.72704 8.37194 6.04904 7.04994C7.37104 5.72794 9.12904 4.99894 10.999 4.99894C12.869 4.99894 14.627 5.72794 15.949 7.04994L17.363 5.63594C15.664 3.93594 13.404 2.99894 10.999 2.99894C8.59404 2.99894 6.33404 3.93594 4.63504 5.63594C2.93504 7.33494 1.99804 9.59494 1.99804 11.9999C1.99804 14.4049 2.93504 16.6649 4.63504 18.3639C5.46864 19.2026 6.46037 19.8675 7.55278 20.3202C8.64519 20.7728 9.81656 21.0042 10.999 21.0009Z"
                fill="#FCC300"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
