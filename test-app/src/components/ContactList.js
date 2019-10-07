import React, { Component } from 'react';

export default class ContactList extends Component {
    
    constructor(props) { 
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) { 
        if (this.props.onContactSelect) {
            this.props.onContactSelect(item);
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <span>Favorites</span>
                    { this.props.favorites && this.props.favorites.map(contact => {
                        return (<li key={contact.id}>
                            <div onClick={ () => this.handleClick(contact)}>
                                <span>{contact.name}</span>
                            </div>
                        </li>)
                    })}
                    <span>Others</span>
                    { this.props.others && this.props.others.map(contact => {
                        return (<li key={contact.id}>
                            <div onClick={ () => this.handleClick(contact)}>
                                <span>{contact.name}</span>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        );
    }
}