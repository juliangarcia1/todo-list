import React from 'react';
import './ListItem.css';


export default class ListItem extends React.Component {
    render() {
        return(
            <div className="ListItem-container">
                <form >
                    <p>New Item</p><input type="checkbox" value="New Item"/>
                </form>
            </div>       
        );
    }
}