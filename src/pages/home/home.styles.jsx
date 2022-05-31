import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-dierction: column;
`;

export const ShopContainer = styled.div`
// width:100%;
  display: flex;
//   align-items: start;
//   justify-content: start;
//   position: relative;
  min-height:100vh;

  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
  }
  // flex-dierction: column;
`;

export const ContainerBoxes = styled.div`
  // height:100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   gap: 10px;
  //   grid-auto-rows: minmax(100px, auto);
  padding: 2rem;
  width:80%;
  @media only screen and (max-width: 68.75em) {
    width:100%;
  }
`;

export const SidebarContainer = styled.div`
 width:20%;
 @media only screen and (max-width: 68.75em) {
    width:100%;
  }
`;
