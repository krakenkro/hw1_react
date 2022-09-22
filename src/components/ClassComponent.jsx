
import React from "react";
export default class ClassComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.changeValue = this.changeValue.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    
    changeValue(event) {
        this.setState({value: event.target.value});
    }
    
    onClick(event) {
        event.preventDefault();
        this.props.show(this.state.value);
    }
    render() {
        return (
            <div>
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
                <form onSubmit={this.onClick}>
                    <label>
                        Название:
                        <input type="text" value={this.state.value} onChange={this.changeValue}/>
                    </label>
                    <button type="submit">click</button>
                </form>
            </div>
        );
    }
}