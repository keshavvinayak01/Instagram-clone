import React, { Component } from 'react'

class CommentComponent extends Component {
    
    renderComment(comment, i, removeComment){
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }
    handleSubmit(e){
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(this.props.postId, author, comment);
        this.refs.commentForm.reset();
    }
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default CommentComponent
