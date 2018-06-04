import React, { Component } from 'react';

class MappingArraysOfData extends Component {
    constructor(){
        super();
        this.state = {items: []}
    }

    componentWillMount(){
        fetch('http://swapi.co/api/people/?format=json')
            .then( response => response.json() )
            .then( ({results: items}) => this.setState({items}))
    }

    render() {
        let items = this.state.items;
        return (
            <div>
                {items.map(item => <h4 >{item.name}</h4>)}
            </div>
        )
    }
}

export default MappingArraysOfData;