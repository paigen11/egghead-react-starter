import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ComponentUpdates extends Component {
    constructor() {
        super();
        // determine if new prop of val is increasing or not
        this.state = {increasing: false};
    }

    // rerender entire app and increment value by 1
    update() {
        ReactDOM.render(<ComponentUpdates val={this.props.val +1} />,
        document.getElementById('root'))
    };

    // new properties are coming in - and variable nextProps gives us access
    // first render should be false, each subsequent render should be true
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    // takes in nextProps and nextState
    // if nextProps is a multiple of 5, it will update the val
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }

    // takes in prevProps and prevState
    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps.val}`);
    }

    render() {
        console.log(this.state.increasing);
        return <button onClick={this.update.bind(this)}>
            {this.props.val}
        </button>
    }
}

// set value ahead of time
ComponentUpdates.defaultProps = { val : 0 };

export default ComponentUpdates;