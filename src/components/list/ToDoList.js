import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class ToDoList extends Component {
    static propTypes = {
        items: PropTypes.array,
        activeFilter: PropTypes.string,
        changeHandler : PropTypes.func
    };

    static defaultProps = {
        activeFilter: ''
    };

    clickTodo = (value) =>{
        this.props.changeHandler(value);
    };

    renderTodos = (items, filter) => {
        return items.filter((item)=> {
            return item.status === filter || filter === null;
        }).map((item) => {
            let classN = item.status === 'done'? 'done' : 'in-progress';
            return (
                <li key={item.value} onClick={()=>this.clickTodo(item.value)} className={classN}>{item.value}</li>
            )
        });
    }

    render() {
        return (
            <ul className={'mt-4 todo-list'}>
                {this.renderTodos(this.props.items, this.props.activeFilter)}
            </ul>
        )
    }
}