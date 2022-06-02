import * as React from "react";
import {
  BoxContainer,
  BoxDecription,
  BoxImg,
  BoxPrice,
  BoxTitle,
  Button,
} from "./box.styles";
import { limitRecipeTitle } from "../../functions/functions";
import defImage from "../../assets/images/backk.jpg";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
const BoxStore = ({ item,addItem }) => {
  let history = useHistory();
  return (
    <BoxContainer
    onClick={()=>history.push(`/showProduct/${item.id}`)} 
    // href={`/showProduct/${item.id}`}
    >
      <BoxImg src={item.image ? item.image : defImage} />
      <BoxTitle>{limitRecipeTitle(item.title , 14)}</BoxTitle>
      <BoxPrice>${item.price}</BoxPrice>
      <BoxDecription>{limitRecipeTitle(item.description, 64)}</BoxDecription>
      <Button onClick={(e)=>{
        addItem(item);
        e.stopPropagation();
        }}>add to card</Button>
    </BoxContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(BoxStore);
