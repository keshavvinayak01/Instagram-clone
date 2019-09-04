import React from 'react';
import MainComponent from './Components/MainComponent';
import SinglePhotoComponent from './Components/SinglePhotoComponent';
import PhotoGridComponent from './Components/PhotoGridComponent';
import {Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';

const router = (
	<Provider store={store} >
		<Router history={history}>
			<MainComponent>
				<Switch>
					<Route exact path="/" component={PhotoGridComponent} />
					<Route path="/view/:postId" component={SinglePhotoComponent} />
				</Switch>
			</MainComponent>
		</Router>
	</Provider>
)
function App() {
	return (
		<div className="App">
			{router}
		</div>
	);
}

export default App;
