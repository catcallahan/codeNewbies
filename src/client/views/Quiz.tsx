import * as React from "react";
import NavBar2 from "./Components/nav2";
import QuizCard from "./Components/QuizCard";
import AnswerBox from "./Components/AnswerBox";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

let indexCounter = 0;
const Quiz: React.FC<IQuizProps> = (props) => {
    // const { category } = useParams()
    const [quizCards, setQuizCards] = useState<IQuiz[]>();
    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/QuizALLb`);
            let quizCards = await res.json();
            setQuizCards(quizCards);
        })();
    }, []);

    return (
        <React.Fragment>
            <NavBar2 />
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}>
                        <IoIosArrowBack />
                    </div>
                </IconContext.Provider>
                {/* <QuizCard /> */}
                {quizCards && (
                    <QuizCard quizCard={quizCards[0]} />
                )}
                <IconContext.Provider value={{ size: "4em", color: "white" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around" }}>
                {quizCards && (
                    <AnswerBox cardId={quizCards[0].cardId} />
                )}
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                <button className="btn btn-lg btn-brightRoseColor border border-white">Submit Answer</button>
            </div>
        </React.Fragment>
    )
}

interface IQuiz {
    cardId: number,
    skillLevel: string,
    categoryLevel: string,
    cardText: string,
    answerText: string,
    correctAnswer: number
}

interface IQuizProps {
    // quizCards: {
    //     skillLevel: string,
    //     categoryLevel: string,
    //     cardText: string,
    //     answerText: string,
    //     correctAnswer: number
    // }
}

export default Quiz 