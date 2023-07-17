import React from 'react';
import PropTypes from "prop-types";

import { FormStyled, InputStyled, BtnStyled } from "./ContactForm.styled";


export class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }

    saveFormState = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    clearForm = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    save = e => {
        e.preventDefault();
        const nameV = e.currentTarget.name.value;
        const numV = e.currentTarget.number.value;
        this.props.onAddContact(nameV, numV)
        this.clearForm();
    }

    render() {
        const { name, number } = this.state;

        return (
            <FormStyled
                onSubmit={this.save}
            // onChange={this.saveFormState}
            >
                <label>Name</label>
                <InputStyled
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    value={name}
                    onChange={this.saveFormState}
                />
                <label>Phone</label>
                <InputStyled
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.saveFormState}
                />
                <BtnStyled type="submit">save</BtnStyled>
            </FormStyled>
        )
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired
}