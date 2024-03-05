import React, { useState } from 'react';
import { Reorder } from "framer-motion"
import { NavLink } from "react-router-dom"
import { RouterApp } from "../../../store/Router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLeftLong, faListUl } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const Navbar: React.FC = () => {

    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [routerApp, setRouterApp] = useState(RouterApp);


    const toggleSidebarWidth = () => {
        setSidebarWidth(sidebarWidth === 250 ? 70 : 250);
    };

    return (
        <div className="app-navbar" style={{ width: sidebarWidth }}>
            <button className="toggle-button-navbar"
                style={{
                    marginLeft: sidebarWidth === 250 ? 'auto' : '4px',
                }}
                onClick={toggleSidebarWidth}>
                {
                    sidebarWidth === 250 ?
                        <FontAwesomeIcon className="toggle-button-navbar" icon={faLeftLong} />
                        :
                        <FontAwesomeIcon className="toggle-button-navbar" icon={faBars} />
                }
            </button>
            <nav>
                <Reorder.Group values={routerApp} onReorder={setRouterApp}>
                    <ul>
                        {routerApp.map((item, id) =>
                            <Reorder.Item key={item.id} value={item} className={sidebarWidth === 250 ? 'list' : ''}>
                                {sidebarWidth === 250 && <FontAwesomeIcon icon={faListUl} style={{ cursor: 'grab' }} />}
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
                                    {sidebarWidth === 250 ? (
                                        <div className='title-navbar' style={{
                                            width: sidebarWidth === 250 ? `140px` : 'inherit',
                                            maxWidth: sidebarWidth === 250 ? `140px` : 'inherit',
                                        }}>
                                            {item.icon}
                                            {item.title}
                                        </div>
                                    ) : (
                                        <div>
                                            {item.icon}
                                        </div>
                                    )}
                                </NavLink>
                            </Reorder.Item>
                        )}
                    </ul>
                </Reorder.Group>
            </nav>
        </div >
    );
}

export default Navbar;
