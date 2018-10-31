import React, { Component } from "react";
import ReactDOM from "react-dom";
import Arithmetic from "~/src/Arithmetic";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{Arithmetic.summation(1, 3)}</div>
                <div>{Arithmetic.subtraction(1, 3)}</div>
                <div>{Arithmetic.multiplication(1, 3)}</div>
                <div>{Arithmetic.division(1, 3)}</div>
                <div>{Arithmetic.division(1, 0)}</div>
            </div>            
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);