import React from 'react';
import './Title.css'

export default class Title extends React.Component {
    render(){
        return(
            <div className="Title-container">
                <div className="Title-moto">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}