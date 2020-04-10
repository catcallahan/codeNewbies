import * as React from 'react';
import { Link } from 'react-router-dom';


class NavBar3 extends React.Component<INavProps, INavState> {
    constructor(props: INavProps){
        super(props)
    }
render(){
    return(
            <div>
				<nav className="navbar navbar-expand-lg navbar-light bg-darkBlue">
				<Link className="navbar-brand text-white" to = '/'>codeNewbies</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-item nav-link justify-content-end text-white" to = '/'>newCategory</Link>
							<Link className="nav-item nav-link justify-content-end text-white" to = '/study'>studyMore</Link>
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


export default NavBar3