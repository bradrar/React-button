import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function buttonUp(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
}

class App extends React.Component {
	constructor(props){
  	super(props);
    
    this._handleItemSort = this._handleItemSort.bind(this);
        
  	this.state = {
    	shoppingList: ['Bananas', 'Apples', 'Rice', 'Eggs' , 'GTX 1080Ti', 'Avocado']
    }
  }
  
  
  
  _handleItemSort(dir, currentIndex) {
  	// create new list of items from a spread of our current shoppingList state.
    // we don't want to reference the actual state and mutate it! 😱
    const shoppingList = [...this.state.shoppingList]

    if (dir === "up" ){
      this.setState({
        shoppingList: buttonUp(shoppingList, currentIndex , currentIndex - 1) 
      }) 
    } else {
      this.setState({
        shoppingList: buttonUp(shoppingList, currentIndex , currentIndex + 1) 
      }) 
    }
   	
  }
  
  render() {
    return( 
      <div>
        <h1>ReactJS button functionality</h1>

        <p>Goal:

Add functionality to the buttons on the list so that when UP is clicked the list item swaps with the item directly on top of it.

When DOWN is pressed, the list item should swap with the item directly bellow it.
 </p>
        <ol>
          {this.state.shoppingList.map((item, index) =>
            	(<li data-index = {index} key={index}>
                {item}
                <div className='controls'>
                  <button 
                    disabled={index === 0} 
                    onClick={ () => this._handleItemSort("up", index) }>UP</button>
                  <button
                    disabled={this.state.shoppingList.length === index + 1}
                    onClick={ () => this._handleItemSort("down", index) } >DOWN</button>
                </div>
              </li>)
            )}
        </ol>
      </div>
    );
  }
}


export default App;
