import React, { Component } from 'react';
import palpatine from "../../../static/assets/images/palpatine.jpg"

export default class DarkSidePower extends Component {
    constructor(props){
        super(props)

        this.state={
            adjective1: "",
            adjective2: "",
            adjective3: "",
            adjective4: "",
            pluralNoun1: "",
            pluralNoun2: "",
            noun1: "",
            noun2: "",
            noun3: "",
            noun4: "",
            adverb: "",
            verbing: "",
            lastName: "",
            verb: "",
            active: false,
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div className="page-content-wrapper" style={{backgroundImage:`url(${palpatine})`}}>
                <div className="content-wrapper">
                    <h1>The Power of the Dark Side</h1>
                    <h2>By Emperor Palpatine</h2>
                    {this.state.active === false ?(
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='noun1'
                            placeholder='Noun'
                            value={this.state.noun1}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='adjective1'
                            placeholder='Adjective'
                            value={this.state.adjective1}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='noun2'
                            placeholder='Noun'
                            value={this.state.noun2}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='pluralNoun1'
                            placeholder='Plural Noun'
                            value={this.state.pluralNoun1}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='verbing'
                            placeholder='Verb Ending in "ING"'
                            value={this.state.verbing}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='adjective2'
                            placeholder='Adjective'
                            value={this.state.adjective2}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='adverb'
                            placeholder='Adverb'
                            value={this.state.adverb}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='adjective3'
                            placeholder='Adjective'
                            value={this.state.adjective3}
                            onChange={this.handleChange}
                        />
                        
                        <input
                            type='text'
                            name='adjective4'
                            placeholder='Adjective'
                            value={this.state.adjective4}
                            onChange={this.handleChange}
                        />
                                            
                        <input
                            type='text'
                            name='pluralNoun2'
                            placeholder='Plural Noun'
                            value={this.state.pluralNoun2}
                            onChange={this.handleChange}
                        />
                                            
                        <input
                            type='text'
                            name='noun3'
                            placeholder='Noun'
                            value={this.state.noun3}
                            onChange={this.handleChange}
                        />
                                            
                        <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name of Person in Room'
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                                                                
                        <input
                            type='text'
                            name='noun4'
                            placeholder='Noun'
                            value={this.state.noun4}
                            onChange={this.handleChange}
                        />
                                            
                        <input
                            type='text'
                            name='verb'
                            placeholder='Verb'
                            value={this.state.verb}
                            onChange={this.handleChange}
                        />

                        <button type='submit'>Submit</button>
                    </form>): null}

                    {this.state.active === true ?(

                    <div class='result'>
                        <div class='text-wrapper'>
                            <p>{`As ${this.state.noun1} Sidious--Sith Lord and ${this.state.adjective1} leader of the Galactic Empire--I know firsthand how powerful the dark side of the Force is. If you become a Sith, a/an ${this.state.noun2} who uses the dark side of the Force, you'll have all the powers of the Jedi and more. Unlike the Jedi, who only work with the light side of the Force, the sith can use the dark side to stop the ${this.state.pluralNoun1} he or she love from ${this.state.verbing}. The Jedi would never try such a/an ${this.state.adjective2} thing. It's obvious to anyone who has studied the dark side that it is more powerful than the Jedi could ${this.state.adverb} imagine. The Jedi might tell you that the dark side is quicker, easier, and more ${this.state.adjective3}. I admit, that may be true. But those who join the dark side will know ${this.state.adjective4} power bejond their wildest ${this.state.pluralNoun2}. Like me and my ${this.state.noun3}, Darth ${this.state.lastName}, those who practice the dark side of the Force are destined to rule the ${this.state.noun4}! Join us or ${this.state.verb}!`}</p>
                        </div>
                        <button onSubmit={this.handleSubmit}>Try Again</button>
                    </div>
                    ): null}
                </div>
            </div>
        );
    }
}