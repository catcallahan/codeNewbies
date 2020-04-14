import * as React from "react";
import NavBar2 from "./Components/nav2";
import QuizCard from "./Components/QuizCard";
import AnswerBox from "./Components/AnswerBox";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

const Quiz: React.FC<QuizProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}>
                        <IoIosArrowBack />
                    </div>
                </IconContext.Provider>
                <QuizCard />
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around" }}>
                <AnswerBox />
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center"}}>
                <button className="btn btn-lg btn-brightRoseColor border border-white">Submit Answer</button>
            </div>
        </React.Fragment>
    )
}

interface QuizProps { }

export default Quiz 