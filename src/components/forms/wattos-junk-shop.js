import React, { Component } from 'react';
import watto from "../../../static/assets/images/watto.jpg"

export default class WattosJunkShop extends Component {
    constructor(props){
        super(props)

        this.state={
            verbing1: "",
            verbing2: "",
            noun1: "",
            noun2: "",
            noun3: "",
            pluralNoun1: "",
            pluralNoun2: "",
            pluralNoun3: "",
            pluralNoun4: "",
            adjective1: "",
            adjective2: "",
            adjective3: "",
            verb: "",
            number: "",
            bodyPartPlural: "",
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
            <body
            style={{backgroundImage:`url(${watto})`}}
            >
                <div className="page-content-wrapper normal" >
                    <div className="content-wrapper">
                        <h1>Watto's Junk Shop</h1>
                        {this.state.active === false ?(
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-wrapper">
                                
                            <div className="input">
                                    <input
                                        type='text'
                                        name='verbing1'
                                        placeholder='Verb Ending in "ING"'
                                        value={this.state.verbing1}
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
                                        name='pluralNoun2'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">
                                    <input
                                        type='text'
                                        name='verbing2'
                                        placeholder='Verb Ending in "ING"'
                                        value={this.state.verbing2}
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
                                        name='verb'
                                        placeholder='Verb'
                                        value={this.state.verb}
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
                                        name='pluralNoun3'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun3}
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
                                        name='adjective3'
                                        placeholder='Adjective'
                                        value={this.state.adjective3}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="input">
                                    <input
                                        type='text'
                                        name='bodyPartPlural'
                                        placeholder='Body Part (Plural)'
                                        value={this.state.bodyPartPlural}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">                    
                                    <input
                                        type='text'
                                        name='pluralNoun4'
                                        placeholder='Plural Noun'
                                        value={this.state.pluralNoun4}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                
                                <div className="input">                    
                                    <input
                                        type='text'
                                        name='number'
                                        placeholder='number'
                                        value={this.state.number}
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
                                <p>If you're <span>{`${this.state.verbing1}`}</span> in the Outer Rim Territories and you need spare <span>{`${this.state.pluralNoun1}`}</span> for your space-<span>{`${this.state.noun1}`}</span> or other odds and <span>{`${this.state.pluralNoun2}`}</span>, the place to go is Watto's Junk Shop. Here you can find everything from robots that jump like Mexican <span>{`${this.state.verbing2}`}</span> beans to replacement wires for your <span>{`${this.state.adjective1}`}</span> droid so that is can <span>{`${this.state.verb}`}</span> until it blows a/an <span>{`${this.state.noun2}`}</span>. Be careful what kind of money you have in your <span>{`${this.state.noun3}`}</span> because Watto doesn't take Republic <span>{`${this.state.pluralNoun3}`}</span>. You may have to barter with something <span>{`${this.state.adjective2}`}</span> that you own. The greedy and <span>{`${this.state.adjective3}`}</span> Watto would love to get his grimy <span>{`${this.state.bodyPartPlural}`}</span> on anything that's precious to you. And don't even think about using a Jedi mind trick on Watto -- when he says something costs ten <span>{`${this.state.pluralNoun4}`}</span>, you'd better pay up, or he'll raise the price to <span>{`${this.state.number}`}</span> <span>{`${this.state.pluralNoun4}`}</span>!</p>
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