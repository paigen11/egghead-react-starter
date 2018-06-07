import React, { Component, Children, cloneElement } from 'react';

class CloneElement extends Component {
    render() {
        return(
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        )
    }
}

class Buttons extends Component {
    constructor(){
        super();
        this.state = { selected: 'None '}
    }

    selectItem = (selected) => {
        this.setState({selected})
    };


    // to modify this.props.children, you actually need to create new elements
    // you can do so with cloneElement, pass the child element and then what you want to happen
    // so for this one, it takes the child element, clones it and then binds the value to the click
    // so when it's clicked, it displays that value of the selected child
    render() {
        let fn = child =>
            cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            });

        let items = Children.map(this.props.children, fn);
        return (
            <div>
                <h2>You have selected: {this.state.selected}</h2>
                { items }
            </div>
        )
    }
}

export default CloneElement;