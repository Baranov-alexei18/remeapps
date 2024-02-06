import React from 'react';
import { NavLink } from "react-router-dom"
import { RouterApp } from "../../../store/Router"

import './SideBar.style.css';

const Navbar: React.FC = () => {
    return (
        <div className="app-navbar">
            <nav>
                <ul>
                    {RouterApp.map((item, id) =>
                        <li key={id}>
                            <NavLink
                                style={({ isActive, isPending }): React.CSSProperties => {
                                    return {
                                        backgroundColor: isActive ? '#a7d1b3' : '#c7d5b3',
                                    };
                                }}
                                className={({ isActive, isPending }) => {
                                    return isActive ? 'active' : isPending ? 'pending' : '';
                                }}
                                to={item.path}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </div >
    );
}

export default Navbar;
