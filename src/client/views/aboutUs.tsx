import * as React from "react";
import NavBar4 from "./Components/nav4";

const About: React.FC<AboutProps> = () => {
    return (
        <React.Fragment>
            <NavBar4 />

            <span className="d-flex justify-content-start pl-4">
                <h1 className='text-white display-2'>aboutUs</h1>
            </span>
            <div
                className="topbar bg-darkBlue"
                style={{ height: "11px", width: "auto" }}
            ></div>


{/* <span class="border"></span>
<span class="border-top"></span>
<span class="border-right"></span>
<span class="border-bottom"></span>
<span class="border-left"></span> */}
            <div  className="d-flex justify-content-center">
           <span  className="col-sm-8 border mt-4 pl-4 pr-4 mb-4 pt-4 pb-4 border-white">
               
               <h1 className="text-white">What's the problem?</h1>
                <h2 className="tab">

                       The idea for codeNewbies began after we discovered that many new developers (ourselves included!) find that they do not feel confident articulating what they are being taught and even what they already know. For many, learning to develop is very challenging and requires you to digest a myriad of complex processes and programs in a short time. Because web development requires comprehending such a large quantity of subjects, things as simple as terminology can be overlooked. This tends to create a fear of what development terminologies might be thrown at you in an interview by a potential employer. 
                 
                 </h2>
                 <h1 className="text-white">
                     
                     Why?
                     
                     </h1>
           
                <h2>

                    We want you to feel confident talking the talk so that potential employers know you can walk the walk.
                
                </h2>
           
                <h2>

                    This is why CodeNewbies is dedicated to teaching and equipping new web developers to confidently enter the work force. Our program focuses on the specific industry vocabulary needed to communicate at a competent level in an interview or professional setting.
               
                </h2>
                <h1 className="text-white">Where are we headed?</h1>
                <h2>

                    We aim to provide an increasingly comprehensive curriculum and environment in which fledgling developers can build their web dev fluency and impress any employer with their confidence.
                </h2>
                <h2>
                    From our experience, the web dev community is a close knit group that loves to be involved in one another’s journey towards success. Moving forward we intend to make community involvement a crucial part of our program, giving experienced Devs the opportunity to share their personal experiences and wisdom to the next generation of developers.
               
                </h2>
            </span>
            </div>
        </React.Fragment>
    )

}




interface AboutProps { }
export default About 