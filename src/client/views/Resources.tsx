import * as React from "react";
import NavBar2 from "./Components/nav2";

const Resources: React.FC<ResourceProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />
            <span className="d-flex justify-content-start pl-4">
                <h1 className='text-white display-2' id='resourcesHeader' >Resources</h1>
            </span>
            <div
            className="topbar bg-darkBlue"
            style={{ height: "11px", width: "auto" }}
          ></div>
            <div className="d-flex justify-content-around">
                <span className="d-flex justify-content-center col-sm-8 flex-column ml-3 mr-3 mb-4 pt-4 ">
                    {/* MDN Web Docs */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" className=" text-greyColor">MDN Web Docs</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Extensive written explanations and sample code.</h4>
                    </div>
                    {/* w3schools */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://www.w3schools.com/" target="_blank" className="text-greyColor">w3schools</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Learn by example while using w3’s “Try It Yourself” feature.</h4>
                    </div>
                    {/* Stack Overflow */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://stackoverflow.com/" target="_blank" className="text-greyColor">Stack OverFlow</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Community based forum for all coding questions.</h4>
                    </div>
                    {/* Khan Academy */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" className="text-greyColor">Khan Academy Programming</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Extensive video instruction, examples and implementation.</h4>
                    </div>
                    {/* jQuery */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://learn.jquery.com/" target="_blank" className="text-greyColor">jQuery</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Reference on all aspects of using jQuery.</h4>
                    </div>
                    {/* Learn-JS */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://www.learn-js.org/" target="_blank" className="text-greyColor">Learn-JS</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Interactive JavaScript tutorial</h4>
                    </div>
                    {/* React Documentation */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://reactjs.org/" target="_blank" className="text-greyColor">React Documentation</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">React's official documentation.</h4>
                    </div>
                    {/* YouTube */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA" target="_blank" className="text-greyColor">Programming with Mosh</a>
                        </h2>
                        <h2>
                            <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank" className="text-greyColor">The Net Ninja</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Two of the many free resources found on YouTube that can teach you the basics, intermediate and advanced subjects</h4>
                    </div>
                    {/* Udemy */}
                    <div className="d-flex shadow bg-white flex-column bd-highlight mt-3 mb-3 pl-3 pt-3 pb-3">
                        <h2>
                            <a href="https://www.udemy.com/" target="_blank" className="text-greyColor">Udemy</a>
                        </h2>
                        <h4 className="p-2 text-darkblue">Quality courses at a reduced price.</h4>
                    </div>
                </span>
            </div>
        </React.Fragment>
    )
}




interface ResourceProps { }
export default Resources