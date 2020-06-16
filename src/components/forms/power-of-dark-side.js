import React, { Component } from 'react';

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
            bodyPart1: "",
            bodyPart2: "",
            bodyPartPlural: "",
            adverb1: "",
            adverb2: "",
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
            <div class='mad-libs-wrapper'>
                <h1>The Power of the Dark Side</h1>
                <h2>By Emperor Palpatine</h2>
                {this.state.active === false ?(
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='adjective1'
                        placeholder='Adjective'
                        value={this.state.adjective1}
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
                        name='noun1'
                        placeholder='Noun'
                        value={this.state.noun1}
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
                        name='bodyPart1'
                        placeholder='Part of Body'
                        value={this.state.bodyPart1}
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
                        name='pluralNoun2'
                        placeholder='Plural Noun'
                        value={this.state.pluralNoun2}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='bodyPart2'
                        placeholder='Part of Body'
                        value={this.state.bodyPart2}
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
                        name='adverb1'
                        placeholder='Adverb'
                        value={this.state.adverb1}
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
                        name='bodyPartPlural'
                        placeholder='Part of Body (Plural)'
                        value={this.state.bodyPartPlural}
                        onChange={this.handleChange}
                    />
                                        
                    <input
                        type='text'
                        name='adverb2'
                        placeholder='Adverb'
                        value={this.state.adverb2}
                        onChange={this.handleChange}
                    />

                    <button type='submit'>Submit</button>
                </form>): null}

                {this.state.active === true ?(

                <div class='result'>
                    <div class='text-wrapper'>
                        <p>{`The Force is a mystical, ${this.state.adjective1} power. As Jedi Master Obi-Wan Kenobi once said, "The Fource is an energy field, created by all living ${this.state.pluralNoun1}, that surrounds us, penetrates us, and binds the ${this.state.noun1} together."  Using the power of the Force, a Jedi can do many ${this.state.adjective2} things, like using the Force to exercise ${this.state.bodyPart1} control over ${this.state.adjective3}-minded ${this.state.pluralNoun2}. A Jedi can also use the Force to move objects with his or her ${this.state.bodyPart2}. It doesn't matter how ${this.state.adjective4} these objects are; it only matters how ${this.state.adverb1} the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke ${this.state.noun2}-walker: "Your ${this.state.bodyPartPlural} can decieve you. Don't trust them." Instead a Jedi should ${this.state.adverb2} trust in the Force.`}</p>
                    </div>
                    <button onSubmit={this.handleSubmit}>Try Again</button>
                </div>
                ): null}
            </div>
        );
    }
}