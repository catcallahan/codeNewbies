import * as React from 'react';

const FlashCard: React.FC<FlashCardProps> = () => {
    return (
        <div
            className="flash-card border border-dark shadow-sm"
            style={{
                height: '100px',
                textAlign: 'center',
                marginTop: '30px',
                paddingTop: '38px',
                paddingBottom: '38px',
                borderRadius: '5%'
            }}>
                <p style={{ margin: '0' }}>
                    Pretend this is a flash card
                    {/* This is where the content will go. The line above is a placeholder */}
                </p>
        </div>
    )
};

interface FlashCardProps { };

export default FlashCard;