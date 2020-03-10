import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './TextField.css'
import ListItem from '../ListItem/ListItem';
import { addItem, deleteItem } from '../../actions/itemActions';
import { SOURCE_TYPE_LOCAL } from '../../constants';
class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], new_item: ''};
        this.new_item = null;
        this.state = {items: [], new_item: '', jsonKey:"items.json"};
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.saveList = this.saveList.bind(this);
        this.readList = this.readList.bind(this);
    }

    componentDidMount() {
        this.readList();   
    }

    readList(){
        const json = window.localStorage.getItem(this.state.jsonKey) || JSON.stringify([], null, 2)
        const newJson = JSON.parse(json)
        this.setState(previousState => ({ items: newJson }));
    }

    saveList() {
        const items = this.state.items;
        const jsonKey = this.state.jsonKey;
        if (this.props.source === SOURCE_TYPE_LOCAL) {
            window.localStorage.setItem(
                jsonKey,
                JSON.stringify(items)
            );
        }
    }

    onClickAdd(event) {
        event.preventDefault();
        this.setState(previousState => {
            const newItem = {key: Date.now(), value: previousState.new_item};
            this.props.actions.addItem(newItem);
            return {items: [...previousState.items, newItem ]}
        },()=>{this.saveList();});
    }

    handleChange({target}) {
        this.setState(previousState => ({
            [target.name]: target.value
        }));

        console.log("It was clicked" + target);
    };

    render() {
        return (
            <div className="TextField-form">
                <form action="">
                    <div className="TextField-text">
                        <input type="text"  
                               name='new_item' 
                               onChange={this.handleChange}
                               placeholder="Type text here"
                        />
                    </div>
                    <div className="TextField-button">
                        <input type="button" 
                               onClick={this.onClickAdd} 
                               value="Add"
                        />
                    </div>
                </form>
                <ListItem/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    items: state.data.items
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addItem, deleteItem }, dispatch)
});
 
export default connect(mapStateToProps, mapDispatchToProps)(TextField);