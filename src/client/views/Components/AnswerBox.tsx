import * as React from 'react';

const AnswerBox: React.FC<AnswerBoxProps> = () => {
    return (
        <div className= "row answer-box border border-white shadow-sm"
        style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingRight: "10px",
            borderRadius: "2%",
            backgroundColor: "#8a3d40",
        }}>
            <div className="col-md-auto">
                <ol type="A">
                    <li style={{ color: "white" }}>
                        Answer A
                    </li>
                    <li style={{ color: "white" }}>
                        Answer B
                    </li>
                </ol>
            </div>
            <div className="col-md-auto">
                <ol type="A" start={3}>
                    <li style={{ color: "white" }}>
                        Answer C
                    </li>
                    <li style={{ color: "white" }}>
                        Answer D
                    </li>
                </ol>
            </div>
        </div>
    )
}

interface AnswerBoxProps { };

export default AnswerBox;