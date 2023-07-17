import { render } from '@testing-library/react';
import React from 'react';
import { navs } from './dummy';
import HeaderNavigationMobile from './HeaderNavigation.Mobile';

const HeaderComponentMobile = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  function toggleOpenMenu() {
    setOpen(!isOpen);
  }
  return (
    <>
      <header className="header-mobile d-block d-lg-none">
        <div className="header-bottom menu-right">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-mobile-navigation d-block d-lg-none">
                  <div className="row align-items-center">
                    <div className="col-6 col-md-6">
                      <div className="header-logo">
                        <a href="index.html">
                          <img
                            src="img/logo-dark.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-6 col-md-6">
                      <div className="mobile-navigation text-right">
                        <div className="header-icon-wrapper">
                          <ul className="icon-list justify-content-end">
                            <li>
                              <div className="header-cart-icon">
                                <a href="cart.html">
                                  <i className="lni lni-cart"></i>
                                  <span>2</span>
                                </a>
                              </div>
                            </li>
                            <li>
                              <a
                                onClick={toggleOpenMenu}
                                className="mobile-menu-icon"
                                id="mobile-menu-trigger"
                              >
                                <i className="lni lni-menu"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex d-lg-none">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Canvas */}
      <div
        className={`offcanvas-mobile-menu ${isOpen ? 'active' : 'inactive'}`}
        id="offcanvas-mobile-menu"
      >
        <a
          onClick={toggleOpenMenu}
          className="offcanvas-menu-close"
          id="offcanvas-menu-close-trigger"
        >
          <i className="las la-times"></i>
        </a>

        <div className="offcanvas-wrapper">
          <div className="offcanvas-inner-content">
            <div className="offcanvas-mobile-search-area">
              <form action="#">
                <input type="search" placeholder="Search ..." />
                <button type="submit">
                  <i className="lni lni-search-alt"></i>
                </button>
              </form>
            </div>
            <nav className="offcanvas-navigation">
              <ul>
                {navs.map((nav, index) => (
                  <HeaderNavigationMobile {...nav} key={index} />
                ))}
              </ul>
            </nav>

            <div className="offcanvas-settings">
              <nav className="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="#">MY ACCOUNT </a>
                    <ul className="submenu2">
                      <li>
                        <a href="login-register.html">Register</a>
                      </li>
                      <li>
                        <a href="login-register.html">Login</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">CURRENCY: USD </a>
                    <ul className="submenu2">
                      <li>
                        <a href="javascript:void(0)">€ Euro</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">$ US Dollar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">LANGUAGE: EN-GB </a>
                    <ul className="submenu2">
                      <li>
                        <a href="javascript:void(0)">
                          <img src="img/icon/en-gb.png" alt="" />
                          English
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img src="img/icon/de-de.png" alt="" />
                          Germany
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="offcanvas-widget-area">
              <div className="off-canvas-contact-widget">
                <div className="header-contact-info">
                  <ul className="header-contact-info-list">
                    <li>
                      <i className="ion-android-phone-portrait"></i>{' '}
                      <a href="tel://12452456012">(1245) 2456 012 </a>
                    </li>
                    <li>
                      <i className="ion-android-mail"></i>{' '}
                      <a href="mailto:info@yourdomain.com">
                        info@yourdomain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="off-canvas-widget-social">
                <a href="#" title="Facebook">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="#" title="Twitter">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="#" title="LinkedIn">
                  <i className="lni lni-youtube"></i>
                </a>
                <a href="#" title="Youtube">
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a href="#" title="Vimeo">
                  <i className="fa fa-vimeo-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponentMobile;
