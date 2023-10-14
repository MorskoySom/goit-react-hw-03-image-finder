import React, { Component } from 'react';
import { HeaderBlock, Forma, FormButton, FormInput } from './Searchbar.styled';

export class Searchbar extends Component {
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
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
                    />
                </Forma>
            </HeaderBlock>
        );
    }
}