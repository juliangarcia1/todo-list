import React from 'react';
import './Menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTrash, faMinusCircle} from '@fortawesome/free-solid-svg-icons'


const mainMenu = (props) => {
    return (
        <div className="mainMenu-container" >
            <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            <div className="mainMenu-list">
                    <div className="mainMenu-checkbox">
                        <input type="checkbox" name="storage-selector"/>
                        <label htmlFor="storage-selector">Cloud Storage</label>
                    </div>
                    <div className="mainMenu-items">
                        <div className="Menu-element"><FontAwesomeIcon icon={faList} /><a href="/#"> Show List</a></div>
                        <div className="Menu-element"> <FontAwesomeIcon icon={faTrash} /><a href="/#"> Show Trash </a></div>
                        <div className="Menu-element"> <FontAwesomeIcon icon={faMinusCircle} /><a href="/#"> Deleted Trash Items</a></div>
                    </div>
            </div>
        </div >
    );
}

export default mainMenu;