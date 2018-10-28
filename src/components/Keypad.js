import React, { Component } from 'react';
import './Keypad.css';

class Keypad extends Component {
    handleSubmit = () => {
        this.props.onSubmit();
    }

    handleRemove = () => {
        this.props.onRemove();
    }

    handleClick = (e) => {
        this.props.onClick(e);
    }

    render() {
        return (
            <>
                <div className="Keypad-group">
                    <button onClick={this.handleClick} value="1">1</button>
                    <button onClick={this.handleClick} value="2">2</button>
                    <button onClick={this.handleClick} value="3">3</button>
                </div>
                <div className="Keypad-group">
                    <button onClick={this.handleClick} value="4">4</button>
                    <button onClick={this.handleClick} value="5">5</button>
                    <button onClick={this.handleClick} value="6">6</button>
                </div>
                <div className="Keypad-group">
                    <button onClick={this.handleClick} value="7">7</button>
                    <button onClick={this.handleClick} value="8">8</button>
                    <button onClick={this.handleClick} value="9">9</button>
                </div>
                <div className="Keypad-group">
                    <button onClick={this.handleRemove}>&larr;</button>
                    <button onClick={this.handleClick} value="0">0</button>
                    <button id="Keypad-button" onClick={this.handleSubmit}>적립</button>
                </div>
            </>
        );
    }
}

export default Keypad;