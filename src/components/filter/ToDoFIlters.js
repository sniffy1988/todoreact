import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class ToDoFIlters extends Component {
    static propTypes = {
        activeFilter: PropTypes.string,
        setFilter: PropTypes.func,
        isVisible: PropTypes.bool
    };
    clearFilters = () => {
        this.props.setFilter(null);
    };

    setDoneFilter = () => {
        this.props.setFilter('done');
    };

    setActiveFilter = () => {
        this.props.setFilter('active');
    };

    classNames = (btn) => {
        let allClasses = 'btn btn-link nav-link';
        if(this.props.activeFilter === btn) {
            allClasses += ' active';
        }
        return allClasses;
    };


    render() {
        return (
            <section>
                {this.props.isVisible &&
                    <nav className={'nav'}>
                        <button className={this.classNames(null)} onClick={this.clearFilters}>All</button>
                        <button className={this.classNames('done')} onClick={this.setDoneFilter}>Done</button>
                        <button className={this.classNames('active')} onClick={this.setActiveFilter}>In Progress</button>
                    </nav>
                }
            </section>
        )
    }
}