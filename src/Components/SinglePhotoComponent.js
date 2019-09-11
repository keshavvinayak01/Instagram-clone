import React, { Component } from 'react'
import PhotoComponent from './PhotoComponent'
import CommentComponent from './CommentComponent'
class SinglePhotoComponent extends Component {
    render() {
        // fetch index to get the post
        const { postId } = this.props.params.postId;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        return (
            <div>
                <div class='single-photo'>
                    <PhotoComponent i = {i} post={post} {...this.props} />
                    <CommentComponent postComments={this.props.comments[postId] || [] {...this.props}/>
                </div>                
            </div>
        )
    }
}

export default SinglePhotoComponent
