import React, { Component } from 'react';

import ObiWanKenobi from "../../../static/assets/images/obi-wan-kenobi.jpg"

export default class ForcePower extends Component {
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
            bodyPart1: "",
            bodyPart2: "",
            bodyPartPlural: "",
            adverb1: "",
            adverb2: "",
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
            <body style={{backgroundImage:`url(${ObiWanKenobi})`}}>
                <div className="page-content-wrapper jedi" >
                    <div className="content-wrapper">
                        <h1>The Power of the Force</h1>
                        {this.state.active === false ?(
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="input-wrapper">
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
                                        name='pluralNoun1'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun1}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='noun1'
                                        placeholder='Noun'
                                        value={this.state.noun1}
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
                                        name='bodyPart1'
                                        placeholder='Part of Body'
                                        value={this.state.bodyPart1}
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
                                        name='pluralNoun2'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='bodyPart2'
                                        placeholder='Part of Body'
                                        value={this.state.bodyPart2}
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
                                        name='adverb1'
                                        placeholder='Adverb'
                                        value={this.state.adverb1}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                
                                <div className="input">               
                                    <input
                                        type='text'
                                        name='noun2'
                                        placeholder='Noun'
                                        value={this.state.noun2}
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
                                        name='adverb2'
                                        placeholder='Adverb'
                                        value={this.state.adverb2}
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
                                <p>The Force is a mystical, <span>{`${this.state.adjective1}`}</span> power. As Jedi Master Obi-Wan Kenobi once said, "The Fource is an energy field, created by all living <span>{`${this.state.pluralNoun1}`}</span>, that surrounds us, penetrates us, and binds the <span>{`${this.state.noun1}`}</span> together."  Using the power of the Force, a Jedi can do many <span>{`${this.state.adjective2}`}</span> things, like using the Force to exercise <span>{`${this.state.bodyPart1}`}</span> control over <span>{`${this.state.adjective3}`}</span>-minded <span>{`${this.state.pluralNoun2}`}</span>. A Jedi can also use the Force to move objects with his or her <span>{`${this.state.bodyPart2}`}</span>. It doesn't matter how <span>{`${this.state.adjective4}`}</span> these objects are; it only matters how <span>{`${this.state.adverb1}`}</span> the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke <span>{`${this.state.noun2}`}</span>-walker: "Your <span>{`${this.state.bodyPartPlural}`}</span> can decieve you. Don't trust them." Instead a Jedi should <span>{`${this.state.adverb2}`}</span> trust in the Force.</p>
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