import React, { Component } from 'react';

class AccessNestedDataWithPropsChildren extends Component {
    render() {
        return <Button>I <Heart /> React</Button>
    }
}

// create a stateless Button component and pass the props (text) from the parent to the child component
const Button = (props) => <button>{props.children}</button>;


// create a class component to illustrate the same point, the child component of heart can be rendered within
// the parent component
class Heart extends Component {
    render() {
        return <span>&hearts;</span>
    }
}

export default AccessNestedDataWithPropsChildren;