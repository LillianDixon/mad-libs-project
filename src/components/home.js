import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                Welcome to mad libs
                <NavLink to='/sick-day-form'>Sick Day</NavLink>
                <NavLink to='/power-of-force'>The Power of the Force</NavLink>
            </div>
        );
    }
}