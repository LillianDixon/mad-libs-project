import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="content-wrapper">
                    <h1>Star Wars Mad Libs</h1>
                    <div className="list-wrapper">
                        <div className="list-item">
                            <NavLink to='/power-of-force'>The Power of the Force</NavLink>
                        </div>
                        <div className="list-item">
                            <NavLink to='/power-of-dark-side'>The Power of the Dark Side</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}