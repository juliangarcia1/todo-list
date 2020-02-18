import React from 'react';
import './TextField.css'

export default class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clickCount:0};
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState(state => ({
            clickCount: this.state.clickCount + 1
        }));
        console.log("It was clicked" + this.state.clickCount)
    }
    render(){
        return(
            <div className="TextField-form">
                <form action="">
                    <div className="textfield">
                        <input type="text" placeholder="Type text here"/>
                    </div>
                    <div className="button">
                        <input type="button" onClick={this.onClick}value="Add"/>
                    </div>
                </form>
            </div>
        );
    }
}