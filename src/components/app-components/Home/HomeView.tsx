
import React from "react";
import { RouterApp } from "../../../store/Router"

import HomeCard from './HomeCard.tsx'
import './HomeView.css';
import { Link } from "react-router-dom";

const HomeView = () => {
    const filterRouterApp = RouterApp.filter(item => item.id !== 1)

    return (
        <div className="homeview_wrapper">
            {filterRouterApp.map((item, idx) => (
                <Link className="homecard-link" key={idx} to={item.path}>
                    <HomeCard key={item.id} image={item.img} title={item.title} />
                </Link>
            ))}
        </div>
    );
}
export default HomeView