import React, { Component } from 'react';
import 'flexboxgrid'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
export default class ContactDetails extends Component {

    goBack() {
        if (this.props.goBack) {
            this.props.goBack();
        }
    }

    renderBirthdate(date) {
        date = date.replace('-', '/');
        let updated = new Date(date);
        const month = updated.toLocaleString('default', { month: 'long' });

        return `${month} ${updated.getDate()}, ${updated.getFullYear()}`;
    }

    renderDataRow = (title, value, type) => {
        if (value) {
            if ('Address' !== title) {
                return (
                    <React.Fragment>
                        <span className="title">{title}</span>
                        <ListGroupItem className="userName">
                            {
                                'Birthdate' === title &&
                                this.renderBirthdate(value)
                            }
                            {
                                'Birthdate' !== title &&
                                value
                            }
                            {
                                type &&
                                <span className="subTitle">{type}</span>
                            }
                        </ListGroupItem>
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment>
                        <span className="title">{title}</span>
                        <ListGroupItem className="userName">
                            { `${value.street}, ${value.city}, ${value.state} ${value.zipCode}, ${value.country}` }
                        </ListGroupItem>
                    </React.Fragment>
                )
            }
        }
    }

    render() {
        return (
            <div className="row">
                { this.props.selectedContact &&
                    <div className="u-center col-lg-8">
                        <div className="box">
                        <div className="contactLink">
                                <a className="back" onClick={ () => this.goBack() }>
                                   &lt; Contacts
                                </a>
                                {
                                    this.props.selectedContact.isFavorite ?
                                    <div className="contactHeader-icon favorite" />
                                    :
                                    <div className="contactHeader-icon noFavorite" />
                                }
                            </div>
                            <Card className="card">
                                <Card.Img variant="top" src={ this.props.selectedContact.largeImageURL} className="image"/>
                                <Card.Body>
                                    <Card.Title className="titleName"> { this.props.selectedContact.name } </Card.Title>
                                    <Card.Title className="subDetail">
                                        { this.props.selectedContact.companyName }
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">

                                    { this.renderDataRow('Phone', this.props.selectedContact.phone.home, 'Home') }
                                    { this.renderDataRow('Phone', this.props.selectedContact.phone.mobile, 'Mobile') }
                                    { this.renderDataRow('Phone', this.props.selectedContact.phone.work, 'Work') }
                                    { this.renderDataRow('Address', this.props.selectedContact.address) }
                                    { this.renderDataRow('Birthdate', this.props.selectedContact.birthdate) }
                                    { this.renderDataRow('Email', this.props.selectedContact.emailAddress) }
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                }
            </div>
        );
    }
}