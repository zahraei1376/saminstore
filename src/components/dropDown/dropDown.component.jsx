import React from "react";
import Select from "react-select";
import { Container, Label } from "./dropDown.styles";

const styles = {
  control: (base) => ({
    ...base,
    fontSize: "2rem",
  }),
  menu: (base) => ({
    ...base,
    fontSize: "2rem",
  }),
};

const DropDown = ({ selectedOption, setSelectedOption, options , title }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Select
        styles={styles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </Container>
  );
};
export default DropDown;
