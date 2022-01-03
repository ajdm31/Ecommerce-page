import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import '../assets/css/styles.css';


const Nav = () => {

    const [active, setActive] = useState(false);


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
                    <NavLink to="/" style={{ color: "black" }}>Home</NavLink>
                    <NavLink to="/market" style={{ color: "black" }}>market</NavLink>
                </ul>

            </div>
        </nav>

    )
}



export default Nav;