import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { history, ConfigureStore } from './redux/store';
import MainComponent from './Components/MainComponent'

const store = ConfigureStore();
class App extends Component {
	render(){
		return (
			<div className="App">
				<Provider store={store}>
					<Router history={history}>
						<MainComponent />
					</Router>
				</Provider>
			</div>
		);
	}
	
}

export default App;