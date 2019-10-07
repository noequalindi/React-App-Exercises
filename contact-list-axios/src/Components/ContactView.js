import React from 'react'
import PropTypes from 'prop-types';
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';

class ContactView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            contactName: this.props.contactName,
            image: this.props.image,
            companyName: this.props.companyName,
            phone: this.props.phone,
            address: this.props.addres,
            birthdate: this.props.birthdate,
            mail: this.props.mail

        }
    }
    componentDidMount() {
        this.setState({
            contactName: this.props.contactName,
            image: this.props.image,
            companyName: this.props.companyName,
            phone: this.props.phone,
            address: this.props.addres,
            birthdate: this.props.birthdate,
            mail: this.props.mail
        });
    }


render () {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.image} />
  <Card.Body>
    <Card.Title>{this.state.contactName}</Card.Title>
    <Card.Text>
     {this.state.companyName}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.state.phone}</ListGroupItem>
    <ListGroupItem>{this.state.phone}</ListGroupItem>
    <ListGroupItem>{this.state.phone}</ListGroupItem>
    <ListGroupItem>{this.state.phone}</ListGroupItem>
    <ListGroupItem>{this.state.address}</ListGroupItem>
    <ListGroupItem>{this.state.birthdate}</ListGroupItem>
    <ListGroupItem>{this.state.mail}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#"></Card.Link>
    <Card.Link href="#"></Card.Link>
  </Card.Body>
</Card>
    )}
}

ContactView.propTypes = {
    contactName: PropTypes.object,
    image: PropTypes.object,
    companyName: PropTypes.object,
    phone: PropTypes.object,
    address: PropTypes.object,
    birthdate: PropTypes.object,
    mail: PropTypes.object
};

export default ContactView