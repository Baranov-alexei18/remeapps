import React from 'react';
import './Header.style.css';

import { useLocation } from "react-router-dom";

import HeaderName from '../Headers/HeaderName.tsx';
import SocialIcons from '../../shared/SocialIcons.tsx';

interface headerProps {
  nameTitle: string;
}

const Header: React.FC<headerProps> = (props: headerProps) => {
  let location = useLocation();

  let pathname: string = location.pathname;

  return (
    <header>
      <div className='header-wrapper'>
        <HeaderName path={pathname}></HeaderName>
        <SocialIcons />
      </div>
    </header>
  );
}

export default Header;
