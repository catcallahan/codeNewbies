import * as React from "react";



function addUser() {

    fetch("/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId : null, 
                              fullName : document.getElementsByName("inputName"),
                              email : document.getElementsByName("inputEmail"),
                              userName : document.getElementsByName("inputUserName"),
                              password : document.getElementsByName("inputPassword"),
                            skillLevel: ""})
    }).then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server: "+response.status);
        }
        return response.json();
    }).then(function (data) {
        console.log(data)
        if (data == "success") {
            alert("New user posted to DB: " + document.getElementsByName("inputUserName"));
        }
    }).catch(function (err) {
        console.log(err)
    });
}

const Login: React.FC<LoginProps> = () => {
return (
    <React.Fragment>
        <NavBarHome />
        {/* SIGN IN */}
        <div className='d-flex justify-content-around row pt-5'>
            <span className='shadow-lg col-sm-4 rounded border border-white bg-brightRoseColor pt-3 '>
                <span className="d-flex justify-content-center pt-3">
                    <h1 className='text-white' >signIn</h1>
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
            <span className=' shadow-lg col-sm-4 rounded border border-white bg-brightRoseColor'>
                <span className="d-flex justify-content-center">
                    <h1 className='text-white' >signUp</h1>
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
                            <button type="button" className="shadow-lg btn btn-darkRoseColor" onClick={addUser}>Submit</button>
                        </div>
                    </form>
                </span>
            </span>
        </div>
    </React.Fragment>
)};

interface LoginProps { }
export default Login



