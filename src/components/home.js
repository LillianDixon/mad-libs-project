import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="content-wrapper">
                    <h1>Star Wars Mad Libs</h1>
                    <div className="list-wrapper">
                        <div className="list-item jedi">
                            <NavLink to='/power-of-force'>The Power of the Force</NavLink>
                        </div>
                        <div className="list-item sith">
                            <NavLink to='/power-of-dark-side'>The Power of the Dark Side</NavLink>
                        </div>
                        <div className="list-item normal">
                            <NavLink to='/wattos-junk-shop'>Watto's Junk Shop</NavLink>
                        </div>
                        <div className="list-item jedi">
                            <NavLink to='/familyTree'>Star Wars Family Tree</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}