import React from 'react';
import './ListItem.css';


export default class ListItem extends React.Component {
    render() {
        return(
            <div className="ListItem-container">
                <form >
                    {this.props.items.map((value, index)=>{
                        return(
                        <div><p key={index}>{value}</p> <input type="checkbox" value="New Item" /> </div>
                        );
                    }
                    )}
                </form>
            </div>       
        );
    }
}