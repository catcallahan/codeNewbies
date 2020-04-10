import * as React from 'react';
import { Link } from 'react-router-dom';


class NavBarHome extends React.Component<INavProps, INavState> {
    constructor(props: INavProps){
        super(props)
    }
render(){
    return(
            <div>
				<nav className="navbar navbar-expand-lg navbar-light bg-darkBlue">
					{/* <a className="navbar-brand text-white" href="#">codeNewbies</a> */}
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							{/* <a className="nav-item nav-link text-white" href="#">signIn / signUp</a> */}
							<Link className="nav-item nav-link text-white" to = '/Login'>signIn / signUp</Link> 
						</div>
					</div>
				</nav>
			</div>
        
    )
}
}

interface INavProps {

};

interface INavState {

}


export default NavBarHome
