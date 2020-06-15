import React, { Component } from 'react';

export default class SickDayForm extends Component {
    constructor(props){
        super(props)

        this.state={
            sillyWord1: '',
            lastName: '',
            illness: '',
            pluralNoun: '',
            adjOne: '',
            adjTwo: '',
            sillyWord2: '',
            place: '',
            number: '',
            adjThree: '',
            active: false
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
            <div>
                Sick Day
                {this.state.active === false ?(
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='sillyWord1'
                        placeholder='Silly Word'
                        value={this.state.sillyWord1}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='illness'
                        placeholder='Illness'
                        value={this.state.illness}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='pluralNoun'
                        placeholder='Plural Noun'
                        value={this.state.pluralNoun}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='adjOne'
                        placeholder='Adjective'
                        value={this.state.adjOne}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='adjTwo'
                        placeholder='Adjective'
                        value={this.state.adjTwo}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='sillyWord2'
                        placeholder='Silly Word'
                        value={this.state.sillyWord2}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='place'
                        placeholder='Place'
                        value={this.state.place}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='number'
                        placeholder='Number'
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                    
                    <input
                        type='text'
                        name='adjThree'
                        placeholder='Adjective'
                        value={this.state.adjThree}
                        onChange={this.handleChange}
                    />

                    <button type='submit'>Submit</button>
                </form>): null}

                {this.state.active === true ?(

                <div>
                    <div>
                        <p>'Dear School Nurse:'</p>
                        <p>{` ${this.state.sillyWord1} ${this.state.lastName} will not be attending school today. He/She has come down with a case of ${this.state.illness} and has horrible ${this.state.pluralNoun} and a/an ${this.state.adjOne} fever. We have made an appointment with the ${this.state.adjTwo} Dr. ${this.state.sillyWord2} who studied for many years in ${this.state.place} and has ${this.state.number} degrees in pediatrics. He will send you all the information you need.`}</p>
                        <p>'Thank you!</p>
                        <p>'Sincerely'</p>
                        <p>{`Mrs. ${this.state.adjThree}`}</p>
                    </div>
                    <button onSubmit={this.handleSubmit}>Try Again</button>
                </div>
                ): null}
            </div>
        );
    }
}