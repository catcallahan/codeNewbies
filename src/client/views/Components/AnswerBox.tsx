import * as React from 'react';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AnswerBox: React.FC<AnswerBoxProps> = (props) => {
    const [answers, setAnswers] = useState([]);

    // let uniqueKey = uuidv4();

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/quizanswers/${props.cardId}`);
            let answers = await res.json();
            setAnswers(answers);
        })();
    }, [props.cardId]);

    //need to create a unique key to assign with the answer options

    return (
        <div className="row answer-box border border-white shadow-sm"
            style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingRight: "10px",
                borderRadius: "2%",
                backgroundColor: "#8a3d40",
            }}>
                <div className="col-md-auto mb-2">
                        {answers && (
                            answers.map(answer => {
                                return (
                                    <div className="input-group-text form-control bg-burgandyColor text-white mb-2">
                                        <input type="radio" name="answer" />
                                        <a className="pl-1" >{answer.answerText}</a>
                                    </div>
                                )
                            })
                        )}
            </div>
        </div>
    )
}

interface AnswerBoxProps {
    cardId: number
};

export default AnswerBox;

