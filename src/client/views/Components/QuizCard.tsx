import * as React from 'react';


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
                {this.props.quizCard && (
                    <h1 style={{ margin: "0", color: "9F5A63" }}>
                        {this.props.quizCard.cardTitle}
                    </h1>
                )}
            </div>
        )
    }
}

interface IQuizCardProps {
    quizCard: {
        cardId: number,
        categoryLevel: string,
        skillLevel: string,
        cardTitle: string,
        cardText: string
    }
};

interface IQuizCardState {

}

export default QuizCard;