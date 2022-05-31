import React , {useEffect, useState} from 'react';
import BoxStore from '../../components/box/box.component';
import CarouselHome from "../../components/carousel/carousel"
import Slider from '../../components/slider/slider.component';
import { Container, ContainerBoxes } from './home.styles';

const Home = () =>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    } , []);

    return(
        <>
            {/* <CarouselHome/> */}
            <Slider/>
            <ContainerBoxes>
                {
                    items && items.length> 0 && items.map((item) =>(
                        <BoxStore item={item} key={item.index}/>
                    ))
                }
            </ContainerBoxes>
        </>
    )
}

export default Home;