import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media only screen and (max-width: 68.75em) {
    width: 100%;
  }
`;
export const ContainerBoxes = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  padding: 2rem;
  width: 100%;
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:3rem 0;
`;
