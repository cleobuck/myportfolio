import React, { Component } from 'react';
import Test from './test'

export default class Feathers extends Component {
  
    render() {

      let testArr = [];
      for (let i = 0; i < 10 ; i++) {
        testArr.push(i);
      }

      const testComponents = testArr.map(num => <Test key={num}/>)
  
      return (
          <div>
        {testComponents}
            </div>
 
      )
      
    }
  }
