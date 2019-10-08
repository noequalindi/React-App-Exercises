import React, { Component } from 'react';
import ContactServices from '../services/ContactServices';
import ContactList from '../components/ContactList';
import ContactDetails from '../components/ContactDetails';
import _ from 'lodash';

export default class ContactView extends Component {
    constructor(props) {
        super(props);

        this._handleContactSelection = this._handleContactSelection.bind(this);
        this._handlegoBack = this._handleGoBack.bind(this);

        this.state = {
            favorite: [],
            noFavorite: [],
            selectedContact: false
        }
    }

    componentDidMount() {
        ContactServices.getContacts()
        .then(res => {
            let favoriteList = res.data.filter(contact => contact.isFavorite)
            let noFavoriteList = res.data.filter(contact => !(contact.isFavorite))
            this.setState({
                favorite: favoriteList,
                noFavorite: noFavoriteList
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

    _handleFavoriteClick = (contact, type) => {
        let fromList = _.cloneDeep(this.state[type]);
        let toList = _.cloneDeep(this.state['favorite' === type ? 'noFavorite' : 'favorite']);

        let idx = fromList.findIndex(item => item.id === contact.id);
        if (idx > -1) {
            let extracted = fromList.splice(idx, 1)[0];
            extracted.isFavorite = !extracted.isFavorite;
            toList = [...toList, extracted];
        }

        this.setState({
            favorite: 'favorite' === type ? fromList : toList,
            noFavorite: 'noFavorite' === type ? fromList : toList
        });
    }

    render() {
        return (
            <div>
                { !this.state.selectedContact &&
                    <ContactList
                        onFavoriteClick={this._handleFavoriteClick}
                        onContactSelect={this._handleContactSelection}
                        favorites={this.state.favorite}
                        others={this.state.noFavorite}
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