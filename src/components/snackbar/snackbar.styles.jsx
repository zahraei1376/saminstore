import styled, { keyframes } from "styled-components";
// export const fadein = keyframes`
//     from {
//       bottom: 0;
//       opacity: 0;
//     }
//     to {
//       bottom: 1rem;
//       opacity: 1;
//     }
// `;

// export const fadeout = keyframes`
//     from {
//       bottom: 1rem;
//       opacity: 1;
//     }
//     to {
//       bottom: 0;
//       opacity: 0;
//     }
// `;

// export const Container = styled.div`
//   position: fixed;
//   z-index: 1000;
//   bottom: 1rem;
//   left: 50%;
//   transform: translateX(-50%);
//   height: auto;
//   padding: 0.625rem 1rem;
//   border-radius: 0.75rem;
//   border: transparent;
//   background-color: hsl(200, 100%, 65%);
//   color: white;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   animation: ${fadein} 0.5s, ${fadeout} 0.5s ${(props) => props.time};
// `;

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 0.875rem;
//   padding: 0;
//   margin-left: 1rem;
//   height: 1.75rem;
//   width: 1.75rem;
//   text-align: center;
//   border: none;
//   border-radius: 50%;
//   background-color: transparent;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background-color: hsl(200, 100%, 60%);
//   }
// `;

export const Container = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  // background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 9999;
  right: 10%;
  bottom: 30px;
  font-size: 2rem;
  background-color: ${(props) => (props.error ? "#930B0B" : "#333")};
  visibility: ${(props) => (props.showSnackBar ? "visible" : "hidden")};
  opacity: ${(props) => (props.showSnackBar ? "1" : "0")};
  transition: ${(props) =>
    props.showSnackBar
      ? "visibility 0s linear 0s, opacity 300ms"
      : " visibility 0s linear 300ms, opacity 300ms"};
`;

export const Span = styled.span`
  font-size: 1.5rem;
  margin-left:1rem;
  cursor:pointer;
`;
