import React, { Component } from 'react';

import family from "../../../static/assets/images/family.jpg"

export default class FamilyTree extends Component {
    constructor(props){
        super(props)

        this.state={
            adjective1: "",
            adjective2: "",
            adjective3: "",
            personInRoom1: "",
            personInRoom2: "",
            personInRoom3: "",
            personInRoom4: "",
            celebrity: "",
            adverb1: "",
            adverb2: "",
            pluralNoun: "",
            sillyWord: "",
            celebrityFemale: "",
            verbing: "",
            noun1: "",
            noun2: "",
            noun3: "",
            noun4: "",
            noun5: "",
            noun6: "",
            bodyPart: "",
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
            <body style={{backgroundImage:`url(${family})`}}>
                <div className="page-content-wrapper jedi" >
                    <div className="content-wrapper">
                        <h1>Star Wars Family Tree</h1>
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
                                        name='adjective2'
                                        placeholder='Adjective'
                                        value={this.state.adjective2}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='personInRoom1'
                                        placeholder='Person In Room (Male)'
                                        value={this.state.personInRoom1}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='personInRoom2'
                                        placeholder='Person In Room (Male)'
                                        value={this.state.personInRoom2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='celebrity'
                                        placeholder='Celebrity'
                                        value={this.state.celebrity}
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
                                        name='personInRoom3'
                                        placeholder='Person In Room (Male)'
                                        value={this.state.personInRoom3}
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
                                        name='pluralNoun'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='sillyWord'
                                        placeholder='Silly Word'
                                        value={this.state.sillyWord}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='celebrityFemale'
                                        placeholder='Female Celebrity'
                                        value={this.state.celebrityFemale}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='verbing'
                                        placeholder='Verb Ending in"ing"'
                                        value={this.state.verbing}
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
                                        name='noun2'
                                        placeholder='Noun'
                                        value={this.state.noun2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='noun3'
                                        placeholder='Noun'
                                        value={this.state.noun3}
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

                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='personInRoom4'
                                        placeholder='Person In Room (Male)'
                                        value={this.state.personInRoom4}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='noun4'
                                        placeholder='Noun'
                                        value={this.state.noun4}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='noun5'
                                        placeholder='Noun'
                                        value={this.state.noun5}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='noun6'
                                        placeholder='Noun'
                                        value={this.state.noun6}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='bodyPart'
                                        placeholder='Part of Body'
                                        value={this.state.bodyPart}
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
                                <p>A review of the <span>{`${this.state.adjective1}`}</span> main characters in the <span>{`${this.state.adjective2}`}</span> saga, <i>Star Wars</i>:<br/><strong>Darth Vader (aka Anakin Skywalker):</strong> Father of <span>{`${this.state.personInRoom1}`}</span> Skywalker and Princess Lea Organa. Apprentice to <span>{`${this.state.personInRoom2}`}</span> and Emperor <span>{`${this.state.celebrity}`}</span>. <span>{`${this.state.adverb1}`}</span> married Padme Amidala. <br/><strong>Obi-Wan Kenobi:</strong> Also known as Old <span>{`${this.state.personInRoom3}`}</span>. Jedi Master to the  <span>{`${this.state.adjective3}`}</span> Jedi <span>{`${this.state.pluralNoun}`}</span>, Anakin and Luke Skywalker.<br/><strong>Luke Skywalker:</strong> Son of Darth <span>{`${this.state.sillyWord}`}</span> and Princess <span>{`${this.state.celebrityFemale}`}</span>. After many years of <span>{`${this.state.verbing}`}</span>, became a Jedi <span>{`${this.state.noun1}`}</span> like his father.<br/><strong>Princess Leia Organa:</strong> The twin <span>{`${this.state.noun1}`}</span> of Luke <span>{`${this.state.noun3}`}</span>-walker. <span>{`${this.state.adverb2}`}</span> in love with <span>{`${this.state.personInRoom4}`}</span> Solo.<br/><strong>Han Solo:</strong> First <span>{`${this.state.noun4}`}</span> of the Millennium <span>{`${this.state.noun5}`}</span>. This space cow-<span>{`${this.state.noun6}`}</span> has a/an <span>{`${this.state.bodyPart}`}</span> of gold (though he tries hard to hide it).</p>
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