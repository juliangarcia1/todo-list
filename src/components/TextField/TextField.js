import React from 'react';
import './TextField.css'
import ListItem from '../ListItem/ListItem';
import Save from '../Save/Save';
export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {items: [], new_item: ''};
        this.state = {items: [], new_item: '', jsonKey:"items.json"};
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        const filePath = './items.json';
        const json = window.localStorage.getItem(this.state.jsonKey) || JSON.stringify([], null, 2)
        const newJson = JSON.stringify(JSON.parse(json), null, 2)
        this.setState(previousState => ({ items: newJson }));
        // fetch(filePath).then(function(response) {
        //     return response.text();
        // }
        // ).then((data)=>(
        //   this.setState(state=>({items:JSON.parse(data)}))
        // )
        // ).catch(
        //     console.error('There were an error')
        // )
    }

    onClickAdd(event) {
        this.setState(previousState => ({
            items: [...previousState.items, {key: Date.now(),
                                             value: previousState.new_item}],
        }));
        console.log("It was clicked" + this.state.new_item);

    }

    handleChange({target}) {
        this.setState(previousState => ({
            [target.name]: target.value
        }));

        console.log("It was clicked" + target);
    };


    onClickDelete(index) {
        var items = [...this.state.items];

        items = items.filter(item => item.key !== index);
        this.setState(previousState => ({
            items: items,
            new_item: previousState.new_item
        }));
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
                    <div className="TextField-autosave">
                        <Save itemList={this.state.items} jsonKey={this.state.jsonKey}/>
                    </div>
                </form>
                <ListItem items={this.state.items} 
                          onClick={this.onClickDelete}
                />
            </div>
        );
    }
}