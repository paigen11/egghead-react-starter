import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ReactRef extends Component {
    constructor(){
        super();
        this.state = {a: ''}
    }

    // currently, both the a and b fields will be updated regardless of which input is typed in
    // so remove the event, and set a and b equal to the refs value so only the reference value is updated
    // you can even go a step further by setting the ref's node equal to this.a then referencing just that in the update function
    // or you can create a child component that updates onChange and ref the original input with this.a.refs.input.value
    update = () => {
      this.setState({
          // a: e.target.value,
          // b: e.target.value
          // a: this.a.value,
          a: this.a.refs.input.value,
          b: this.refs.b.value
      })
    };

    render() {
        return (
            <div>
                <Input
                    ref={component => this.a = component}
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                <input type="text"
                       ref="b"
                       onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

class Input extends Component {
    render() {
        return (<div>
            <input ref='input' type="text" onChange={this.props.update}/>
        </div>)
    }
}


export default ReactRef;