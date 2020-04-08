import * as React from 'react';


class NavBar3 extends React.Component<INavProps, INavState> {
    constructor(props: INavProps){
        super(props)
    }
render(){
    return(
            <div>
				<nav className="navbar navbar-expand-lg navbar-light bg-navBarColor">
					<a className="navbar-brand text-white" href="#">codeNewbies</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active text-white" href="#">Home <span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link justify-content-end text-white" href="#">newCatagory</a>
							<a className="nav-item nav-link justify-content-end text-white" href="#">studyMore</a>
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