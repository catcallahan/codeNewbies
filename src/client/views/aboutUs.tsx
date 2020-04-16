import * as React from "react";
import NavBar2 from "./Components/nav2";

const About: React.FC<AboutProps> = () => {

    //feedback submit button
    function addComment() {
        alert("Thank you for your feedback!");
        (document.getElementById("comment") as HTMLTextAreaElement).value = "";
    }

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
           <span  className="col-sm-10 shadow-lg mt-4 pl-4 pr-4 mb-4 pt-4 pb-4 " style={{backgroundColor: 'F9E5E4'}}>
                  
                {/* Paragraph 1 */}
               <div className="text-center ">
                 <h1 className="text-darkBlue">
                     
                     What is our mission?
                     
                </h1>
                <h2 className="text-brightRoseColor">

                    We want you to feel confident talking the talk so that potential employers know you can walk the walk.
                
                </h2>
                <h2 className="text-darkBlue">

                    Our mission is to teach and equip new web developers to confidently enter the work force. 
                    CodeNewbies focuses on the specific industry vocabulary needed to communicate at a competent level in an interview or professional setting.
               
                </h2>
               </div>
            </span>
            </div>
               {/* Paragraph 2 & 3 */}
        
               <div className="justify-content-center d-flex">
                   <div className='row mt-4 justify-content-center'>
                
                        <div className="col-sm-4 d-flex mr-4 pl-4 flex-column ">
                            <h1 className="text-white">What's the problem?</h1>
                                <h4 className="text-darkBlue text-justify">
                                    The idea for codeNewbies began after we discovered that many new developers (ourselves included!) find that they do not feel confident 
                                    articulating what they are being taught and even what they already know. For many, learning to develop is very challenging and requires 
                                    you to digest a myriad of complex processes and programs in a short time. Because web development requires comprehending such a large 
                                    quantity of subjects, things as simple as terminology can be overlooked. This tends to create a fear of what development terminologies might 
                                    be thrown at you in an interview by a potential employer. 
                                
                                </h4>
                        </div>
                    
                  

                        <div className="col-4 d-flex flex-column">
                            <h1 className="text-white">Where are we headed?</h1>
                            <p className="text-darkBlue text-justify">
                                We aim to provide an increasingly comprehensive curriculum and environment in which fledgling developers can build their web dev fluency 
                                and impress any employer with their confidence.
                        
                                From our experience, the web dev community is a close knit group that loves to be involved in one another’s journey towards success.
                                Moving forward we intend to make community involvement a crucial part of our program, giving experienced Devs the opportunity to share 
                                their personal experiences and wisdom to the next generation of developers.
                        
                            </p>
                        </div>
                            

                    </div>

               </div>
               <div className="d-flex justify-content-around">
               <div className="d-flex flex-column w-75">
                    <h4 className="text-white">Leave Us A Comment</h4>
                    <textarea rows={8} id="comment" className="border" ></textarea>
                    <div className="text-right">
                        <button type="button" className="shadow-lg btn btn-darkRoseColor btn_sm mt-2 mb-2" onClick={addComment}>Submit</button>
                    </div>
                </div>               
                </div>

        </React.Fragment>
    )

}




interface AboutProps { }
export default About 