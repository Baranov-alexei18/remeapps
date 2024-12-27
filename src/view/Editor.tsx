import React, { useState } from 'react';
import '../assets/container.css'
import EditorApp from "../components/app-components/Editor/index.tsx"

const Editor: React.FC = () => {
    return (
        <div className='container'>
            <EditorApp />
        </div>
    );
}

export default Editor;
