import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HeaderSearch from "./HeaderSearch.jsx";
import "./Header.css"

const Header = () => {
    return(
        <div className="header">
            <div className="header_logo">
                <StorefrontIcon className="header_logoImage" fontSize="large"/>
                <h2 className="header_logoTitle">eShop</h2>
            </div>
            <div className="header_search">
                <HeaderSearch />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemOne">
                        Hello Guest
                    </span>
                    <span className="nav_itemTwo">
                        Sign In
                    </span>
                </div>
                <div className="nav_item">
                <span className="nav_itemOne">
                        Your
                    </span>
                    <span className="nav_itemTwo">
                        Shop
                    </span>
                </div>
                <div className="nav_item">
                <div className="nav_itemBasket">
                    <ShoppingBasketIcon/>
                    <span className="nav_itemTwo nav_basketCount">0</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;