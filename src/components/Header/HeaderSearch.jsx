import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"

const HeaderSearch = () => {
    return(
        <>
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </>
    )
}

export default HeaderSearch;