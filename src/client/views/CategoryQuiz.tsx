import * as React from "react";
import NavBar3 from "./Components/nav3";
import { Link } from "react-router-dom";

//THIS NAV IS FOR THE CATEGORY PAGE :)


const CategoryQuiz: React.FC<CategoryProps> = () => {

  let frontEnd = '{ frontEnd }';
  let backEnd = '{ backEnd }';
  let dataBase = '{ dataBase }';
  let allTerms = '{allTerms}'
  return (
    <React.Fragment>
      <NavBar3 />
      <div className="container-fluid ">
        <div className="d-flex justify-content-center mt-3">
          <h1
            className="col-md-6 text-center ml-4 mt-2 mb-3 col-sm-4 "
            style={{ fontSize: "50px", color: "#FFFFFF" }}
          > Choose a Quiz Category
          </h1>
        </div>
      </div>
          <div
            className="topbar bg-darkBlue"
            style={{ height: "11px", width: "auto" }}
          ></div>
      <div className="pricing py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor  ">
                  <h5 className="card-title text-center text-white" style={{fontSize: '36px'}}>
                    {backEnd}
                  </h5>
                  <Link
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/quiz/begginerBE'>
                    GO
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor">
                  <h5 className="card-title text-white text-center" style={{fontSize: '36px'}}>
                    {frontEnd}
                  </h5>
                  <Link
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/quiz/begginerFE'>
                    GO
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor">
                  <h5 className="card-title text-white text-center" style={{fontSize: '36px'}}>
                    {dataBase}
                  </h5>
                  <Link
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/quiz/begginerDB'>
                    GO
                  </Link>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        <div className="pricing py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor">
                  <h5 className="card-title text-white text-center" style={{fontSize: '36px'}}>
                    {allTerms}
                  </h5>
                  <Link
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/quiz/cards'>
                    GO
                  </Link>
                </div>
              </div>
            </div>
           
            

          </div>
        </div>
        </div>
          
        
      </div>
    </React.Fragment>
  );
};

interface CategoryProps {}

export default CategoryQuiz;