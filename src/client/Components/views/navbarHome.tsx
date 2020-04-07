import * as React from 'react';


class NavBarHome extends React.Component<INavProps, INavState> {
    constructor(props: INavProps){
        super(props)
    }
render(){
    return(
            <div>
				<nav className="navbar navbar-expand-lg navbar-light bg-navBarColor">
					<a className="navbar-brand" href="#">codeNewbies</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link justify-content-end" href="#">signIn / signUp</a>
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
