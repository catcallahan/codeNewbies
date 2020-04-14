import * as React from "react";
import NavBar2 from "./Components/nav2";

const About: React.FC<AboutProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />

            <div className="bg-darkBlue rounded text-center container-fluid mt-4">
                <div className="row d-flex flex-column">
                    {/* this will be generated form DB */}
                    <h1 className='justify-content-center mt-2' style={{ fontSize: '60px', color: '#FFFFFF' }}>About Us</h1>
                </div>
            </div>
            <div className = 'topbar bg-darkBlue mt-3' style ={{height: '20px', width: 'auto'}}></div>
           
            <div  className="d-flex justify-content-center">
           <span  className="col-sm-10 border border-white mt-4 pl-4 pr-4 mb-4 pt-4 pb-4 ">
                  
                {/* Paragraph 1 */}
               <div>
                 <h1 className="text-white">
                     
                     What is our mission?
                     
                </h1>
                <h2>

                    We want you to feel confident talking the talk so that potential employers know you can walk the walk.
                
                </h2>
                <h2>

                    Our mission is to teach and equip new web developers to confidently enter the work force. 
                    CodeNewbies focuses on the specific industry vocabulary needed to communicate at a competent level in an interview or professional setting.
               
                </h2>
               </div>
            </span>
            </div>
               {/* Paragraph 2 & 3 */}
                <div className="d-flex justify-content-between row ">
               <span className="">
                <h2>
               <h1 className="text-white ">What's the problem?</h1>
                       The idea for codeNewbies began after we discovered that many new developers (ourselves included!) find that they do not feel confident 
                       articulating what they are being taught and even what they already know. For many, learning to develop is very challenging and requires 
                       you to digest a myriad of complex processes and programs in a short time. Because web development requires comprehending such a large 
                       quantity of subjects, things as simple as terminology can be overlooked. This tends to create a fear of what development terminologies might 
                       be thrown at you in an interview by a potential employer. 
                 
                 </h2>
                 <span/>

                <span className="">
                <h2>
                <h1 className="text-white">Where are we headed?</h1>
                    We aim to provide an increasingly comprehensive curriculum and environment in which fledgling developers can build their web dev fluency 
                    and impress any employer with their confidence.
               
                    From our experience, the web dev community is a close knit group that loves to be involved in one another’s journey towards success.
                    Moving forward we intend to make community involvement a crucial part of our program, giving experienced Devs the opportunity to share 
                    their personal experiences and wisdom to the next generation of developers.
               
                </h2>
                </span>
               </span>
            </div>
        </React.Fragment>
    )

}




interface AboutProps { }
export default About 