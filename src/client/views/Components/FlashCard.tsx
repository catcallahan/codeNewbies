import * as React from 'react';

const FlashCard: React.FC<FlashCardProps> = () => {
    return (
        <div
            className="col-6 flash-card border border-dark shadow-sm"
            style={{
                // width: "500px",
                // textAlign: "center",
                // borderRadius: "1%",
                // paddingTop: "100px",
                // paddingBottom: "100px"
            }}>
                <h3 style={{ margin: "0" }}>
                    Pretend this is a flash card
                    {/* This is where the content will go. The line above is a placeholder */}
                    {/* This needs a way to draw in from the database terms and definitions */}
                </h3>
        </div>
    )
};

interface FlashCardProps { };

export default FlashCard;