import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});
export default browserHistory;
