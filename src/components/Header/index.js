import React from 'react';
import HeaderComponentDesktop from './HeaderComponent.Desktop';
import HeaderComponentMobile from './HeaderComponent.Mobile';
import HeaderDesktop from './HeaderDesktop';

const Header = (props) => {
  const isMobile = false;
  if (isMobile) {
    return <HeaderComponentMobile />;
  }
  return <HeaderDesktop />;
};

export default Header;
