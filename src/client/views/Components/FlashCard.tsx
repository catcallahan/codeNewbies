import * as React from 'react';

class FlashCard extends React.Component {
    state = { clicked: false };

    render() {

        if (this.state.clicked) {
            return (
                <div
                    onClick={() => { this.setState({ clicked: false }) }}
                    className="col-8 flash-card border border-white shadow-sm"
                    style={{
                        textAlign: "center",
                        borderRadius: "2%",
                        paddingTop: "162px",
                        paddingBottom: "162px",
                        backgroundColor: "#f9e5e4"
                    }}>
                    <h1 style={{ margin: "0" }}>
                        <p style={{ color: "9F5A63" }}>Definition</p>
                        {/* This is where the content will go. The line above is a placeholder */}
                        {/* This needs a way to draw in from the database terms and definitions */}
                    </h1>
                </div>
            )
        } else {
            return (
                <div
                    onClick={() => { this.setState({ clicked: true }) }}
                    className="col-8 flash-card border border-white shadow-sm"
                    style={{
                        textAlign: "center",
                        borderRadius: "2%",
                        paddingTop: "162px",
                        paddingBottom: "162px",
                        backgroundColor: "#f9e5e4"
                    }}>
                    <h1 style={{ margin: "0" }}>
                        <p style={{ color: "9F5A63" }}>Vocab</p>
                        {/* This is where the content will go. The line above is a placeholder */}
                        {/* This needs a way to draw in from the database terms and definitions */}
                    </h1>
                </div>
            )
        }
    }
};

interface FlashCardProps { };

export default FlashCard;