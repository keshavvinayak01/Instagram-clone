import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PhotoGridComponent from './PhotoGridComponent';
import SinglePhotoComponent from './SinglePhotoComponent';
import { connect } from 'react-redux';
import { increment, addComment, removeComment } from '../redux/actions/actionCreators';

const mapStateToProps = state => {
    return {
        posts : state.posts,
        comments : state.comments
    }
}

const mapDispatchToProps = dispatch => ({
    increment : (index) => {dispatch(increment(index))},
    addComment : (postId, author, comment) => {dispatch(addComment(postId, author, comment))},
    removeComment : (postId, i) => {dispatch(removeComment(postId, i))},   
});

class MainComponent extends Component {
    render() {
        const PhotoGrid = () => {
            return(
                <PhotoGridComponent {...this.props} />
            )
        }
        const SinglePhoto = ({match}) => {
            return(
                <SinglePhotoComponent {...this.props} postId = {match.params.postId} />
            )
        }
        return (
            <div>
                <h1>
                <Link to='/'>Reduxstagram</Link>
                </h1>
                <Switch>
                    <Route exact path="/" component={PhotoGrid} />
                    <Route path="/view/:postId" component={SinglePhoto} />
                </Switch>
                {/* {React.cloneElement(this.props.children, this.props)} */}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
