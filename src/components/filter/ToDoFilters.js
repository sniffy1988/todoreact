import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import filters from '../../contstants';
export default class ToDoFilters extends Component {
    static propTypes = {
        activeFilter: PropTypes.string,
        setFilter: PropTypes.func,
        isVisible: PropTypes.bool
    };

    setFilter = (filter) => {
        this.props.setFilter(filter);
    };

    classNames = (btn) => {
        let allClasses = 'btn btn-link nav-link';
        if(this.props.activeFilter === btn) {
            allClasses += ' active';
        }
        return allClasses;
    };

    renderButtons = () => {
        return filters.map((filter) => {
            return (
                <button key={filter.name} className={this.classNames(filter.value)} onClick={()=>this.setFilter(filter.value)}>{filter.name}</button>
            )
        });
    };


    render() {
        return (
            <section>
                {this.props.isVisible &&
                    <nav className={'nav'}>
                        {this.renderButtons()}
                    </nav>
                }
            </section>
        )
    }
}