import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { DATEFILTERALL, DATEFILTERWEEK, DATEFILTERYEAR } from '../types/actionTypes.js';

const DateFilter = ({filterByDate}) => {
    const options = [ DATEFILTERALL, DATEFILTERWEEK, DATEFILTERYEAR ];
    //function option(o) {
        //return <option value="{o}"
    const changed = (obj) => {
        filterByDate(obj.target.value);
    }
    return (
        <select onChange={changed}>
            <option value={DATEFILTERALL}>All</option>
            <option value={DATEFILTERWEEK}>Last Week</option>
            <option value={DATEFILTERYEAR}>Last Year</option>
        </select>
    )
}

DateFilter.propTypes = {
    filterByDate: PropTypes.func.isRequired
}

export default DateFilter;
