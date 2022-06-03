import styled from "styled-components";

export const CardIconStore = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CardIconSvg = styled.svg`
  width: 3.25rem;
  height: 3.25rem;
  @media screen and (max-width: 37.5em) {
    transform: scale(1);
  }
`;

export const CardIconPath = styled.path`
  transform: scale(1.7);
  fill: #fff;
`;

export const CardIconItemCount = styled.span`
  font-size: 0.8rem;
  height: 1.75rem;
  width: 1.75rem;
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
