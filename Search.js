import React, { Component } from 'react';

export default class Search extends Component{
    
    render(){
        return (
            <div className="row mb-2 mt-2">
                <input type="text" placeholder="Search" className="form-control col-md-4" 
                onChange= {(e)=>{
                    this.props.searchText(e.target.value)
                    }}/>

                <button className="ml-1 btn btn-primary"
                onClick={()=>{
                        this.props.search("Hey I am Clicked")
                    }} >Search</button>
            </div>
        )
    }
}