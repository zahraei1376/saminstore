import React from "react";
import { Spinner } from "reactstrap";
import { Container } from "./spinner.styles";
const MySpinner = () => {
  return (
    <Container>
      <Spinner animation="border" role="status" style={{ fontSize: "10rem" }}>
        <span className="visually-hidden"></span>
      </Spinner>
    </Container>
  );
};

export default MySpinner;
