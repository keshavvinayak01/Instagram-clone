import React, { Component } from 'react'
import PhotoComponent from './PhotoComponent'

class PhotoGridComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className='photo-grid'>
                {this.props.posts.map((post, i) => <PhotoComponent {...this.props} key={i} i={i} post={post} /> )}                
                </div>
            </div>
        )
    }
}

export default PhotoGridComponent
