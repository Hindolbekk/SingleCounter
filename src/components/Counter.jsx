import React, { Component } from 'react'
import "./Counter.scss"
export default class Counter extends Component {
   constructor(props){
    super(props);
    this.state={
        age:0
    };
   }
   icriment(){
    this.setState({
      age:this.state.age + 1
    })
   }
   dicriment(){
    this.setState({
        age:this.state.age>0?this.state.age-1:0
    })
   }
   reset(){
    this.setState({
        age:0
    })
   }
  render() {
    console.log(this.state);
    return (
      <div className='counter'>
         <h1>Single Counter</h1>
         <ul>
            <li><button onClick={(e)=> this.icriment(e)}>+</button></li>
            <li><button onClick={(e)=>this.dicriment(e)}>-</button></li>
            <li><button onClick={(e)=>this.reset(e)}>reset</button></li>
         </ul>
        <h1>Count:{this.state.age}</h1>
        </div>

    )
  }
}
