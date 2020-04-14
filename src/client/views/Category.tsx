import * as React from "react";
import NavBar3 from "./Components/nav3";

//THIS NAV IS FOR THE CATEGORY PAGE :)


const Category: React.FC<CategoryProps> = () => {

  let frontEnd = '{ frontEnd }';
  let backEnd = '{ backEnd }';
  let dataBase = '{ dataBase }';

  return (
    <React.Fragment>
      <NavBar3 />
      <section className="container-fluid ">
        <div className="d-flex justify-content-center mt-3">
          <h1
            className="ml-4 mt-2 mb-3 col-sm-4 "
            style={{ fontSize: "50px", color: "#FFFFFF" }}
          > Choose a Category
          </h1>
        </div>
      </section>
          <div
            className="topbar bg-darkBlue"
            style={{ height: "11px", width: "auto" }}
          ></div>
      <section className="pricing py-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body bg-darkRoseColor  ">
                  <h5 className="card-title text-center text-white" style={{fontSize: '36px'}}>
                    {backEnd}
                  </h5>
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
                  <h5 className="card-title text-white text-center" style={{fontSize: '36px'}}>
                    {frontEnd}
                  </h5>
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
                  <h5 className="card-title text-white text-center" style={{fontSize: '36px'}}>
                    {dataBase}
                  </h5>
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
