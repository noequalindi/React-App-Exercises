import React, { Component } from 'react';
import 'flexboxgrid'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
export default class ContactDetails extends Component {
    
    constructor(props) { 
        super(props);
    }

    goBack() {
        if (this.props.goBack) {
            this.props.goBack();
        }
    }

    render() {
        return (
            <div class="row">
            
                { this.props.selectedContact && 
                        <div class="col-xs-12
                                    col-sm-8
                                    col-md-6
                                    col-lg-4">
                        <div class="box">
                        <div class="contactLink">  <a class="back" onClick={ () => this.goBack() }> Contacts </a> 
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
                            <span className="title"> Phone </span>
                            <ListGroupItem  className="userName"> { this.props.selectedContact.phone.home } <span className="subTitle"> Home </span></ListGroupItem>
                            <span className="title"> Phone </span>
                            <ListGroupItem  className="userName"> { this.props.selectedContact.phone.mobile } <span className="subTitle">  Mobile</span></ListGroupItem>
                            <span className="title"> Phone </span>
                            <ListGroupItem  className="userName"> { this.props.selectedContact.phone.work } <span className="subTitle">Work </span> </ListGroupItem>
                            <span className="title"> Address </span>
                            <ListGroupItem  className="userName"> { ` ${this.props.selectedContact.address.street},  ${this.props.selectedContact.address.city },  ${this.props.selectedContact.address.state }  ${this.props.selectedContact.address.zipCode },  ${this.props.selectedContact.address.country} `}</ListGroupItem>
                            <span className="title"> Birthdate </span>
                            <ListGroupItem  className="userName" > { this.props.selectedContact.birthdate }</ListGroupItem>
                            <span className="title"> Email </span>
                            <ListGroupItem  className="userName"> { this.props.selectedContact.email }</ListGroupItem>
                        </ListGroup>
                        </Card>
                    </div>
                    </div>
                }
            </div>
        );
    }
}