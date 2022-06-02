import React from "react";
import {Container, MySearchIcon , Input} from './searchBox.styles';

const SearchBox = ({setSearchItem , searchItem}) => {
  return (
       <Container>
          <MySearchIcon htmlFor="search" />
          <Input value={searchItem} onChange={e=>setSearchItem(e.target.value)} type="text" name="search" id="search" placeholder="search with name" />
        </Container>
  );
}

export default SearchBox;