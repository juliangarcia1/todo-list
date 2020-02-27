import React from 'react';
import './Save.css';


export default class Save extends React.Component {
    constructor(props) {
        super(props);
        this.saveList = this.saveList.bind(this);
    }
    
    // saveList({target}) {
    //     const filePath = './items.json';
    //     const jsonContent = JSON.stringify(this.props.itemList);
    // }
    

      
    saveList() {
        // const validJson = this.validateJson(this.state.json)
    
        // if (!validJson) return;

        window.localStorage.setItem(
            this.props.jsonKey,
            this.props.itemList
        )
    }

    render() {
        return(
            <div className="Save-container">
                <button className="Save-button"
                        onClick={this.saveList}>
                    Save
                </button>
            </div>
        );
    }
}

