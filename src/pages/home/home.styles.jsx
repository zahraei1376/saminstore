import styled from "styled-components";

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

export const SidebarContainer = styled.div`
 width:20%;
 @media only screen and (max-width: 68.75em) {
    width:100%;
  }
`;
