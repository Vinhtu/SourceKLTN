import React from 'react';

const HeaderNavigationMobile = (nav) => {
  const [isExpand, setExpand] = React.useState(false);
  function toggleSubmenu() {
    setExpand(!isExpand);
  }
  return (
    <li className="menu-item-has-children">
      {nav.children ? (
        <span className="menu-expand">
          <i></i>
        </span>
      ) : null}
      <a onClick={nav.children ? toggleSubmenu : () => {}}>{nav.menu}</a>
      {nav.children
        ? nav.children.map((navChildren, index) => (
            <ul
              key={index}
              className="submenu2"
              style={{ display: isExpand ? '' : 'none' }}
            >
              <HeaderNavigationMobile {...navChildren} />
            </ul>
          ))
        : null}
    </li>
  );
};

export default HeaderNavigationMobile;
