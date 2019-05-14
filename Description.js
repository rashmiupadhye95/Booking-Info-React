import React, { Component } from 'react';
import Button from './Button';

export default class Description extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return (
               <div className="card-body">
                  <h5 className="card-title">Shopping</h5>
                  <p className="card-text">{this.props.price}</p>
                  <p className="card-text">{this.props.description}</p>
                  <p className="card-text">{this.props.quantity}</p>
                  <Button myButton="Add to Cart"/>
                </div>
           
        )
    }
}