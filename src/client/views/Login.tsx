import * as React from "react";
import NavBar2 from "./Components/nav2";

const Login: React.FC<LoginProps> = () => {
    return (
        <React.Fragment>
            <NavBar2 />
            {/* SIGN IN */}
            <div className='row'>
                <span className='shadow-lg col-sm-6'>
                    <span className="d-flex justify-content-center">
                        <h1 className='text-darkBlue' >signIn</h1>
                    </span>

                    <span className="d-flex justify-content-center">
                        <form className="col-sm-4 form-group">
                            <div className="form-group">
                                <label className="text-darkBlue" htmlFor="inputUserName">userName</label>
                                <input type="user" className="shadow-lg col-xs-2 form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-darkBlue" htmlFor="inputPassword">password</label>
                                <input type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="shadow-lg btn btn-darkRoseColor">Submit</button>
                            </div>
                        </form>
                    </span>
                </span>
            {/* SIGNUP */}
                <span className='shadow-lg col-sm-6'>
                    <span className="d-flex justify-content-center">
                        <h1 className='text-darkBlue' >signUp</h1>
                    </span>

                    <span className="d-flex justify-content-center">
                        <form className="col-sm-4 form-group">
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputName">fullName</label>
                                <input type="name" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputEmail">email</label>
                                <input type="email" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputUserName">userName</label>
                                <input type="user" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputPassword">password</label>
                                <input type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputPassword">confirmPassword</label>
                                <input type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="shadow-lg btn btn-brightRoseColor">Submit</button>
                            </div>
                        </form>
                    </span>
                </span>
            </div>



        </React.Fragment>

    )

}

interface LoginProps { }
export default Login


