import React, { Component } from 'react';

export default class Button extends Component{
    constructor(){
        super();
        
    }
    render(){
        return (
            <button className="btn btn-primary">{this.props.myButton}</button>
        )
    }
}