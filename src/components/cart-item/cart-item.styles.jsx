import styled from "styled-components";

export const CardItemContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  margin-bottom: 1.5rem;
`;

export const CarItemImg = styled.img`
  width: 34%;
  object-fit: cover;
`;

export const CarItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.2rem;
  padding: 1rem 2rem;
`;

export const CarItemDetailsName = styled.span`
  font-size: 1.8rem;
  margin-bottom: 5px;
  font-weight: 900;
`;
export const CarItemDetailsPrice = styled.span`
  font-size: 1.5rem;
`;
