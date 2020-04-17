import * as React from "react";
import NavBar2 from "./Components/nav2";
import QuizCard from "./Components/QuizCard";
import AnswerBox from "./Components/AnswerBox";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { ICard } from '../Utils/types'

let indexCounter = 0;
const Quiz: React.FC<IQuizProps> = (props) => {
    const { category } = useParams()
    const [quizCards, setQuizCards] = useState<ICard[]>(null);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/begginerBE`);
            let quizCards = await res.json();
            setQuizCards(quizCards);
        })();
    }, [category]);


    const onClickHandler = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <React.Fragment>
            <NavBar2 />
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}>
                        {/* <IoIosArrowBack /> */}
                    </div>
                </IconContext.Provider>
                {quizCards && (
                    <QuizCard quizCard={quizCards[counter]} />
                )}
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}>
                        {/* <IoIosArrowForward /> */}
                    </div>
                </IconContext.Provider>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around" }}>
                {quizCards && (
                    <AnswerBox cardId={quizCards[counter].cardId} />
                )}
            </div>
            <div className = 'mb-5'style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                <button className="btn btn-lg btn-brightRoseColor border border-white" onClick = {onClickHandler}>Submit Answer</button>
            </div>
        </React.Fragment>
    )
}

// interface IQuiz {
//     cardId: number,
//     categoryLevel: string,
//     cardTitle: string,
//     cardText: string,
//     answerText: string,
//     correctAnswer: number
// }

interface IQuizProps {


}

export default Quiz 