import * as React from 'react';

import FlashCard from './components/FlashCard';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-navbar bg-light">
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
				<FlashCard />
			</div>
		);
	}
}

export interface IAppProps {

}

export interface IAppState {

}

export default App;
