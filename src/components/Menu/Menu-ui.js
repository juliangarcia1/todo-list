import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core';



export default function MainMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {

    }
    return(
        <div className="Main-menu">
            <Button onClick='handleClick'> Open Menu</Button>
            <Menu
                id='my-menu'
                anchorEl={anchorEl}
            >
                <MenuItem>Articles</MenuItem>
                <MenuItem>Store</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </div>
    );
}
