import React, { Component } from 'react';

export default class MovieDetails extends Component{

    render(){
        return (
            <div>
            <h3>{this.props.details.name}</h3>
            </div>
        )
    }
}