import React from 'react';
import './ListItem.css';


export default class ListItem extends React.Component {
    render() {
        return (
            <div className="ListItem-container">
                <form>
                    {this.props.items.map(item => {
                            return (
                                <div key={item.key} className="ListItem-element">
                                    <div  className="ListItem-label">
                                        <p >{item.value}</p>
                                    </div>
                                    <div className="ListItem-button">
                                        <input type="button" 
                                               onClick={(e) => {
                                                    this.props.onClick(e, item.key)
                                                    }
                                                } 
                                               value="Delete"/>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </form>
            </div>
        );
    }
}