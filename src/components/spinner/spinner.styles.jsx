import styled from "styled-components";

export const Container = styled.div`
  // width: 100vw;
  // height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.margin ? "0" : "5rem")};
  margin-right: ${(props) => (props.margin ? "1rem" : "0")};
`;
