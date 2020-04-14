import * as React from 'react';
import { Link } from 'react-router-dom';


class NavBar2 extends React.Component<INavProps, INavState> {
	constructor(props: INavProps) {
		super(props)
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-darkBlue">
					<Link className="navbar-brand text-white" to = '/'>codeNewbies</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
						<Link className="nav-item nav-link justify-content-right text-white" to ='/category'>chooseCategory</Link>
						<Link className="nav-item nav-link justify-content-right text-white" to ='/category'>quizMe</Link>
						<Link className="nav-item nav-link justify-content-end text-white" to = '/study'>studyPage</Link>
						<Link className="nav-item nav-link justify-content-end text-white" to = '/resources'>resourcePage</Link>
						<Link className="nav-item nav-link justify-content-end text-white" to = '/about'>aboutUs</Link>
						<Link className="nav-item nav-link justify-content-end text-white" to = '/login'>signIn</Link>
						</div>
					</div>
				</nav>
			</div>
			// <div>
			// 	<nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-darkBlue">
			// 		<div className="container-fluid">
			// 			<div className="navbar-header">
			// 				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
			// 					<span className="icon-bar">-</span>
			// 					<span className="icon-bar">-</span>
			// 					<span className="icon-bar">-</span>
			// 				</button>
			// 				<a className="navbar-brand" href="/">codeNewbies</a>
			// 			</div>
			// 			<div className="collapse navbar-collapse" id="#myNavbar">
			// 				<ul className="nav navbar-nav">
			// 					<li><a href="/study">studyPage</a></li>
			// 					<li><a href="/quiz">quizMe</a></li>
			// 					<li><a href="/about">aboutUs</a></li>
			// 					<li><a href="/login">signIn</a></li>
			// 				</ul>
			// 			</div>
			// 		</div>
			// 	</nav>
			// </div>
		)
	}
}

interface INavProps {

};

interface INavState {

}


export default NavBar2