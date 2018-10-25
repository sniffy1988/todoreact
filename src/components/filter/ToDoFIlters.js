import React, {Component} from 'react';
import './style.scss';

export default class ToDoFIlters extends Component{
    render() {
        return (
            <section>
                <nav className={'nav'}>
                    <button className={'btn btn-link nav-link active'}>All</button>
                    <button className={'btn btn-link nav-link'}>Done</button>
                    <button className={'btn btn-link nav-link'}>In Progress</button>
                </nav>
            </section>
        )
    }
}