import * as React from "react";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"
import { IconContext } from 'react-icons'
import NavBar5 from "./Components/nav5";

const Review: React.FC<LoginProps> = () => {
    return(
       <React.Fragment>
           <NavBar5 />
           <div className = 'container-fluid'>
               <div className="row">
               <h1 className = 'ml-4 mt-2 mb-3 col-sm-4' style = {{fontSize: '75px', color: '#FFFFFF'}} id ='reviewHeader'>reviewCards</h1>
               </div>
           </div>
               <div className = 'topbar bg-darkBlue' style ={{height: '11px', width: 'auto'}}></div>
           <div className = 'd-flex justify-content-end container-fluid' id = 'FEcategoryContainer'>
               <div className="row">
                    <h2 className = 'mr-5 mt-4 mb-3 col-sm-4' style = {{fontSize: '64px', color: '#FFFFFF'}}>frontEnd</h2>
               </div>
           </div>
           {/* //this will be where the populated cards will map through: */}
           <div className="container-fluid">
                <div className="d-flex flex-row justify-content-end row">
                        <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                            {/* will need an if statment to decide if true/flase to determine correct icon */}
                            <IconContext.Provider value = {{color: 'white', size: '3em'}}>
                                    <div>
                                        <FaCheck />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
                </div>
                <div className="d-flex flex-row justify-content-end row">
                        <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                        <IconContext.Provider value = {{color: '#C96567', size: '4em'}}>
                                    <div>
                                        <FaTimes />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
                </div>
                <div className="d-flex flex-row justify-content-end row">
                <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                            {/* will need an if statment to decide if true/flase to determine correct icon */}
                            <IconContext.Provider value = {{color: 'white', size: '3em'}}>
                                    <div>
                                        <FaCheck />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
                </div>
                </div>
           
                    <div className = 'd-flex justify-content-end container-fluid' id = 'FEcategoryContainer'>
                        <div className="row">
                            <h2 className = 'mr-5 mt-4 mb-3 col-sm-4' style = {{fontSize: '64px', color: '#FFFFFF'}}>backEnd</h2>
                        </div>
                    </div>

                {/* //this will be where the populated cards will map through: */}
                <div className="d-flex flex-row justify-content-end row">
                        <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                            {/* will need an if statment to decide if true/flase to determine correct icon */}
                            <IconContext.Provider value = {{color: 'white', size: '3em'}}>
                                    <div>
                                        <FaCheck />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
                </div>
                <div className="d-flex flex-row justify-content-end row">
                        <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                        <IconContext.Provider value = {{color: '#C96567', size: '4em'}}>
                                    <div>
                                        <FaTimes />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
                </div>
                <div className="d-flex flex-row justify-content-end mb-4 row">
                <div className="d-flex bg-burgandyColor mr-4 mt-4 justify-content-center align-items-center" style = {{borderRadius: '50%', height: '150px', width: '150px'}}>
                            {/* will need an if statment to decide if true/flase to determine correct icon */}
                            <IconContext.Provider value = {{color: 'white', size: '3em'}}>
                                    <div>
                                        <FaCheck />
                                    </div>                          
                            </IconContext.Provider>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center mt-4 mr-5 bg-darkBlue" style = {{height: '150px', width: '900px'}}>
                            <h1 className="mt-2 ml-3" style= {{color: "white"}}>Term</h1>
                            <p className="ml-3"style= {{color: "#97AABD", fontSize: '24px'}}>Brief description or category would go here</p>
                        </div>
            </div>
         

       </React.Fragment>
    )
    
    }
    
    
    
    
        interface LoginProps{}
        export default Review 