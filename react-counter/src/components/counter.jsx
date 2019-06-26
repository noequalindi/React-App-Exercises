import React, { Component } from 'react';
const product = 1;
 class Counter extends Component {
    /* constructor()
     {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
     } */

    state = {  
        value: this.props.value,
        //imageUrl: 'https://picsum.photos/200',
        //tags: ['tag1', 'tag2', 'tag3'],
    };
    handleIncrement = () =>
    {
        this.setState({value: this.state.value +1});
    }
    renderTags()
    {
        if(this.state.tags.length === 0) return <p>There are not tags!</p>
        return <ul>
        { this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
    }
    render() { 
        console.log(this.props) // Every React component has a property called props, js object that includes all the attributes
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = { this.handleIncrement }
             className="btn btn-secondary btn-sm">Increment</button>
            { /* this.state.tags.length === 0 && 'Please create a new tag'*/}
             { /* this.renderTags() */}
             <button className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
    getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += (this.state.count === 0) ? "warning" : "primary";
         return classes;
     }

    formatCount()
    {
        const { value }  = this.state;
        return this.state.value === 0? 'Zero' : this.state.value;
    }
} export default Counter
 