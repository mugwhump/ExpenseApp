import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const ENTER_KEY_CODE = 13;
/*
 * A text input field that invokes a callback when you press Enter.
 */
export default class TextFilter extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    // Invokes callback, changing the filtering
    onSave() {
        const { onEntrySave} = this.props;
        const value = ReactDOM.findDOMNode(this.refs.inputField).value;
        onEntrySave(value);
    }

    /*
     * @param  {object} event
     */
    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.onSave();
        }
    }

    render() {
        return (
            <input ref="inputField"
                onKeyDown={this.onKeyDown}
                autoFocus />
        );
    }
}

TextFilter.propTypes = {
    onEntrySave: PropTypes.func.isRequired
};

