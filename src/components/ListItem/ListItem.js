import React from 'react';


export default class ListItem extends React.Component {
    render() {
        return(
            <div>
                <form >
                    <input type="checkbox" value="New Item"/>
                </form>
            </div>       
        );
    }
}