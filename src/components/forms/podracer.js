import React, { Component } from 'react';

import podracing from "../../../static/assets/images/podracing.jpg"

export default class Podracer extends Component {
    constructor(props){
        super(props)

        this.state={
            noun: "",
            adjective1: "",
            adjective2: "",
            adjective3: "",
            adjective4: "",
            adjective5: "",
            adjective6: "",
            adjective7: "",
            verbing1: "",
            verbing2: "",
            pluralNoun1: "",
            pluralNoun2: "",
            bodyPartPlural: "",
            verb: "",
            active: false,
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.homeClick = this.homeClick.bind(this);
    }

    homeClick(e){
        this.props.history.push('/')
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            active: !this.state.active
        })
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <body style={{backgroundImage:`url(${podracing})`}}>
                <div className="page-content-wrapper jedi" >
                    <div className="content-wrapper">
                        <h1>Piloting a Podracer,</h1>
                        <h2>By Young Anakin Skywalker</h2>
                        {this.state.active === false ?(
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="input-wrapper">
                                                                
                            <div className="input">
                                    <input
                                        type='text'
                                        name='noun'
                                        placeholder='Noun'
                                        value={this.state.noun}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective1'
                                        placeholder='Adjective'
                                        value={this.state.adjective1}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='verbing1'
                                        placeholder='Verb Ending in "ing"'
                                        value={this.state.verbing1}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective2'
                                        placeholder='Adjective'
                                        value={this.state.adjective2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='pluralNoun1'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun1}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                                                    
                                <div className="input">                   
                                    <input
                                        type='text'
                                        name='bodyPartPlural'
                                        placeholder='Part of Body (Plural)'
                                        value={this.state.bodyPartPlural}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective3'
                                        placeholder='Adjective'
                                        value={this.state.adjective3}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='verbing2'
                                        placeholder='Verb Ending in "ing"'
                                        value={this.state.verbing2}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective4'
                                        placeholder='Adjective'
                                        value={this.state.adjective4}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='verb'
                                        placeholder='Verb'
                                        value={this.state.verb}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective5'
                                        placeholder='Adjective'
                                        value={this.state.adjective5}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective6'
                                        placeholder='Adjective'
                                        value={this.state.adjective6}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='pluralNoun2'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun2}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='adjective7'
                                        placeholder='Adjective'
                                        value={this.state.adjective7}
                                        onChange={this.handleChange}
                                    />
                                </div>

                            </div>

                                                    
                            <div className="buttons">
                                <button type='submit'>submit</button>
                                <button onClick={this.homeClick}>Home</button>
                            </div>
                        </form>): null}

                        {this.state.active === true ?(

                        <div class='result'>
                            <div class='text-wrapper'>
                                <p>As far as I know, I'm the only human <span>{`${this.state.noun}`}</span> who has ever competed in a/an <span>{`${this.state.adjective1}`}</span>-stakes Podrace and won. If you ever find yourself at the <span>{`${this.state.verbing1}`}</span> line at one of these competitions, here's what you need to do to make sure you come out of the race <span>{`${this.state.adjective2}`}</span>. <br/>1. Trust your <span>{`${this.state.pluralNoun1}`}</span>: Even if you can't see things before they happen, like me, you can at least keep your <span>{`${this.state.bodyPartPlural}`}</span> open and look out for <span>{`${this.state.adjective3}`}</span> pilots or debis <span>{`${this.state.verbing2}`}</span> at you. <br/>2. Keep steering: The key to being a/an <span>{`${this.state.adjective4}`}</span> Podracer pilot is knowing how to <span>{`${this.state.verb}`}</span>. Hug those <span>{`${this.state.adjective5}`}</span> curves and don't let them intimidate you. <br/>3. Always remember, have fun: Your Podracer might look like a/an <span>{`${this.state.adjective6}`}</span> hunk of <span>{`${this.state.pluralNoun2}`}</span>, but if you know how to use it, Podracing can be <span>{`${this.state.adjective7}`}</span>!</p>
                            </div>
                            
                            <div className="buttons">
                                <button onClick={this.handleSubmit}>Try Again</button>
                                <button onClick={this.homeClick}>Home</button>
                            </div>
                        </div>
                        ): null}
                    </div>
                </div>
            </body>
        );
    }
}