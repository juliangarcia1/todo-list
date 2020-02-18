import React from 'react';
import './Title.css'

export default class Title extends React.Component {
    render(){
        return(
            <div className="Title-container">
                <div className="Title-img">
                    <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.jpg" alt="logo"/>
                </div>
                <div className="Title-moto">
                    <h1>This is the moto</h1>
                </div>
            </div>
        );
    }
}