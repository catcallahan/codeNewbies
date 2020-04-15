import * as React from 'react';
import { ICard } from '../../Utils/types';
import { IoMdCard } from 'react-icons/io';

class QuizCard extends React.Component<IQuizCardProps, IQuizCardState> {
    render() {
        return (
            <div
                className="col-8 flash-card border border-white shadow-sm"
                style={{
                    textAlign: "center",
                    borderRadius: "2%",
                    paddingTop: "162px",
                    paddingBottom: "162px",
                    backgroundColor: "#f9e5e4"
                }}>
                <h1 style={{ margin: "0" }}>
                    <p style={{ color: "9F5A63" }}>This</p>
                    {/* This is where the content will go. The line above is a placeholder */}
                    {/* This needs a way to draw in from the database terms and definitions */}
                </h1>
            </div>
        )
    }
}

interface IQuizCardProps {
    // card: {
    //     categoryLevel: string,
    //     skillLevel: string,
    //     cardTitle: string,
    //     cardText: string
    // }
};

interface IQuizCardState {

}

export default QuizCard;