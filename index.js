import React, { Component } from "react";
import ReactDOM from "react-dom";
import Check from "~/src/Check";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { check } = this.props;
        const products = check.products;
        const result = check.result();

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

let check = new Check;

check.add("Хлеб", 30);
check.add("Чай", 150);
check.add("Кофе", 520);
check.delete(2);

ReactDOM.render(
    <App check={check} />,
    document.getElementById("root")
);
