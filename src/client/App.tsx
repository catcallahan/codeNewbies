import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import FlashCard from './components/FlashCard';
import NavBarHome from './Components/navbarHome';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			navBar: 'home'
		};
	}

	render() {
		if(this.state.navBar === 'home'){
			return <NavBarHome />
		}
		return (
			<div>
				<FlashCard />
			</div>
		);
	}
}


export interface IAppProps {
	
}

export interface IAppState {
	navBar: string
}

export default App;
