import React, { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import DropDown from "../../components/dropDown/dropDown.component";
import { toggleSnackBarOpen } from "../../redux/snackBar/snackBar.actions";
import { selectShowSnack } from "../../redux/snackBar/snackBar.selector";
import {
  Button,
  Container,
  ContainerSelect,
} from "./completePurchaseProcess.styles";
import SimpleSnackbar from "../../components/snackbar/snackbar.component";
import CheckOutMap from "../../components/Map/Map.component";
const options = [
  { value: "Tehran", label: "Tehran" },
  { value: "Markazi", label: "Markazi" },
  { value: "Qazvin", label: "Qazvin" },
  { value: "Mazandaran", label: "Mazandaran" },
];

const subOption = [
  {
    id: "Tehran",
    city: [
      { value: "Tehran", label: "Tehran" },
      { value: "Ghods", label: "Ghods" },
      { value: "Shahriar", label: "Shahriar" },
      { value: "Islam City", label: "Islam City" },
      { value: "Mallard", label: "Mallard" },
    ],
  },
  {
    id: "Markazi",
    city: [
      { value: "Arak", label: "Arak" },
      { value: "Saveh", label: "Saveh" },
      { value: "Khomein", label: "Khomein" },
      { value: "Mahallat", label: "Mahallat" },
      { value: "Tafresh", label: "Tafresh" },
    ],
  },
  {
    id: "Qazvin",
    city: [
      { value: "Qazvin", label: "Qazvin" },
      { value: "Iqbaliyeh", label: "Iqbaliyeh" },
      { value: "Shawl", label: "Shawl" },
      { value: "Sharifieh", label: "Sharifieh" },
      { value: "Abeek", label: "Abeek" },
    ],
  },
  {
    id: "Mazandaran",
    city: [
      { value: "Babol", label: "Babol" },
      { value: "Sari", label: "Sari" },
      { value: "Chalous", label: "Chalous" },
      { value: "Amol", label: "Amol" },
      { value: "Neka", label: "Neka" },
    ],
  },
];

const CompletePurchaseProcess = ({ showSnackBar, toggleSnackBarOpen }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [subSelectedOption, setSubSelectedOption] = useState(null);
  const [subOptionState, setSubOptionState] = useState([]);
  useEffect(() => {
    const temp = subOption.find((item) => item.id === selectedOption.value);
    setSubOptionState(temp.city);
  }, [selectedOption]);

  return (
    <Container>
      {showSnackBar && <SimpleSnackbar />}
      <ContainerSelect>
        <DropDown
          title="part"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
        <DropDown
          title="city"
          selectedOption={subSelectedOption}
          setSelectedOption={setSubSelectedOption}
          options={subOptionState}
        />
      </ContainerSelect>
      <CheckOutMap/>

      <Button onClick={() => toggleSnackBarOpen({ message: "It was successful", type: "" })}>
        Order
      </Button>
    </Container>
  );
};
const mapStateToProps = createStructuredSelector({
  showSnackBar: selectShowSnack,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackBarOpen: (message) => dispatch(toggleSnackBarOpen(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletePurchaseProcess);
