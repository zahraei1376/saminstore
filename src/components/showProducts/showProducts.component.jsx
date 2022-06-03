import React from "react";
import BoxStore from "../box/box.component";
import PaginationStore from "../pagination/pagination.component";
import {
  Container,
  ContainerBoxes,
  ContainerPagination,
} from "./showProducts.styles";

const ShowProducts = ({ items, count, current, onPageClick }) => {
  return (
    <Container>
      <ContainerBoxes>
        {items &&
          items.length > 0 &&
          items.map((item) => <BoxStore item={item} key={item.id} />)}
      </ContainerBoxes>
      <ContainerPagination>
        <PaginationStore
          count={count}
          current={current}
          onPageClick={onPageClick}
        />
      </ContainerPagination>
    </Container>
  );
};

export default ShowProducts;
