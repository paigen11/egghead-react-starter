import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class component can have state, whereas stateless component cannot
class App extends Component {
   // setting state for the component
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }

    // this will update the h1 tag with whatever the user inputs into the text box
    update( e ) {
        this.setState({txt: e.target.value})
    }

    render() {
        // let txt = this.props.txt;
        // wrap jsx in parentheses to prevent issues with curly braces and JS
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <b>Bold</b>
            </div>
        )
    }
}

// example of a stateless component
// const App = () => <h1>Hello stateless</h1>;

// setting prop types and if they're required or not
App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

// this should override the props if they're set anywhere else (like the index.js file)
App.defaultProps = {
    txt: 'this is the default text'
};

export default App;