import React, { Component } from 'react';

export default class Image extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return (
            <img className="card-img-top" alt="ABC" src={this.props.imageUrl}></img>
        )
    }
}