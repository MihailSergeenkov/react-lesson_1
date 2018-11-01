import React, { Component } from "react";
import ReactDOM from "react-dom";
import Check from "~/src/Check";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { check: new Check };
    }

    componentDidMount() {
        let check = new Check;
        check.add("Хлеб", 30);
        check.add("Чай", 150);
        check.add("Кофе", 520);
        check.delete(2);

        this.setState({ check });
    }

    render() {
        const { check } = this.state;
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

ReactDOM.render(
    <App />,
    document.getElementById("root")
);