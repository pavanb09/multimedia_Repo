import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


export class Counter extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment = ()=>this.setState({count : this.state.count+1});
    decrement = ()=>this.setState({count : this.state.count-1});




    render(){
        return(
            <div className="container card">
                <h3>Counter application </h3>
                <div className="counter">
                <h1 className="head">{this.state.count}</h1>
                </div>
                
                <div className="buttons">
                    <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
                    <button className="btn btn-warning" onClick={()=>this.setState({count : 0})}>Reset</button>
                    <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                </div>
            
            </div>
        )
    }
}