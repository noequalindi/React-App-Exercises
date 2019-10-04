
import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';

class ContactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: [],
            others: []
        }
    }
  
    componentDidMount() {
        axios.get(`https://s3.amazonaws.com/technical-challenge/v3/contacts.json`).then(res => {
            console.log(res)  
            let favoriteList = res.data.filter(contact => contact.isFavorite)
            let otherList = res.data.filter(contact => !(contact.isFavorite))
            this.setState({ favorites: favoriteList, 
                            others: otherList                
            })
        })
    }

    render() {
        return (
            <Tab.Container id="" defaultActiveKey="#link1" action variant="dark">
            <Row>
              <Col sm={4}>
                <ListGroup>      
               <span> Favorites </span>
               { this.state.favorites && this.state.favorites.map(contact =>  
               <ListGroup.Item action href={contact.id} onClick="dark"> <tr key={contact.id}> { contact.name }  </tr>      
                </ListGroup.Item>)} 
                <span> Others </span>
              
                { this.state.others && this.state.others.map(contact =>   <ListGroup.Item action href={contact.id} onClick="dark"> <tr key={contact.id}>{ contact.name } </tr>  </ListGroup.Item>)}

                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
        {/*  <Sonnet /> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
       {/*  <Sonnet /> */}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        )
    }
} export default ContactList