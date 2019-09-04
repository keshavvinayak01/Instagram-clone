import React from 'react';
import SinglePhotoComponent from './Components/SinglePhotoComponent';
import PhotoGridComponent from './Components/PhotoGridComponent';
import {Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import reduxApp from './redux/App';

const router = (
	<Provider store={store} >
		<Router history={history}>
			<reduxApp>
				<Switch>
					<Route exact path="/" component={PhotoGridComponent} />
					<Route path="/view/:postId" component={SinglePhotoComponent} />
				</Switch>
			</reduxApp>
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
