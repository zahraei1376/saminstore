import React from "react";
import BoxStore from "../box/box.component";
import PaginationStore from "../pagination/pagination.component";
import SearchBox from "../searchBox/searchBox.component";
import {
  Container,
  ContainerBoxes,
  ContainerPagination,
  ContainerSearchBox,
} from "./showProducts.styles";

const ShowProducts = ({
  setSearchItem,
  searchItem,
  items,
  count,
  current,
  onPageClick,
}) => {
  return (
    <Container>
      {/* <ContainerSearchBox>
        <SearchBox setSearchItem={setSearchItem} searchItem={searchItem} />
      </ContainerSearchBox> */}
      <ContainerBoxes>
        {items &&
          items.length > 0 &&
          items.map((item) => <BoxStore item={item} key={item.index} />)}
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
