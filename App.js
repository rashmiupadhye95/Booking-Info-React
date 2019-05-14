import React, { Component } from 'react';
//import Products from './Products';
//import Search from './Search';
//import MovieList from './MovieList';
//import Toggler from './Toggler';
import Register from './register/Register';


export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      counter: 0,
      searchQuery:''
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchClick(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handleChange(data){
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);
  }



  render(){
    return(
      // // <div className="container">
      // {/* <h2>Online Shopping</h2> */}
      // // <Search 
      // search={this.handleSearchClick}
      // searchText={this.handleChange}/>
      // {/* <label className="badge">{this.state.counter}</label>
      //   <Products/> */}
      //   {/* <MovieList search={this.state.searchQuery}/> */}
      //   {/* <Toggler/> */}
      // // </div>
      <div className="container">
        <Register/>
      </div>
     
      
    )
  }
}


