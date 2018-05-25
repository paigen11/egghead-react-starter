import React, { Component } from 'react';

class App1 extends Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }

    // this will update the h1 tag with whatever the user inputs into the text box
    update( e ) {
        this.setState({txt: e.target.value})
    }

    render() {
      return (
            <div>
                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
            </div>
        )
    }
}

// create a stateless function component below,
// now this child component will update the state of the parent component
// all of the widgets will update the value in the parent component now
const Widget = (props) => <input type="text" onChange={props.update} />

export default App1;