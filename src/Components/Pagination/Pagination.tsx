import { useEffect, useState } from "react";
import { IPagination } from "./Pagination.interface";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalDataCount,
  pageSize = 4,
}: IPagination) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);
  const [initialNum, setInitialNum] = useState<number>(1);
  const [nextNum, setNextNum] = useState<number>(pageSize);

  const [visiblePageNo, setVisiblePageNo] = useState<
    { value: number; selected: boolean }[]
  >([]);
  const getRange = (initVal: number, currPg?: number) => {
    const pageArr: any = [];
    let i = initVal;
    while (i <= initVal + pageSize - 1) {
      pageArr.push({
        value: i,
        selected: currPg === i ? true : false,
      });
      i++;
    }
    setVisiblePageNo(pageArr);
  };
  const goToPage = (pageNumber: number) => {
    setInitialNum((pageNumber - 1) * pageSize + 1);
    setNextNum(pageNumber * pageSize);
    setSelectedPage(pageNumber);
    if (pageNumber === totalPages) {
      getRange(pageNumber - pageSize + 1, pageNumber);
    } else if (pageNumber - pageSize <= 0) {
      getRange(1, pageNumber);
    } else if (showTrailingDots(pageNumber)) {
      getRange(totalPages - pageSize + 1, pageNumber);
    } else if (pageNumber - pageSize > 0) {
      getRange(pageNumber - pageSize + 1, pageNumber);
    }
    onPageChange(pageNumber)
  };

  const showPrevDots = () => selectedPage > pageSize;
  const showTrailingDots = (pageNumber?: number) =>
    totalPages - (pageNumber || selectedPage) < pageSize;

  useEffect(() => {
    getRange(1, selectedPage);
  }, []);

  return (
    <div className={`${styles.customPagination}`}>
      <div className={`${styles.paginationButtonWrapper}`}>
        {showPrevDots() && (
          <button onClick={() => goToPage(selectedPage - 1)}>&lt;</button>
        )}
        {showPrevDots() && <div>...</div>}
        {visiblePageNo.map((e, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(e.value)}
            style={
              e.selected ? { backgroundColor: "#356646", color: "#ffffff" } : {}
            }
          >
            {e.value}
          </button>
        ))}
        {selectedPage !== totalPages && !showTrailingDots() && (
          <>
            <div>...</div>
            <button
              onClick={(event) =>
                goToPage(Number(event.currentTarget.innerText))
              }
            >
              {totalPages}
            </button>

            <button onClick={() => goToPage(selectedPage + 1)}>&gt;</button>
          </>
        )}
      </div>
      <div className={`${styles.label}`}>
        <span>
          Showing data {initialNum} to {nextNum} of {totalDataCount} entries
        </span>
      </div>
    </div>
  );
};

export default Pagination;
