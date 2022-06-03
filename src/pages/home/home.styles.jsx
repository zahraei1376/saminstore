import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
  }
`;

export const SidebarContainer = styled.div`
  width: 20%;
  @media only screen and (max-width: 68.75em) {
    width: 100%;
  }
`;

export const ContainerProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
