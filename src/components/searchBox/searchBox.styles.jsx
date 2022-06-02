import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:2rem 0;
`;

export const MySearchIcon = styled(SearchIcon)`
  font-size: 3rem !important;
  color: #000;
  margin-right:1rem;
  align-self:end;
`;

export const Input = styled.input`
  font-size: 2rem;
  color: #000;
  border:none;
  border-bottom: 2px solid #000;
  background-color:transparent;
  padding:1rem 2rem;
  transition:all .3s;

  &:focus{
      outline:none;
      border-bottom: 2px solid #e67e22;
  }
`;
