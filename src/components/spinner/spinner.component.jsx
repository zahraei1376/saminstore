import React from "react";
import { Spinner } from "reactstrap";
import { Container } from "./spinner.styles";
const MySpinner = ({ margin }) => {
  return (
    <Container margin={margin ? margin : null}>
      <Spinner animation="border" role="status" style={{ fontSize: "10rem" }}>
        <span className="visually-hidden"></span>
      </Spinner>
    </Container>
  );
};

export default MySpinner;
