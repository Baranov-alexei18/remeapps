import React, { useEffect, useState } from 'react';
import './Header.style.css';

import { RouterApp } from "../../../store/Router"

interface LocaleRoute {
    path: string;
}

const HeaderName: React.FC<LocaleRoute> = (props: LocaleRoute) => {
    const [name, setName] = useState("Главная");

    useEffect(() => {
        const app = RouterApp.find(item => item.path === props.path)
        app ? setName(app.title) : setName("Нет такой вкладки");
    }, [props.path])

    return (
        <>
            <h4>{name}</h4>
        </>

    );
}

export default HeaderName;
