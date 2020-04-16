import React, { useState, useEffect } from "react";
import NavBar2 from "./Components/nav2";
import { Link } from "react-router-dom";



const User: React.FC<UserProps> = (props) => {
    const [user, setUser] = useState<IUser[]>([])
  

    useEffect(() => {
        ( async () => {
          let res = await fetch('/api/users/1')
            let user = await res.json()
            setUser(user)
            })();
        }, []);
  
console.log(user)

    return (
        <React.Fragment>
            <NavBar2 />

            <div>
                <div className="bg-darkBlue rounded text-center container-fluid mt-4">
                      
                    <div className="row d-flex flex-column">
                        {/* this will be generated from DB */}
                        <h1 className='justify-content-center mt-2' style={{ fontSize: '60px', color: '#FFFFFF' }}>blah</h1>
                        <h2 className='justify-content-center' style={{ fontSize: '25px', color: '#97AABD' }}>Difficulty:lol</h2>
                    </div>
                    
                </div>
                <div className='topbar bg-darkBlue mt-3' style={{ height: '20px', width: 'auto' }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="d-flex flex-row my-3 pt-2" id='userCircles'>
                            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style={{ height: '300px', width: '300px', borderRadius: '90%', cursor: 'pointer' }} to='/study'>
                                <div className="topWord" style={{ fontSize: '36px', color: '#FFFFFF' }}>study</div>
                                <div className="bottomWord p-0 m-0" style={{ fontSize: '40px', color: '#c96567' }}>Cards</div>
                            </Link>
                            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-sm" style={{ height: '300px', width: '300px', borderRadius: '50%', cursor: 'pointer' }} to='/review'>
                                <div className="topWord" style={{ fontSize: '36px', color: '#FFFFFF' }}>review</div>
                                <div className="bottomWord p-0 m-0" style={{ fontSize: '40px', color: '#c96567' }}>Missed</div>
                            </Link>
                            <Link className=" d-flex flex-column m-3 oval bg-darkBlue justify-content-center align-items-center shadow-lg" style={{ height: '300px', width: '300px', borderRadius: '100%', cursor: 'pointer' }} to='/quiz'>
                                <div className="topWord" style={{ fontSize: '36px', color: '#FFFFFF' }}>quiz</div>
                                <div className="bottomWord p-0 m-0" style={{ fontSize: '40px', color: '#c96567' }}>Me</div>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>






        </React.Fragment>
    )

}


interface IUser {
    userId: number,
    fullName: string,
    email: string,
    userName: string,
    password: string,
    skillLevel: string
//    "fullName": "Maddie Conaway",
//    "email": "mc@ib.com",
//    "userName": "maddie",
//    "password": "robots1!",
//    "skillLevel": "Beginner"


}
interface UserProps {
  
}


export default User