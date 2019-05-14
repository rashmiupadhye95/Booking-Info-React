import React, { Component } from 'react';

export default class Label extends Component{
    constructor(){
        super();
        
    }
    render(){
        return (
            <label>{this.props.name}</label>
        )
    }
}