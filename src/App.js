import React, {Component} from 'react';
import ToDoFilters from './components/filter/ToDoFIlters';
import  ToDoAddFrom from './components/addForm/ToDoAddForm';
import  ToDoList from './components/list/ToDoList';

class App extends Component {
    state = {
        items: [
            {
                value: 'Eat',
                status: 'active'
            },
            {
                value: 'Pray',
                status: 'active'
            },
            {
                value: 'Love',
                status: 'done'
            }
        ],
        activeFilter: null
    };

    isUnique = (data)=> {
        let oldItems = this.state.items;
        let tempResult = oldItems.filter((item)=>{
            return item.value === data;
        });
        return tempResult.length === 0;
    };

    changeFilter = (filter)=> {
        this.setState({
            activeFilter: filter
        })
    };

    onAdd = (data)=> {
        let isUni = this.isUnique(data);
        if(isUni) {
            this.setState((state)=> {
                let newItems = state.items.push({
                    value: data,
                    status: 'active'
                });
                return {
                    state : newItems
                }
            });
            return {
                result: true
            }
        } else {
            return {
                result: false,
                msg: 'This item already in list'
            }
        }
    };

    render() {
        return (
            <div className="App">
                <div className={'container'}>
                    <h1 className={'text-center'}>Todo list</h1>
                    <ToDoFilters activeFilter={this.state.activeFilter} setFilter={this.changeFilter}/>
                    <ToDoAddFrom onAdd={this.onAdd}/>
                    <ToDoList items={this.state.items} activeFilter={this.state.activeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;
