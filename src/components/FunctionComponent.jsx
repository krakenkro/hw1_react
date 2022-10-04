import React, {useState} from "react";
export default function FunctionComponent(props) {
    const {name, model, year, show} = props
    const [value, setValue] = useState("");

    const onClick = (event) => {
        event.preventDefault();
        show(value);
        setValue("")
    }

    return (
        <div>
            <h1>Function Component</h1>
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
            <form>
                <label>
                    Название:
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                </label>
                <button type="submit" onClick={onClick}>click</button>
            </form>
        </div>
    );
}