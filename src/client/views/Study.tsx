import * as React from "react";
import NavBar3 from "./Components/nav3";
import FlashCard from "./Components/FlashCard";
import ResourceBox from "./Components/ResourceBox";
import { useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { ICard } from '../Utils/types'
import { FaBlog } from "react-icons/fa";

const Study: React.FC<IStudyProps> = props => {

    //state object that increments cards when they hit

    const [cards, setCards] = useState<ICard[]>([]);
        useEffect(()=> {
            (async () => {
                let res = await fetch('/api/cards');
                let cards = await res.json();
                setCards(cards)
            })()
        }, [])
      
    return (
        <React.Fragment>
            <NavBar3 /> 
            <div className="container d-flex justify-content-end">
                <div className="row">
                    <p className ='text-white' id='clickFlip'>Click Card to Flip!</p>
                </div>
            </div>
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}>
                        <IoIosArrowBack />
                    </div>
                </IconContext.Provider>
                <FlashCard />
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around" }}>
                <ResourceBox />
            </div>
        </React.Fragment>
    )
}

interface IStudyProps { 
    cards: ICard
}


export default Study