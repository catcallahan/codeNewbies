import * as React from "react";
import  NavBar2 from "./Components/nav2";
import { Link } from "react-router-dom";
let userName = ' {username} '

const User: React.FC<UserProps> = () => {
    let username = '{ username }'
    return (
        <React.Fragment>
            <NavBar2 />
            
      <div>
      <div className="bg-darkBlue m-2 rounded text-center container-fluid mt-4">
          <div className="row d-flex flex-column">
            {/* this will be generated form DB */}
            <h1 className = 'justify-content-center mt-2' style = {{fontSize : '60px', color: '#FFFFFF'}}>{username}</h1>
            <h2 className = 'justify-content-center' style = {{fontSize : '25px', color: '#97AABD'}}>Difficulty: Beginner</h2>
          </div>
      </div>
            <div className = 'topbar bg-darkBlue mt-3' style ={{height: '20px', width: 'auto'}}></div>
            <div className = "d-flex flex-row justify-content-center my-3 pt-2">
            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '300px', width: '300px', borderRadius: '90%', cursor: 'pointer'}} to='/study'>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>study</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Cards</div>
            </Link>
            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-sm" style = {{height: '300px', width: '300px', borderRadius: '50%', cursor: 'pointer'}} to='/review'>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>review</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Missed</div>
            </Link>
            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style = {{height: '300px', width: '300px', borderRadius: '100%', cursor: 'pointer'}} to='/quiz'>
                <div className="topWord" style = {{fontSize: '36px', color: '#FFFFFF'}}>quiz</div>
                <div className="bottomWord p-0 m-0" style = {{fontSize: '40px', color: '#c96567'}}>Me</div>
            </Link>
            
            </div>
        
            </div>
           
  
 

        
       
        </React.Fragment>
    )

    }




        interface UserProps{}
        export default User