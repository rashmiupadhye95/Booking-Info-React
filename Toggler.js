import React, { Component } from 'react';
import MovieList from './MovieList';

export default class Toggler extends Component{
    constructor(props){
        super(props);
        console.log("I am Constructor");
        this.state = {
            show : true,
            buttonText: 'Hide'
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        let currentState = this.state;
        currentState.show = !currentState.show;
        currentState.buttonText = currentState.show ? 'Hide' : 'Show';
        this.setState(currentState);
    }
    componentDidMount(){
        console.log('I am Mounted');
    }
    componentWillUpdate(){
        console.log("Component Updated");
    }
    render(){
        let content = '';
        if(this.state.show){
            content = <MovieList search = {''}/>
        }
        return (
            <div>
                {content}<br/>
            <button className="btn btn-primary"
            onClick={this.toggle}
            >{this.state.buttonText}</button>
            
            </div>
        )
    }
}