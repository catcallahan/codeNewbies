import * as React from 'react';

const FlashCard: React.FC<FlashCardProps> = () => {
    return (
        <div
            className="col-8 flash-card border border-dark shadow-sm"
            style={{
                textAlign: "center",
                borderRadius: "1%",
                paddingTop: "162px",
                paddingBottom: "162px"
            }}>
                <h2 style={{ margin: "0" }}>
                    Pretend this is a flash card
                    {/* This is where the content will go. The line above is a placeholder */}
                    {/* This needs a way to draw in from the database terms and definitions */}
                </h2>
        </div>
    )
};

interface FlashCardProps { };

export default FlashCard;