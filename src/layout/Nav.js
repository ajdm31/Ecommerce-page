import React, { useState } from "react";
import { Home, Market } from '../pages'


const Nav = () => {

    const [path, setPath] = useState('/');

    const handleMenu = () => {
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;

        if (path === '#t2') {
            setPath("#t1")
            menuBtn.classList.remove('open');
            menuOpen = false;
            document.getElementById('menu-btn').style.borderColor = '#dbdbdb'

        }
        else {
            setPath("#t2")
            menuBtn.classList.add('open');
            menuOpen = true;
            document.getElementById('menu-btn').style.borderColor = 'white'
        }
    }


    return (
        <div id="t1">
            <div id="t2">
                <ul id="menu">
                    <a href={path}>
                        <li class="icon">
                            <div class="menu-btn" id="menu-btn" onClick={() => handleMenu()}>
                                <div class="menu-btn__burger"></div>
                            </div>
                        </li>
                    </a>
                </ul>

                <div class="page" id="p1">
                    <section class="icon ">
                        <Market path={path} />
                    </section>
                </div>
                <div class="page" id="p2">
                    <section class="icon ">
                        <Home path={path} />
                    </section>
                </div>
            </div>
        </div>

    )
}



export default Nav;