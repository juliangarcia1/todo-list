import React from 'react';
import './Save.css';


export default class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = {saveState:false}
    }

    saveList(json) {
        const filePath = './items.json';
        const jsonContent = JSON.parser(json)
        const head = { method: 'POST',
                       body: jsonContent,
                     }
        var currentList;
        fetch(filePath,
              head
        ).then(function(response) {
            return response.text();
        }
        ).then(function(data){
           currentList =  data
        }
        ).catch(
            console.error('There were an error')
        )
        console.log(currentList)
    }
    // readList() {
    //     const filePath = './items.json';
    //     var currentList;
    //     fetch(filePath).then(function(response) {
    //         return response.text();
    //     }
    //     ).then(function(data){
    //        currentList =  data
    //     }
    //     ).catch(
    //         console.error('There were an error')
    //     )
    //     console.log(currentList)
    // }
    render() {
        return(
            <div className="Save-container">
                <button className="Save-button" items={this.props.itemsList} onClick={this.toggleAutoSave}>
                    Auto Save
                </button>
            </div>
        );
    }
}

