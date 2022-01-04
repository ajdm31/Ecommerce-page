import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import '../assets/css/styles.css';


const Nav = () => {

    const [active, setActive] = useState(false);
    const [path, setPath] = useState('/');

    const handleMenu = () => {
        if (path === '/') {
            setPath("/market")
        }
        else {
            setPath("/")
        }
    }


    return (
        <nav>
            <div class="nav-center">
                {/* nav header */}
                <div class="nav-header">
                    <p>
                        mater
                    </p>
                </div>
                {/* links */}
                <ul class="links">
                    <NavLink onClick={() => handleMenu()} to={path} style={{ color: "black" }}>X</NavLink>
                </ul>

            </div>
        </nav>

    )
}



export default Nav;