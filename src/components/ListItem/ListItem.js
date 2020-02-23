import React from 'react';
import './ListItem.css';


export default class ListItem extends React.Component {
    render() {
        return (
            <div className="ListItem-container">
                <form>
                    {this.props.items.map(item => {
                            return (
                                <div key={item.key}>
                                    <div  className="checkbox-label">
                                        <p >{item.value}</p>
                                    </div>
                                    <div className="checkbox">
                                        <input type="button" onClick={(e) => {
                                            this.props.onClick(item.key)
                                        }
                                        } value="Delete"/>
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