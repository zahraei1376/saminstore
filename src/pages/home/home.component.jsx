import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowProducts from "../../components/showProducts/showProducts.component";
import SideBarStore from "../../components/sidebar/sidebar.component";
import Slider from "../../components/slider/slider.component";
import {
  ShopContainer,
  SidebarContainer,
} from "./home.styles";

const Home = () => {
  const [allProduct , setAllProduct] = useState([]);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProduct(json);
        let len = json.length;
        let temp = Math.ceil(len / 6);
        let tempItems = json.slice((current) * 6, 6 * (current +1));
        setCount(temp);
        setItems(tempItems);
      });

    // axios
    //   .post("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     console.log("response" ,response );
    //     setItems(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const onPageClick = (cun) =>{
    // `https://api.instantwebtools.net/v1/passenger?page=${current-1}&size=${6}`
    let tempItems = allProduct.slice((cun) * 6, 6 * (cun +1));
    setItems(tempItems);
    setCurrent(cun);
  }

  return (
    <>
      <Slider />
      <ShopContainer>
        <SidebarContainer>
          <SideBarStore />
        </SidebarContainer>
        <ShowProducts items={items} count={count} current={current} onPageClick={onPageClick} />
      </ShopContainer>
    </>
  );
};

export default Home;
