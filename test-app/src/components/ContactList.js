import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import 'flexboxgrid'


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
            <div class="row">
                 <div class="col-xs-12
                                    col-sm-8
                                    col-md-6
                                    col-lg-4">
                        <div class="box">
                            <div className="contacts">Contacts</div>
                <Card className="card">
                    <span className="title">Favorite Contacts</span>
                   
                    { this.props.favorites && this.props.favorites.map(contact => {
                        return (
                            <ListGroup variant="flush">
                            <ListGroup.Item onClick={ () => this.handleClick(contact) } className="select" key={contact.id} >
                                 <div className="userSmall"></div>
                                 <div>        
                                     <div className="favorite"></div>
                              <span className="userName">{contact.name}</span>
                                <div className="subTitle">{contact.companyName } </div>
    
                             
                                </div>
                             </ListGroup.Item>
                        </ListGroup>
                    )
                        })
                    }
                    
                    <span className="title">Others</span>
                    { this.props.others && this.props.others.map(contact => {
                        return (
                            <ListGroup variant="flush">
                          <ListGroup.Item onClick={ () => this.handleClick(contact) } className="select" key={contact.id}  > 
                            <div className="userSmall"></div>
                                 <div className="noFavorite"></div>
                                      <span className="userName">{contact.name} 
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