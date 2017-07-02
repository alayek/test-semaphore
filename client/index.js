import { render } from 'react-dom';
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        return (
                <h1> Hello There! </h1>
        );
    }
}

render(<MyComponent/>, document.getElementById('root'));