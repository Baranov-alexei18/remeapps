import React, { useState } from 'react';
import '../assets/container.css'
import Quill from "../components/app-components/Quill/index.tsx"

const Editor: React.FC = () => {
    return (
        <div className='container'>
            <Quill />
        </div>
    );
}

export default Editor;
