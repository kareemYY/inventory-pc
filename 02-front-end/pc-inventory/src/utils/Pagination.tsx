import React from "react";
import { useSearchParams } from "react-router-dom";

export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  paginate: any;
}> = (props) => {
  const pageNumbers: number[] = [];

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (number: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("pageNo", number.toString());
    setSearchParams(params);
  };

  if (props.totalPages <= 6 && props.totalPages > 1) {
    for (let i = 1; i <= props.totalPages; i++) {
      pageNumbers.push(i);
    }
  } else if (
    props.totalPages > 6 &&
    props.totalPages - props.currentPage >= 5
  ) {
    if (props.currentPage === 1) {
      for (let i = 1; i <= 3; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(props.totalPages - 1);
      pageNumbers.push(props.totalPages);
    } else if (props.currentPage === 2) {
      for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(props.totalPages - 1);
      pageNumbers.push(props.totalPages);
    } else {
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(props.totalPages - 1);
      pageNumbers.push(props.totalPages);
    }
  } else if (props.totalPages > 6 && props.totalPages - props.currentPage < 5) {
    for (let i = props.currentPage - 2; i <= props.totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li
          className="page-item"
          onClick={() => {
            props.paginate(1);
            handlePageChange(1);
          }}
        >
          <button className="page-link">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pageNumbers.map((number, index) =>
          index != 1 && number - pageNumbers[index - 1] > 1 ? (
            <React.Fragment key={"i" + index}>
              <p key={"i" + index}>........</p>
              <li
                key={number}
                onClick={() => {
                  props.paginate(number);
                }}
                className={
                  "page-item " + (props.currentPage === number ? "active" : "")
                }
              >
                <button className="page-link">{number}</button>
              </li>
            </React.Fragment>
          ) : (
            <li
              key={number}
              onClick={() => {
                props.paginate(number);
                handlePageChange(number);
              }}
              className={
                "page-item " + (props.currentPage === number ? "active" : "")
              }
            >
              <button className="page-link">{number}</button>
            </li>
          ),
        )}
        <li
          className="page-item"
          onClick={() => {
            props.paginate(props.totalPages);
            handlePageChange(props.totalPages);
          }}
        >
          <button className="page-link">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
