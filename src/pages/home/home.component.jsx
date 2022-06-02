import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SearchBox from "../../components/searchBox/searchBox.component";
import ShowProducts from "../../components/showProducts/showProducts.component";
import SideBarStore from "../../components/sidebar/sidebar.component";
import Slider from "../../components/slider/slider.component";
import MySpinner from "../../components/spinner/spinner.component";
import { RemoveAll } from "../../redux/cart/cart.action";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectCollections,
  selectError,
  selectLoading,
} from "../../redux/shop/shop.selector";
import { ContainerProducts, ContainerSearchBox, ContainerTitle, ShopContainer, SidebarContainer, Title } from "./home.styles";

const Home = ({ fetchCollectionsStartAsync, data, loading, error }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [searchItem, setSearchItem] = useState("");
  // useEffect(()=>{
  //   RemoveAll();
  // },[])

  useEffect(() => {
    setAllProduct(data);
    let len = data.length;
    let temp = Math.ceil(len / 6);
    let tempItems = data.slice(current * 6, 6 * (current + 1));
    setCount(temp);
    setItems(tempItems);
  }, [data]);

  useEffect(() => {
    if (searchItem) {
      fetchCollectionsStartAsync(
        `https://fakestoreapi.com/products/category/${searchItem}`
      );
    } else {
      fetchCollectionsStartAsync("https://fakestoreapi.com/products");
    }
  }, [searchItem]);

  // useEffect(()=>{
  //   console.log('searchItem' , searchItem);
  //   if(searchItem){
  //     fetch(`https://fakestoreapi.com/products/category/${searchItem}`)
  //           .then(res=>res.json())
  //           .then(json=>{
  //             console.log('json' , json);
  //             if(json && json.length > 0){
  //               setItems(json);
  //             }

  //           })
  //   }
  // },[searchItem])

  const onPageClick = (cun) => {
    // `https://api.instantwebtools.net/v1/passenger?page=${current-1}&size=${6}`
    let tempItems = allProduct.slice(cun * 6, 6 * (cun + 1));
    setItems(tempItems);
    setCurrent(cun);
  };

  // if (loading) {
  //   return <MySpinner />;
  // }

  return (
    <>
      <Slider />
      <ShopContainer>
        <SidebarContainer>
          <SideBarStore setSearchItem={setSearchItem} searchItem={searchItem}/>
        </SidebarContainer>
        <ContainerProducts>
          {/* <ContainerTitle>
            <Title>{searchItem ? searchItem : "all"}</Title>
          </ContainerTitle> */}
          {/* <ContainerSearchBox>
            <SearchBox setSearchItem={setSearchItem} searchItem={searchItem} />
          </ContainerSearchBox> */}
          {!loading ? (
            <ShowProducts
              setSearchItem={setSearchItem}
              searchItem={searchItem}
              items={items}
              count={count}
              current={current}
              onPageClick={onPageClick}
            />
          ) : (
            <MySpinner />
          )}
        </ContainerProducts>
      </ShopContainer>
    </>
  );
};

// export default Home;

const mapStateToProps = createStructuredSelector({
  data: selectCollections,
  loading: selectLoading,
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: (url) => dispatch(fetchCollectionsStartAsync(url)),
  RemoveAll:() =>dispatch(RemoveAll()),
  // addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
