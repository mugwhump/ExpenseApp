
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import { filterByText, filterByDate } from '../actions/actions';
import ExpenseList from '../components/ExpenseList';
import TextFilter from '../components/TextFilter';
import DateFilter from '../components/DateFilter';

const cx = classNames.bind(styles);

/*
 * Top-level component. 
 * Connected to redux, subscribed to state changes. Passes action callbacks to children.
 * TODO: change css classes
 */
class FilterList extends Component {
    render (){
        const { filterList, filterByText, filterByDate } = this.props;
        return (
            <div className='filter-list'>
                <label>Search</label><br/>
                <TextFilter onEntrySave={filterByText} />
                <DateFilter filterByDate={filterByDate} />
                <ExpenseList filter={filterList.filter}
                    expenses={filterList.expenseList.expenses} />
            </div>
        );
    }
};

FilterList.propTypes = {
    filterList: PropTypes.object.isRequired,
    filterByText: PropTypes.func.isRequired, 
    filterByDate: PropTypes.func.isRequired, 
}

function mapStateToProps(state) {
    return {
        filterList: state.filterList
    };
}

export default connect(mapStateToProps, { filterByText, filterByDate })(FilterList);
