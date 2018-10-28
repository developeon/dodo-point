import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    const NoMathContainer = {
        paddingLeft: '10px',
        marginLeft: '10px'
    }

    return (
        <div style={NoMathContainer}>
            <h1>Not Found</h1>
            <p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.</p>
            <p><Link to="/">Go to home</Link></p>
        </div>
    );
  }
}

export default NoMatch;