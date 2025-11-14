import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export class RandomNum extends Component{

    constructor(){
        super();
        this.state = {
            rondom : 0
        }
    }

    getRandom = ()=> this.setState({rondom : Math.round(Math.random() * 100)});
    render(){
        return(

            <div className="random-container">
                <div className="card container">
                <h3>Random number : {this.state.rondom}</h3>
                <button className="btn btn-success" onClick={this.getRandom

                }>Get Random</button>
                </div>

            </div>
        )
    }
}