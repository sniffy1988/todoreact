import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default class ToDoAddForm extends Component {
    static propTypes = {
        onAdd : PropTypes.func
    };

    state ={
        todo: ''
    };

    onEnterTodo = ({target}) => {
        let {value} = target;
        if(value.indexOf(' ') !== 0 && value !== '') {
            this.setState({
                todo: value,
                isError: false,
                errorMsg: null
            })
        } else {
            this.setState({
                todo: value,
                isError: true,
                errorMsg: `ToDo shouldn't be empty or starts with space`
            })
        }
    };

    isDisabled = () => {
        return this.state.isError;
    };

    sendToDo = ()=> {
        let result = this.props.onAdd(this.state.todo);
        if(result.result) {
            this.setState({
                todo: '',
                isError: false
            })
        } else {
            this.setState({
                isError : true,
                errorMsg: result.msg
            })
        }
    };

    render (){
        return (
            <section className={'form-inline add-form'}>
                <div className="form-group">
                    <input type="text" value={this.state.todo} onChange={this.onEnterTodo} placeholder={'Enter todo'} className="form-control"/>
                    <button className={'btn btn-primary btn-add'} onClick={this.sendToDo} disabled={this.isDisabled()}>Add</button>
                </div>
                {this.state.isError &&
                    <div className={'form-text error'}>{this.state.errorMsg}</div>
                }
            </section>
        )
    }
}