import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CustomPropTypeValidation extends Component{
    render() {
        return <Title text="The Text" />
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>;

// instead of a prop type and isRequired, we can pass in a custom function
Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`)
        }
    }
};

export default CustomPropTypeValidation;