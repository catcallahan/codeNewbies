import * as React from 'react';
import { useEffect, useState } from "react";

const AnswerBox: React.FC<AnswerBoxProps> = (props) => {
    const [answers, setAnswers] = useState([]);


    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/quizanswers/${props.cardId}`);
            let answers = await res.json();
            setAnswers(answers);
        })();
    }, []);

    return (
        <div className="row answer-box border border-white shadow-sm"
            style={{
                textAlign: "center",
                paddingTop: "20px",
                paddingRight: "10px",
                borderRadius: "2%",
                backgroundColor: "#8a3d40",
            }}>
            <div className="col-md-auto">
                <div className="input-group">
                    <div className="input-group-prepend">
                        {answers && (

                            answers.map(answer => {
                                return (
                                    <div className="input-group-text">
                                        <input type="radio" />
                                        <p>{answer.answerText}</p>
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface AnswerBoxProps {
    cardId: number
};

export default AnswerBox;