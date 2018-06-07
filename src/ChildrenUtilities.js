import React, { Component, Children } from 'react';

class ChildrenUtilities extends Component {
    render() {
        return (
            <Parent>
                <div className='childA'></div>
                {/*<div className='childB'></div>*/}
            </Parent>
        )
    }
}

// in order to prevent React from throwing an error trying to map only one child element,
// React created React.Children, then you can still use the map function and
// it just takes 2 inputs - the props we're trying to map and the function to execute against them
// for this particular function you could also just call Children.toArray...
// or you can .forEach also
// or Children.only which can only ever return one thing
class Parent extends Component {
    render() {
        // console.log(this.props.children);
        // let items = Children
        //     .map(this.props.children, child => child);
        // let items = Children.toArray(this.props.children);
        // let items = Children
        //     .forEach(this.props.children, child => console.log(child.props.className));
        let items = Children.only(this.props.children);
        console.log(items);
        return null;
    }
}

export default ChildrenUtilities;