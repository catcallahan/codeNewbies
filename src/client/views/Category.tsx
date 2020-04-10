import * as React from "react";
import NavBar4 from "./Components/nav4";

const Category: React.FC<CategoryProps> = () => {
  return (
    <React.Fragment>
      <NavBar4 />
      <section className="container-fluid ">
        <div className="d-flex justify-content-center">
          <h1
            className="ml-4 mt-2 mb-3 col-sm-4 "
            style={{ fontSize: "50px", color: "#FFFFFF" }}
          > Choose a Category
          </h1>
          <div
            className="topbar bg-darkBlue"
            style={{ height: "11px", width: "auto" }}
          ></div>
        </div>
      </section>
      <section className="pricing py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor  ">
                  <h5 className="card-title text-uppercase text-center text-white">
                    Back End
                  </h5>
                        <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Study Back End</li> 
                  </ul>
                  <a
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase">
                    GO
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor">
                  <h5 className="card-title text-white text-uppercase text-center">
                    Front End
                  </h5>
                        <ul className="fa-ul">
                     <li><span className="fa-li"><i className="fas fa-check"></i></span>Study Front End</li> 
                  </ul>
                  <a
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase">
                    GO
                  </a>
                </div>
              </div>
            </div><div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor">
                  <h5 className="card-title text-white text-uppercase text-center">
                    Data Base
                  </h5>
                        <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Study Data Bases</li> 
                  </ul>
                  <a
                    href="#"
                    className="btn btn-block btn-darkBlue text-uppercase">
                    GO
                  </a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
        
      </section>
    </React.Fragment>
  );
};

interface CategoryProps {}

export default Category;
