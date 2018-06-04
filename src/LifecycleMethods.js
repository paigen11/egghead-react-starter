import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifecycleMethods extends Component {
    constructor() {
        super();
        this.state = {val: 0};
    }

    update = () => {
        this.setState({val: this.state.val + 1});
    };

    // mounting lifecycle phase that assures us the component will render in the DOM
    // this will only ever fire once, but the render will keep firing when the button is clicked
    componentWillMount() {
        console.log('Component will mount');
        this.setState({ m : 2 })
    };

    // fires once the component actually has been mounted to the DOM
    // again, only fires once but render will keep firing when clicked
    componentDidMount() {
        console.log('Component did mount');
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    };

    componentWillUnmount() {
        console.log('component will unmount');
        clearInterval(this.inc);
    };

    render() {
        console.log('render');
        return  <button onClick={this.update}>
            {this.state.val * this.state.m}
            </button>
    }
}

class Wrapper extends Component {
    // when mount is called, the button to click will show up
    mount() {
        ReactDOM.render(<LifecycleMethods />, document.getElementById('a'))
    }

    // when the unmount is called, the button to click will disappear
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

// wrapper will render LifecyleMethods
export default Wrapper;