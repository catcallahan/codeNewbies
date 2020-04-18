import * as React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import NavBar2 from "./Components/nav2";
import { reviewAnswer } from "./Quiz";
import { Link } from "react-router-dom";

const Review: React.FC = () => {
    console.log(reviewAnswer)
  if (reviewAnswer.length === 0) {
    return(
        <React.Fragment>
            <NavBar2 />
            <div className="container-fluid">
            <div className="row">
                <h1
                className="ml-4 mt-2 mb-3 col-sm-4"
                style={{ fontSize: "75px", color: "#FFFFFF" }}
                id="reviewHeader"
                >
                reviewCards
                </h1>
            </div>
            </div>
            <div
            className="topbar bg-darkBlue"
            style={{ height: "11px", width: "auto" }}
            ></div>
            <div className="text-center mt-3">
                <h1 className ='text-white mt-4'>Please Take a Quiz to Review Your answers:</h1>
                <Link className = 'btn btn-lg btn-darkBlue' to="/categoryquiz">quizMe</Link>
            </div>
        </React.Fragment>
    
    )
  } else {
    return (
      <React.Fragment>
        <NavBar2 />

        <div className="container-fluid">
          <div className="row">
            <h1
              className="ml-4 mt-2 mb-3 col-sm-4"
              style={{ fontSize: "75px", color: "#FFFFFF" }}
              id="reviewHeader"
            >
              reviewCards
            </h1>
          </div>
        </div>
        <div
          className="topbar bg-darkBlue"
          style={{ height: "11px", width: "auto" }}
        ></div>
        <div
          className="d-flex justify-content-end container-fluid"
          id="FEcategoryContainer"
        >
          <div className="row">
            <h2
              className="mr-5 mt-4 mb-3 col-sm-4"
              style={{ fontSize: "64px", color: "#FFFFFF" }}
            >
              quizAnswers:
            </h2>
          </div>
        </div>
        {reviewAnswer.map((options, id) => {
          return (
            <div className="container-fluid" key ={id}>
              <div className="d-flex flex-row justify-content-end row">
                <div
                  className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                >
                    {options.answerChoice === "0" ? (
                  <IconContext.Provider value={{ color: "#c96567", size: "4em"}}>
                      <div>
                        <FaTimes />
                      </div>
                  </IconContext.Provider>
                    ) : (
                    <IconContext.Provider value={{ color: "white", size: "3em"  }}>
                        <div>
                            <FaCheck />
                        </div>
                    </IconContext.Provider>
                    )}
                </div>
                <div
                  className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue"
                  style={{ height: "150px", width: "900px" }}
                >
                  <h1 className="mt-2 ml-3" style={{ color: "white" }}>
                    {options.quizcardTitle}
                  </h1>
                  <p
                    className="ml-3"
                    style={{ color: "#97AABD", fontSize: "24px" }}
                  >
                    {options.answerCategory}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div
            className="bottombar bg-darkBlue mt-5 mb-2"
            style={{ height: "11px", width: "auto" }}
            ></div>
      </React.Fragment>
    );
  }
};

interface Answer {
  cardId: number;
  answerOption: number;
}

export default Review;
