import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import './pagination.styles.css';
const PaginationStore = ({ count, current, onPageClick }) => {
  return (
    <Pagination
      size="lg"
      className="fontSize:'15rem !important'"
      style={{ fontSize: "15rem !important" }}
      aria-label="Page navigation example"
    >
      <PaginationItem style={{ marginLeft: "5px" }} disabled={current === 0}>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {[...Array(count)].map((e, i) => (
        <PaginationItem
          key={i}
          active={current === i}
          className={`paginationItemStyle`}
        >
          <PaginationLink
            href="#"
            onClick={() => onPageClick(i)}
            className={`paginationLinkStyle`}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={current === count - 1}>
        <PaginationLink next href="#" style={{ marginLeft: "5px" }} />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationStore;
