import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import 'flexboxgrid'


export default class ContactList extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        let event = window.event;
        let targetElem = event.target;
        let className = targetElem.classList.value;

        if ('noFavorite' === className || 'favorite' === className) {
            this.props.onFavoriteClick(item, className);
        } else {
            this.props.onContactSelect(item);
        }

    }

    render() {
        return (
            <div className="row">
                 <div className="u-center col-lg-8">
                    <div className="box">
                        <div className="contacts">Contacts</div>
                            <Card className="card">
                                <span className="title">Favorite Contacts</span>

                                { this.props.favorites && this.props.favorites.map(contact => {
                                    return (
                                        <ListGroup key={contact.name} variant="flush">
                                            <ListGroup.Item onClick={ () => this.handleClick(contact) } className="select" key={contact.id} >
                                                {
                                                    contact.smallImageURL ?
                                                    <img src={ contact.smallImageURL} className="thumbnail"/>
                                                    :
                                                    <div className="userSmall" />
                                                }
                                                <div className="favoriteContainer">
                                                    <div className="favorite"></div>
                                                    <span className="userName">{contact.name}</span>
                                                <div className="subTitle">{contact.companyName } </div>
                                                </div>
                                            </ListGroup.Item>
                                    </ListGroup>
                                    )})
                                }

                                <span className="title">Others</span>
                                { this.props.others && this.props.others.map(contact => {
                                    return (
                                    <ListGroup key={contact.name} variant="flush">
                                        <ListGroup.Item onClick={ () => this.handleClick(contact) } className="select" key={contact.id}>
                                            {
                                                contact.smallImageURL ?
                                                <img src={ contact.smallImageURL} className="thumbnail"/>
                                                :
                                                <div className="userSmall" />
                                            }
                                            <div className="favoriteContainer">
                                                <div className="noFavorite" />
                                            </div>
                                            <span className="userName">
                                                {contact.name}
                                            </span>
                                            <div className="subTitle">{contact.companyName } </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    )
                                })
                                }
                            </Card>
                        </div>
                    </div>
             </div>

        );
    }
}