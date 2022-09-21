
import React from "react";
export default class ClassComponent extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    Название: {this.props.name}
                </li>
                <li>
                    Модель: {this.props.model}
                </li>
                <li>
                    Выпуск: {this.props.year}
                </li>
            </ul>
        );
    }
}