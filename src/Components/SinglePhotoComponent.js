import React, { Component } from 'react'
import PhotoComponent from './PhotoComponent'
import CommentComponent from './CommentComponent'
class SinglePhotoComponent extends Component {
    render() {
        // fetch index to get the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.postId);
        const post = this.props.posts[i];
        return (
            <div>
                <div className='single-photo'>
                    <PhotoComponent i = {i} post={post} {...this.props} />
                    <CommentComponent postComments={this.props.comments[this.props.postId] || []} 
                    {...this.props} postId = {this.props.postId}/>
                </div>                
            </div>
        )
    }
}

export default SinglePhotoComponent
