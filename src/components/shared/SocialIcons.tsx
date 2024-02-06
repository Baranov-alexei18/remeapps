import React from 'react';
import '../../App.css';

import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialIcons: React.FC = () => {
    const sizeIcon: string = "28";

    return (
        <div className='socialIcons_wrapper' style={{ paddingTop: "4px" }}>
            <a href="https://web.telegram.org/">
                <FaTelegram size={sizeIcon} color='inherit' title='telergamm' />
            </a>
            <a href="https://github.com/Baranov-alexei18" title='Baranov-alexei18'>
                <FaGithub size={sizeIcon} color='inherit' />
            </a>
            <a href="https://www.linkedin.com/in/alexei-baranov" title='alexei-baranov'>
                <FaLinkedin size={sizeIcon} color='inherit' />
            </a>
        </div>
    );
}

export default SocialIcons;
