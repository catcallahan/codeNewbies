import * as React from "react";
import NavBar2 from "./Components/nav2";
import FlashCard from "./Components/FlashCard";
import ResourceBox from "./Components/ResourceBox";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import { ICard } from "../Utils/types";
import { FaBlog } from "react-icons/fa";


let indexCounter = 0;
const Study: React.FC<IStudyProps> = (props) => {
  //state object that increments cards when they hit
  const [cards, setCards] = useState<ICard[]>(null);
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    (async () => {
      let res = await fetch("/api/cards");
      let cards = await res.json();
      setCards(cards);
    })();
  }, []);

  

  const nextClick = () => {
    indexCounter++;
    setCounter(indexCounter)
  };

  const backClick = () => {
    if (indexCounter >= 0) {
      indexCounter--;
      setCounter(indexCounter)
    }
    if (indexCounter < 0){
        alert('Can\'t go Back')
        setCounter(0)
    }
  };

  return (
    <React.Fragment>
      <NavBar2 />
      <div className="container d-flex justify-content-end">
        <div className="row">
          <p className="text-white" id="clickFlip">
            Click Card to Flip!
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          height: "400px",
        }}
      >
        <IconContext.Provider value={{ size: "4em", color: "white" }}>
          <div 
            className="col-2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0",
              alignItems: "center",
            }}
          >
            <IoIosArrowBack onClick ={() => backClick()}/>
          </div>
        </IconContext.Provider>
        {cards && (
            <FlashCard card={cards[counter]} />
        )}
        <IconContext.Provider value={{ size: "4em", color: "white" }}>
          <div 
            className="col-2"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0",
              alignItems: "center",
            }}
          >
            <IoIosArrowForward onClick ={() => nextClick()}/>
          </div>
        </IconContext.Provider>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ResourceBox />
      </div>
    </React.Fragment>
  );
};

interface IStudyProps {
  cards: ICard;
}

export default Study;
