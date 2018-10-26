import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class ToDoList extends Component {
    state = {};
    static propTypes = {
        items: PropTypes.array,
        activeFilter: PropTypes.string
    };

    static defaultProps = {
        activeFilter: ''
    };

    renderTodos(items) {
        return items.map(function (item) {
            let classN = item.status === 'done'? 'done' : 'in-progress';
            return (
                <li key={item.value} className={classN}>{item.value}</li>
            )
        });
    }

    render() {
        return (
            <ul className={'mt-4 todo-list'}>
                {this.renderTodos(this.props.items)}
            </ul>
        )
    }
}