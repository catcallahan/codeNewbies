import * as React from "react";
import NavBar2 from "./Components/nav2";
import QuizCard from "./Components/QuizCard";
import AnswerBox from "./Components/AnswerBox";
import { useHistory, useParams, Link } from "react-router-dom";
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
    const [answerSelection, setAnswerSelection] = useState(null);
    const [quizComplete, setQuizComplete] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/${category}`);
            let quizCards = await res.json();
            setQuizCards(quizCards);
        })();
    }, [category]);


    const onClickHandler = () => {
        if (counter == (quizCards.length - 1)) {
            reviewAnswer.push({
                quizcardTitle: quizCards[counter].cardTitle,
                answerChoice: answerSelection,
                answerCategory: quizCards[counter].categoryLevel,
                answerSkillLevel: quizCards[counter].skillLevel
            });
            setCounter(quizCards.length - 1);
            setQuizComplete(true)
        }
        if (counter < (quizCards.length - 1)) {
            setCounter(counter + 1);
            reviewAnswer.push({
                quizcardTitle: quizCards[counter].cardTitle,
                answerChoice: answerSelection,
                answerCategory: quizCards[counter].categoryLevel,
                answerSkillLevel: quizCards[counter].skillLevel
            });
            console.log(reviewAnswer)
        }
    }
if(quizComplete === false){

    return (
        <React.Fragment>
            <NavBar2 />
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}></div>
                {quizCards && (
                    <QuizCard quizCard={quizCards[counter]} />
                )}
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}></div>
            </div>
            <h5 className="d-flex justify-content-center mt-2 mb-0 text-white">Please select the definition to the above term and click submit.</h5>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-around" }}>
                {quizCards && (
                    <AnswerBox cardId={quizCards[counter].cardId} setAnswerSelection = {setAnswerSelection} />
                )}
            </div>
            <div className='mb-5' style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                <button className="btn btn-lg btn-brightRoseColor border border-white" onClick={onClickHandler}>Submit Answer</button>
            </div>
        </React.Fragment>
    )
} else if (quizComplete){
    return(
        <React.Fragment>
            <NavBar2 />
            <div className=" d-flex container justify-content-center align-items-center mt-5">
                <div className="row mt-5">
                    <div className="d-flex flex-column my-5 justify-content-center align-items-center">
                        <h1 className = 'text-white'>All done! Would you like to review your answers?</h1>
                        <div className = 'mt-4'>
                            <Link className="btn bg-darkBlue text-white border border-white shadow-sm mr-2" to='/review'>Review Answers</Link>
                            <Link className="btn bg-darkBlue text-white border border-white shadow-sm" to='/categoryQuiz' onClick = {() => (reviewAnswer = [])}>Take Another Quiz</Link>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
}

// interface IQuiz {
//     cardId: number,
//     categoryLevel: string,
//     cardTitle: string,
//     cardText: string,
//     answerText: string,
//     correctAnswer: number
// }

export let reviewAnswer: Answers[] = []

interface Answers {
    quizcardTitle: string,
    answerChoice: string
    answerCategory: string,
    answerSkillLevel: string
}

interface IQuizProps {


}

export default Quiz 