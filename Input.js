import React, { Component } from 'react';

export default class Input extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <input  type="text" placeholder={this.props.myplaceholder}/>
        )
    }
}