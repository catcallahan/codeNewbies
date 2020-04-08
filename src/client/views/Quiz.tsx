import * as React from "react";

const Quiz: React.FC<QuizProps> = () => {
    return(
        <div>
            <h1> Quiz Page(TEST with flash card. ) </h1>
            <div
            className="flash-card border border-dark shadow-sm"
            style={{
                height: '100px',
                textAlign: 'center',
                marginTop: '30px',
                paddingTop: '38px',
                paddingBottom: '38px'
            }}>
                <p style={{ margin: '0' }}>
                    Pretend this is a flash card
                    {/* This is where the content will go. The line above is a placeholder */}
                </p>
        </div>
        </div>
    )
    
    }
    
    
    
    
        interface QuizProps{}
        export default Quiz 