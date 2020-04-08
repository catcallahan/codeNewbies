import * as React from "react";
import NavBar3 from "./Components/nav3";
import FlashCard from "./Components/FlashCard";
import ResourceBox from "./Components/ResourceBox";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';

const Study: React.FC<StudyProps> = () => {
    return (
        <React.Fragment>
            <NavBar3 />
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "row", height: "400px" }}>
                <IconContext.Provider value={{ size: "4em" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-end", padding: "0", alignItems: "center" }}>
                        <IoIosArrowBack />
                    </div>
                </IconContext.Provider>
                <FlashCard />
                <IconContext.Provider value={{ size: "4em" }}>
                    <div className="col-2" style={{ display: "flex", justifyContent: "flex-start", padding: "0", alignItems: "center" }}>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
            </div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-around" }}>
                <ResourceBox />
            </div>
        </React.Fragment>
    )
}

interface StudyProps { }

export default Study