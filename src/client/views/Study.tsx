import * as React from "react";
import NavBar3 from "./Components/nav3";
import FlashCard from "./Components/FlashCard";
import ResourceBox from "./Components/ResourceBox";

const Study: React.FC<StudyProps> = () => {
    return (
        <React.Fragment>

            <NavBar3 />
            <div 
            style={{
                // marginTop: "30px",
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "around",
                // height: "300px"
            }}>
                <div className="arrow arrow-left col-3" style={{ backgroundColor: "blue" }}></div>
                <FlashCard />
                <div className="arrow arrow-right col-3" style={{ backgroundColor: "blue" }}></div>
            </div>
                <ResourceBox />

        </React.Fragment>
    )
}

interface StudyProps { }

export default Study