import React from "react";
import { MdSearch } from "react-icons/md";
import classes from './css/Search.module.css';
const Search = ({ searchHandler }) => {
    return (
        <div className={classes.search}>
            <MdSearch className={classes.searchIcons} size='1.3em' />
            <input 
            onChange={event => searchHandler(event.target.value)}
            type="text" 
            placeholder="type to search..." />
        </div>
    );
}
export default Search;