import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ToDoList extends Component{
    static propTypes = {
      items: PropTypes.array
    };

    renderTodos (items) {
        console.log(items);
        return items.map(function (item) {
            return (
                <li key={item.value}>{item.value}</li>
            )
        });
    }
    render(){
        return (
            <ul className={'mt-4'}>
                {this.renderTodos(this.props.items)}
            </ul>
        )
    }
}