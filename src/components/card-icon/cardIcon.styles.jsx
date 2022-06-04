import styled from "styled-components";

export const CardIconStore = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CardIconSvg = styled.svg`
  width: 3.8rem;
  height: 3.25rem;
  @media screen and (max-width: 37.5em) {
    transform: scale(1);
  }
`;

export const CardIconPath = styled.path`
  transform: scale(1.7);
  fill: #fff;
  @media screen and (max-width: 37.5em) {
    transform: scale(1);
  }
`;

export const CardIconItemCount = styled.span`
  font-size: 1.5rem;
  height:2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #e67e22;
  color: #fff;
  position: absolute;
  top: -0.5rem;
  right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
