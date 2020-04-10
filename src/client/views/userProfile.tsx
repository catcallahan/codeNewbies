import * as React from "react";
import  NavBar2 from "./Components/nav2";
let userName = ' {username} '

const User: React.FC<UserProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />
            
      <div>
      <div className="width:100px; height:100px; bg-darkBlue m-2 rounded border-white text-center" style={{fontSize : '60px'}}>
      <h1 className = 'mainlogo justify-content-center ml-0 mt-0 mb-0' style = {{height: '245px', color: '#FFFFFF'}}>{ userName }</h1>
      </div>
            <div className = 'topbar bg-darkBlue' style ={{ fontSize : '500px', height: '20px', width: 'auto'}}></div>
            <div className = "d-flex flex-row justify-content-center my-3 pt-2">
            <div className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '300px', width: '400px', borderRadius: '90%', cursor: 'pointer'}}>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>Study</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Cards</div>
            </div>
            <div className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-sm" style = {{height: '300px', width: '400px', borderRadius: '50%', cursor: 'pointer'}}>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>Review</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Missed</div>
            </div>
            <div className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '300px', width: '400px', borderRadius: '100%', cursor: 'pointer'}}>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>Quiz</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Me</div>
            </div>
            
            </div>
        
            </div>
           
  
 

        
       
        </React.Fragment>
    )

    }




        interface UserProps{}
        export default User