import React, { useEffect } from "react";
import MainSlide from "../components/home/MainSlide";
import NewMenu from "../components/home/NewMenu";
import SubSlide from "../components/home/SubSlide";
import { NEW_EGGDROP, SANDWICH, SET_ITEMS } from "../components/util/itemlist";
import { scrollToTop } from "../App";


const Home = () =>{
    
    useEffect(() =>{
        scrollToTop()
    },[])
    
    return (
        <div className="home">
            <MainSlide />
            <SubSlide 
            className={"firstSection"} 
            headText={"SET MENU"} 
            items={SET_ITEMS}
            height={120}
            scrollName={'f_h2_active'}
            />
            <SubSlide 
            className={"secondSection"} 
            headText={"SANDWICH"} 
            items={SANDWICH}
            height={760}
            scrollName={'s_h2_active'}
            />
            <NewMenu item={NEW_EGGDROP}/>
        </div>
    )
}
export default Home;