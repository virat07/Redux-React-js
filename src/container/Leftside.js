import React, { Component } from 'react';


export default class Leftside extends Component {
    render() {
        return (
            <div className="left-container" id="category">
                <ul className='List' id="List" onClick={(e) => this.props.handleclick(e, this.props.bookDetail)}>
                    {this.props.category ? Object.keys(this.props.category).map((key) => {
                        return <li key={key} id={key}>{this.props.category[key]}
                        </li>
                    }) : ''}
                </ul>
            </div>
        )
    }
}