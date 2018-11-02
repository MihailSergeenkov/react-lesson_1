import React, { Component } from "react";
import ReactDOM from "react-dom";
import Check from "~/src/Check";

class App extends Component {
    constructor(props) {
        super(props);
        this.check = new Check;
        this.fillCheck();
    }

    fillCheck() {
        this.check.add("Хлеб", 30);
        this.check.add("Чай", 150);
        this.check.add("Кофе", 520);
        this.check.delete(2);
    }

    render() {
        const products = this.check.products;
        const result = this.check.result();

        return (
            <div>
                <ul>
                    {
                        products.map((product, index) => (
                            <li key={index}>{product.view()}</li>
                        ))
                    }                    
                </ul>
                <p>Кол-во продуктов: {result.products}</p>
                <p>Стоимость: {result.result}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);