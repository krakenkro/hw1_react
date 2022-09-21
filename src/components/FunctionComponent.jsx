import React from "react";
export default function FunctionComponent(props) {
    const {name, model, year} = props
    return (
        <ul>
            <li>
                Название: {name}
            </li>
            <li>
                Модель: {model}
            </li>
            <li>
                Выпуск: {year}
            </li>
        </ul>
    );
}