import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ListItem.css';
import { addItem , deleteItem } from '../../actions/itemActions';
import {SOURCE_TYPE_LOCAL} from '../../constants';

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.saveList = this.saveList.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    saveList() {
        console.log('Saving List');
        const items = this.props.items;
        const jsonKey = this.props.jsonKey;
        if (this.props.jsonSource === SOURCE_TYPE_LOCAL) {
            window.localStorage.setItem(
                jsonKey,
                JSON.stringify(items)
            );
        }
    }
    
    onClickDelete(event, index) {
        event.preventDefault();
        this.props.actions.deleteItem(index).then(()=>this.saveList());
    }

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
                                                    this.onClickDelete(e, item.key)
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

const mapStateToProps = state => ({
    items: state.data.items,
    jsonSource: state.data.jsonSource,
    jsonKey: state.data.jsonKey
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addItem, deleteItem }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

