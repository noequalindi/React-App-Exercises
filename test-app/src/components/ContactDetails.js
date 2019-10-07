import React, { Component } from 'react';

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
            <div>
                <button onClick={ () => this.goBack() } ><span>Back</span></button>
                { this.props.selectedContact && 
                    <div>
                        {this.props.selectedContact.name}
                    </div>
                }
            </div>
        );
    }
}