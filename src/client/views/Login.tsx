import * as React from "react";
import NavBarHome from "./Components/navbarHome";

const Login: React.FC<LoginProps> = () => {

    // sign in message
    function signInUser() {
        alert("Welcome " + (document.getElementById("inputSignIn") as HTMLInputElement).value) + "!";
        clearLoginFields();
    }

    // clears all login screen fields
    function clearLoginFields() {
        (document.getElementById("inputName") as HTMLInputElement).value = "";
        (document.getElementById("inputEmail") as HTMLInputElement).value = "";
        (document.getElementById("inputUserName") as HTMLInputElement).value = "";
        (document.getElementById("inputPassword") as HTMLInputElement).value = "";
        (document.getElementById("confirmPassword") as HTMLInputElement).value = "";
        (document.getElementById("inputSkill") as HTMLSelectElement).selectedIndex = 0;
        (document.getElementById("inputSignIn") as HTMLInputElement).value = "";
        (document.getElementById("inputSignInPwd") as HTMLInputElement).value = "";
    }

    // adds a line break to the string
    function addCRLF(inString: string) {
        if (inString.length > 0) {
            return inString + "\n";
        } else {
            return inString;
        }
    }

    // validates all entries for the new user when the new user submit button is clicked
    function validateNewUser() {
        let result: string = "";
        if ((document.getElementById("inputName") as HTMLInputElement).value.length == 0) {
            result = "Missing Full Name";
        }
        if ((document.getElementById("inputEmail") as HTMLInputElement).value.length == 0) {
            result = addCRLF(result) + "Missing Email";
        }
        if ((document.getElementById("inputUserName") as HTMLInputElement).value.length == 0) {
            result = addCRLF(result) + "Missing User Name";
        }
        if ((document.getElementById("inputPassword") as HTMLInputElement).value.length == 0) {
            result = addCRLF(result) + "Missing Password";
        }
        if ((document.getElementById("confirmPassword") as HTMLInputElement).value.length == 0) {
            result = addCRLF(result) + "Please Confirm Password";
        }
        return result;
    }

    // adds the values for the new user entry to the users table
    function addUser() {
        let result: string = validateNewUser();
        if (result.length != 0) {
            alert(result);
            return;
        }

        fetch("/api/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: null,
                fullName: (document.getElementById("inputName") as HTMLInputElement).value,
                email: (document.getElementById("inputEmail") as HTMLInputElement).value,
                userName: (document.getElementById("inputUserName") as HTMLInputElement).value,
                password: (document.getElementById("inputPassword") as HTMLInputElement).value,
                skillLevel: (document.getElementById("inputSkill") as HTMLSelectElement).value
            })
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("failed: addUser = " + response.status);
            }
            if (response.status == 200) {
                alert("New user added: " + (document.getElementById("inputName") as HTMLInputElement).value);
                clearLoginFields();
            }
        }).catch(function (err) {
            console.log("catch error: " + err);
        });
    }

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
                                <label className="text-darkBlue" htmlFor="inputSignIn">userName</label>
                                <input id="inputSignIn" type="user" className="shadow-lg col-xs-2 form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-darkBlue" htmlFor="inputSignInPwd">password</label>
                                <input id="inputSignInPwd" type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="shadow-lg btn btn-darkRoseColor" onClick={signInUser}>Submit</button>
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
                                <label className='text-darkBlue' htmlFor="inputName">Full Name</label>
                                <input id="inputName" type="name" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputEmail">email</label>
                                <input id="inputEmail" type="email" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputUserName">User Name</label>
                                <input id="inputUserName" type="user" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputPassword">password</label>
                                <input id="inputPassword" type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword" type="password" className="shadow-lg form-control" />
                            </div>
                            <div className="form-group">
                                <label className='text-darkBlue' htmlFor="inputSkill">Skill Level</label>
                                <select id="inputSkill" className="shadow-lg form-control" >
                                    <option value=""></option>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="shadow-lg btn btn-darkRoseColor" onClick={addUser}>Submit</button>
                            </div>
                        </form>
                    </span>
                </span>
            </div>
        </React.Fragment>
    )
};

interface LoginProps { }
export default Login



