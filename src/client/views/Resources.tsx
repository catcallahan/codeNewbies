import * as React from "react";
import NavBar2 from "./Components/nav2";

const Resources: React.FC<ResourceProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />
            <span className="d-flex justify-content-center">
                    <h1 className='text-darkBlue' >Resources</h1>
                </span>
            <span className="d-flex align-items-start flex-column ml-3 shadow">
                <div className="d-flex flex-column bd-highlight ml-4 mb-3">
                    <h2 className="p-2 text-darkblue">Resources Name</h2>
                    <h4>
                        <a href="#" className="shadow-sm text-greyColor">example link</a>
                    </h4>
                </div>
                <div className="d-flex flex-column bd-highlight ml-4 mb-3">
                    <h2 className="p-2 text-darkblue">Resources Name</h2>
                    <h4>
                        <a href="#" className="shadow-sm text-greyColor">example link</a>
                    </h4>
                </div>
                <div className="d-flex flex-column bd-highlight ml-4 mb-3">
                    <h2 className="p-2 text-darkblue">Resources Name</h2>
                    <h4>
                        <a href="#" className="shadow-sm text-greyColor">example link</a>
                    </h4>
                </div>
                <div className="d-flex flex-column bd-highlight ml-4 mb-3">
                    <h2 className="p-2 text-darkblue">Resources Name</h2>
                    <h4>
                        <a href="#" className="shadow-sm text-greyColor">example link</a>
                    </h4>
                </div>
                <div className="d-flex flex-column bd-highlight ml-4 mb-3">
                    <h2 className="p-2 text-darkblue">Resources Name</h2>
                    <h4>
                        <a href="#" className="shadow-sm text-greyColor">example link</a>
                    </h4>
                </div> 
            </span>
        </React.Fragment>
    )

}




interface ResourceProps { }
export default Resources