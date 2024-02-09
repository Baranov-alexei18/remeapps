import React from 'react';

import Converter from "../components/app-components/Converter/AppConverter.tsx"
import { LoadingApp } from '../components/shared/Load/Loading.js';

const Converters: React.FC = () => {

    const ConverterLoading = LoadingApp(Converter);
    return (
        <div style={{ padding: "20px" }}>
            <ConverterLoading />
        </div >
    );
}

export default Converters;
