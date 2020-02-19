import React from 'react';
import './TextField.css'
import ListItem from '../ListItem/ListItem';

export default class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {clickCount:0,items:[], new_item:''};
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onClick(event){
        this.setState(previousState => ({
            clickCount: previousState.clickCount + 1,
            items: [...previousState.items, previousState.new_item],
        }));

        console.log("It was clicked" + this.state.new_item)
    }
    handleChange({target}){
        this.setState(previousState => ({
            [target.name]: target.value
        }));

        console.log("It was clicked" + target);
    }

    render(){
        return(
            <div className="TextField-form">
                <ListItem items={this.state.items}/>
                <form action="">
                    <div className="textfield">
                        <input type="text" name='new_item' value={this.state.new_item} onChange={this.handleChange} placeholder="Type text here"/>
                    </div>
                    <div className="button">
                        <input type="button" onClick={this.onClick}value="Add"/>
                    </div>
                </form>
            </div>
        );
    }
}