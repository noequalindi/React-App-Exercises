import React, { Component } from 'react';
import ContactServices from '../services/ContactServices';
import ContactList from '../components/ContactList';
import ContactDetails from '../components/ContactDetails';

export default class ContactView extends Component {
    constructor(props) { 
        super(props);

        this._handleContactSelection = this._handleContactSelection.bind(this);
        this._handlegoBack = this._handleGoBack.bind(this);

        this.state = {
            favorites: [],
            others: [],
            selectedContact: false
        }
    }

    componentDidMount() {
        ContactServices.getContacts()
        .then(res => {
            let favoriteList = res.data.filter(contact => contact.isFavorite)
            let otherList = res.data.filter(contact => !(contact.isFavorite))
            this.setState({ 
                favorites: favoriteList, 
                others: otherList                
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    _handleContactSelection = (item) => {
        this.setState({selectedContact: item});
    }

    _handleGoBack = () => {
        this.setState({selectedContact: null});
    }

    render() {
        return (
            <div>
                { !this.state.selectedContact && 
                    <ContactList
                        onContactSelect={this._handleContactSelection} 
                        favorites={this.state.favorites} 
                        others={this.state.others} 
                    />
                }
                
                {
                    this.state.selectedContact &&
                    <ContactDetails goBack={this._handleGoBack } selectedContact={this.state.selectedContact} />
                }
            </div>
        );
    }
}