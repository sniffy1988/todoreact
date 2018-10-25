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
        ]
    };

    onAdd = (data)=> {
        this.setState((state)=> {
           let oldItems = state.items;
           let tempResult = oldItems.filter((item)=>{
               return item.value === data;
           });
           if(tempResult.length) {
               return state
           } else {
               let newItems = state.items.push({
                   value: data,
               });
               return {
                   state : newItems
               }
           }
        });
        return true;
    };

    render() {
        return (
            <div className="App">
                <div className={'container'}>
                    <h1 className={'text-center'}>Todo list</h1>
                    <ToDoFilters/>
                    <ToDoAddFrom onAdd={this.onAdd}/>
                    <ToDoList items={this.state.items} />
                </div>
            </div>
        );
    }
}

export default App;
