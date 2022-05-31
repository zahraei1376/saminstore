import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-dierction: column;
`;

export const ContainerBoxes = styled.div`
    width:100%;
    // height:100vh;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;
//   grid-auto-rows: minmax(100px, auto);
  padding:10rem;
`;
