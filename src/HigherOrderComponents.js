import React, { Component } from 'react';

// higher order components share common functionality or information between multiple components
// the hoc takes in one component and returns another component
// when creating a HOC, props children cease to pass through unless you
// spread {...this.props} into the component to pass the info through as props
const HOC = (InnerComponent) => class extends Component {
    constructor(){
        super();
        this.state = {count: 0}
    }

    update = () => {
        this.setState({count: this.state.count + 1})
    }

    componentWillMount(){
        console.log('will mount');
    }

    render(){
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update.bind(this)}
            />
        )
    }
};

class HigherOrderComponents extends Component {
    render() {
        return (
            <div>
                <Button>button</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

// to make an inner component, wrap the button JSX with HOC
const Button = HOC((props) =>
    <button onClick={props.update}>{props.children} - {props.count}</button>);

class Label extends Component {
    componentWillMount() {
        console.log('label will mount');
    }

    render() {
        return (
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

// same for if you want to wrap a full component class in the HOC function,
// then change it in the higherOrderComponent component
const LabelHOC = HOC(Label);

export default HigherOrderComponents;