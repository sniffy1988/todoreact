import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class ToDoAddForm extends Component {
    static propTypes = {
        onAdd: PropTypes.func
    };

    state = {
        todo: ''
    };

    onEnterTodo = ({target}) => {
        let {value} = target;
        this.validateToDo(value);
        this.setState({
            todo: value
        });
    };

    isDisabled = () => {
        return this.state.isError;
    };

    validateToDo = (value) => {
        if(value.indexOf(' ') === 0 || value === '') {
            this.setState({
                isError: true,
                errorMsg: `ToDo shouldn't be empty or starts with space`
            });
            return false;
        } else {
            this.setState({
                isError: false,
                errorMsg: null
            });
            return true;
        }
    };

    sendToDo = () => {
        if (this.state.todo === '') {
            this.setState({
                isError: true,
                errorMsg: `ToDo shouldn't be empty or starts with space`
            });
        } else {
            let validate = this.validateToDo(this.state.todo);
            if(validate) {
                let result = this.props.onAdd(this.state.todo);
                if (result.result) {
                    this.setState({
                        todo: '',
                        isError: false
                    })
                } else {
                    this.setState({
                        isError: true,
                        errorMsg: result.msg
                    })
                }
            }
        }
    };

    render() {
        return (
            <section className={'form-inline add-form'}>
                <div className="form-group">
                    <input type="text" value={this.state.todo} onChange={this.onEnterTodo} placeholder={'Enter todo'}
                           className="form-control"/>
                    <button className={'btn btn-primary btn-add'} onClick={this.sendToDo}
                            disabled={this.isDisabled()}>Add
                    </button>
                </div>
                {this.state.isError &&
                <div className={'form-text error'}>{this.state.errorMsg}</div>
                }
            </section>
        )
    }
}