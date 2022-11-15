import React from "react";
import classes from "./css/Header.module.css";
const Header = ({ toggleDarkModeHandler }) => {
    return (
        <div className={classes.header}>
            <h1>Notes</h1>
            <button 
            onClick={() => toggleDarkModeHandler((previousDarkMode) => !previousDarkMode)}
            className={classes.save}>Toggle Mode</button>
        </div>
    )
}

export default Header;