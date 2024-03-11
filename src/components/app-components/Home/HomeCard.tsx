
import React, { useState } from "react";
import { motion } from 'framer-motion';

import './HomeView.css';


const HomeCard = ({ image, title }) => {

    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        setTilt({ x: offsetX, y: offsetY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };
    return (
        <motion.div
            className="homecard_wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(800px) rotateX(${tilt.y / 10}deg) rotateY(${tilt.x / 10}deg)`,
            }}
        >
            <img
                src={image}
                alt={title}
            />
            <div className="homecard-title">
                {title}
            </div>
        </motion.div>
    );
}
export default HomeCard