import React, {Component} from "react";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0
         };
    }
     increment =()=>{
        this.setState({number: this.state.number+1})
    }
    decrement=()=>{
        this.setState({number:this.state.number-1})
    }
    neutral=()=>{
        this.setState({number:0})
    }
    render() {
        return (
            <div className="counterApp">
            <h1>React Counter App</h1>
            <h1>{this.state.number}</h1>
            <button className='btn btn-success' onClick={this.increment}>Increment</button>
            <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
            <button className='btn btn-secondary'onClick={this.neutral}>Neutral</button>
            </div>
        );
    }
}

export default Main;