import React from 'react';
import './TextField.css'
import ListItem from '../ListItem/ListItem';
import { SOURCE_TYPE_LOCAL } from '../../constants';
export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {items: [], new_item: ''};
        this.state = {items: [], new_item: '', jsonKey:"items.json"};
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
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
        this.setState(previousState => ({
            items: [...previousState.items, {key: Date.now(),
                                             value: previousState.new_item}],
        }),()=>{this.saveList();});
            
        console.log("It was clicked" + this.state.new_item);

    }

    handleChange({target}) {
        this.setState(previousState => ({
            [target.name]: target.value
        }));

        console.log("It was clicked" + target);
    };

    onClickDelete(event, index) {
        event.preventDefault();
        var items = [...this.state.items];

        items = items.filter(item => item.key !== index);
        this.setState(previousState => ({
            items: items,
            new_item: previousState.new_item
        }), () => {this.saveList()});
    }

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
                <ListItem items={this.state.items} 
                          onClick={this.onClickDelete}
                />
            </div>
        );
    }
}