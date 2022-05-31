import React, { useEffect, useState } from "react";
import BoxStore from "../../components/box/box.component";
import SideBarStore from "../../components/sidebar/sidebar.component";
import Slider from "../../components/slider/slider.component";
import {
  Container,
  ContainerBoxes,
  ShopContainer,
  SidebarContainer,
} from "./home.styles";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  }, []);

  return (
    <>
      <Slider />
      <ShopContainer>
        <SidebarContainer>
          <SideBarStore />
        </SidebarContainer>
        <ContainerBoxes>
          {items &&
            items.length > 0 &&
            items.map((item) => <BoxStore item={item} key={item.index} />)}
        </ContainerBoxes>
      </ShopContainer>
    </>
  );
};

export default Home;
