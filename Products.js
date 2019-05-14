import React, { Component } from 'react';
import Image from './Image';
import Description from './Description';

export default class Card extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return (
            <div className="row">
                <div className="card col-md-4">
                <Image imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FWr6j6zUWnHhvsPenYR_o6BHlgiGuRAWhfC0JhGvpWnSef-E"/>
                    <Description price="Price: 500" description="Description: abc" quantity="5"/>
                </div>
                <div className="card col-md-4">
                    <Image imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FWr6j6zUWnHhvsPenYR_o6BHlgiGuRAWhfC0JhGvpWnSef-E"/>
                    <Description price="Price: 400" description="Description: xyz" quantity="4"/>
                </div>
            </div>
           
        )
    }
}