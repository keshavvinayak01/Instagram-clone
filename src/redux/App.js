import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators'
import MainComponent from '../Components/MainComponent';

function mapStateToProps(state) { 
    return {
        posts : state.posts,
        comments : state.comments
    }
}

function mapDispatchToProps(dispatch) { 
    return bindActionCreators(actionCreators, dispatch);
}

const reduxApp = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default reduxApp;