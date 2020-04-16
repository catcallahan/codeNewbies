import * as React from 'react';
import { ICard } from '../../Utils/types';
import { IoMdCard } from 'react-icons/io';

class FlashCard extends React.Component<IFlashCardProps, IFlashCardState > {
    state = { 
        clicked: false,
        
     };

    render() {

        if (this.state.clicked) {
            return (
                <div
                    onClick={() => { this.setState({ clicked: false }) }}
                    className="col-8 flash-card border border-white shadow-sm"
                    style={{
                        textAlign: "center",
                        borderRadius: "2%",
                        paddingTop: "100px",
                        paddingBottom: "162px",
                        backgroundColor: "#f9e5e4"
                    }}>
                    <h3>Definition:</h3>
                    <h1 className ='cardText'style={{ color: "314455" }}>{
                    this.props.card.cardText.split('\n').map(function(item, key) {
                        console.log(item);
                        return (
                          <span key={key}>
                            {item}
                            <br/>
                          </span>
                        )
                      })}</h1>
                        {/* This is where the content will go. The line above is a placeholder */}
                        {/* This needs a way to draw in from the database terms and definitions */}
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
                        paddingTop: "120px",
                        paddingBottom: "162px",
                        backgroundColor: "#f9e5e4"
                    }}>
                    <h3>Term:</h3>
                    <h1 className ='cardTitle' style={{ color: "9F5A63"}}>{this.props.card.cardTitle}</h1>
                        {/* This is where the content will go. The line above is a placeholder */}
                        {/* This needs a way to draw in from the database terms and definitions */}
                </div>
            )
        }
    }
};

interface IFlashCardProps {
  card: {
    categoryLevel: string,
    skillLevel: string,
    cardTitle: string,
    cardText: string
  }
 };

 interface IFlashCardState {

 }

export default FlashCard;