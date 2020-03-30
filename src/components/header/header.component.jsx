import "./header.styles.scss";
import {Link} from "react-router-dom";
import React from "react";

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/'>
                RAM
            </Link>
            <Link className='option' to='/cpu'>
                CPU
            </Link>
        </div>
    </div>
);

export default Header;