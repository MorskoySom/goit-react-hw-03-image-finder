import React, { Component } from 'react';
import { HeaderBlock, Forma, FormButton, FormInput } from './Searchbar.styled';

export class Searchbar extends Component {
    state = {
        inputQuery: "",
    }

    handleChange = (evt) => {
        this.setState({ inputQuery: evt.target.value.toLowerCase() });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.toSubmit(this.state.inputQuery);
        this.setState(({ inputQuery: '' }));
        // console.log(this.state.inputQuery);
    }

    render() {
        return (
            <HeaderBlock>
                <Forma onSubmit={this.handleSubmit}>
                    <FormButton type="submit">
                        <span>Search</span>
                    </FormButton>

                    <FormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputQuery}
                        onChange={this.handleChange}
                    />
                </Forma>
            </HeaderBlock>
        );
    }
}