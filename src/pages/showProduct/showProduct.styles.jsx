import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #eee;
`;
export const TitleContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  -webkit-background-clip: text;
  color: #e67e22;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 56.25em) {
    font-size: 2.5rem;
  }
`;

export const GoBack = styled.a`
  font-size:2rem;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  font-size: 2.5rem;
  text-align: center;
`;
export const ContainerProduct = styled.div`
  display: flex;
  min-height: 30rem;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  border-radius: 2rem;
  margin: 5rem 10rem;
  background-color: #fff;
  @media only screen and (max-width: 68.75em) {
    flex-direction: column;
    margin: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 70rem;
  margin-right: 5rem;
  padding: 5rem;
  @media only screen and (max-width: 68.75em) {
    margin-right: 0;
    margin-top: 6rem;
    width: 41rem;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 0 2rem 0 4rem;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  background-color: #fff;
  border-radius: 2rem;
  @media only screen and (max-width: 68.75em) {
    padding: 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -3rem;
    right: -2rem;
    background-image: linear-gradient(to right bottom, #fff, #e67e22, #fff);
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 2rem;
    @media only screen and (max-width: 68.75em) {
      top: 0;
      right: 0;
    }
  }
`;

export const ShowTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 4.5rem;
  color: black;
  padding: 0 1rem;
`;

export const ShowPrice = styled.p`
  width: 100%;
  font-size: 2.5rem;
  color: black;
  margin-top: 3rem;
  padding: 0 1rem;
`;

export const ShowDecription = styled.p`
  width: 100%;
  padding: 0 1rem;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  margin-top: 1rem;
  line-height: 4rem;
`;

export const Button = styled.button`
  padding: 1rem 3rem 1rem 3rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  border: none;
  border: 2px solid #fff;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border-radius: 1rem;
  margin-top: 4rem;
  &:hover {
    color: black;
    background-color: white;
    border: 2px solid black;
  }
`;
