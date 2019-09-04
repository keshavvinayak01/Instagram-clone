import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MainComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                <Link to='/'>Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default MainComponent;
