import * as React from "react";
// import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

const Login: React.FC<LoginProps> = () => {
    return (
        <React.Fragment>
            <span className=''>
                <h1>Welcome to codeNewbie</h1>
            </span>
            <form action="">

                <div className="form-group">
                    <label htmlFor="inputName">fullName</label>
                    <input type="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputUserName">userName</label>
                    <input type="user" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">password</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">confirmPassword</label>
                    <input type="password"  className="form-control"/>
                </div>
                <button type='submit' className="vtn btn"></button>
            </form>



        </React.Fragment>

)

}




interface LoginProps { }
export default Login