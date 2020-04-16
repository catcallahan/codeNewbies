import * as React from "react";
import NavBar4 from "./Components/nav4";
import { Link } from "react-router-dom";

//THIS NAV IS FOR THE CATEGORY PAGE :)


const Category: React.FC<CategoryProps> = () => {

  let frontEnd = '{ frontEnd }';
  let backEnd = '{ backEnd }';
  let dataBase = '{ dataBase }';
  let allTerms = '{allTerms}'

  return (
    <React.Fragment>
      <NavBar4 />
      <div className="container-fluid ">
        <div className="d-flex justify-content-center mt-3">
          <h1
            className="col-md-6 ml-4 mt-2 mb-3 col-sm-4 text-center"
            style={{ fontSize: "40px", color: "#FFFFFF" }}
          >Choose a Category to Study
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
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/study/begginerBE'>
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
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/study/begginerFE'>
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
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/study/begginerDB'>
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
                    className="btn btn-block btn-darkBlue text-uppercase" to ='/study/cards'>
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

export default Category;
