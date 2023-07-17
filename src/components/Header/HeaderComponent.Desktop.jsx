import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import VoucherItem from '../VoucherItem';
import { homeVersion } from './dummy';
import { GetVouchers } from '../../redux/actions/vouchers';

const HeaderComponentDesktop = (props) => {
  const dispatch = useDispatch();
  const { voucherList } = useSelector((state) => state.voucher);

  useEffect(() => {
    dispatch(GetVouchers());
  }, [dispatch]);

  const accountInfo = localStorage.getItem('accountinfo');

  return (
    <header className="header header-transparent header-center header-sticky d-none d-lg-block">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="header-top-contact col-lg-12 col-md-12">
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                {voucherList &&
                  voucherList.data.results.map((item) => (
                    <li>
                      <VoucherItem data={item} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom menu-right">
        <div className="container-fluid pl-30 pr-30">
          <div className="row align-items-center">
            <div className="col-xl-1 col-12 text-center mt-20 mb-20">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo-dark.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col-xl-7 col-12">
              <nav className="main-menu">
                <ul>
                  {/* Select home version */}
                  {/* <li>
                    <a href="index.html">
                      Home <i className="las la-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Three</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Four</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="/">
                      Shop <i className="las la-angle-down"></i>
                    </a>
                    <ul className="mega-menu four-column">
                      <li>
                        <a href="#" className="item-link">
                          Pages
                        </a>
                        <ul>
                          <li>
                            <a href="/compare">Compare</a>
                          </li>
                          <li>
                            <a href="/cart">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="/checkout">Checkout</a>
                          </li>
                          <li>
                            <a href="/whislist">Wishlist</a>
                          </li>
                          <li>
                            <a href="/auth">Login Register</a>
                          </li>
                          <li>
                            <a href="/faq">Faq</a>
                          </li>
                          <li>
                            <a href="/error">404</a>
                          </li>
                          <li>
                            <a href="/coming-soon">coming soon</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="item-link">
                          Shop Layout
                        </a>
                        <ul>
                          <li>
                            <a href="shop-sidebar.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-2-col.html">Shop Two Column</a>
                          </li>
                          <li>
                            <a href="shop-3-col.html">Shop three Column</a>
                          </li>
                          <li>
                            <a href="shop-list-style.html">Shop Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="item-link">
                          Product Details
                        </a>
                        <ul>
                          <li>
                            <a href="/product-detail">Variable Product</a>
                          </li>
                          <li>
                            <a href="single-product-affiliate.html">
                              Affiliate Product
                            </a>
                          </li>
                          <li>
                            <a href="single-product-group.html">
                              Group Product
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" className="item-link">
                          Product Details
                        </a>
                        <ul>
                          <li>
                            <a href="single-product-gallery-left.html">
                              Product Gallery Left
                            </a>
                          </li>
                          <li>
                            <a href="single-product-gallery-right.html">
                              Product Gallery Right
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/categories">
                      Blog <i className="las la-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/categories">Blog</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-no-sidebar.html">Blog No Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-4 col-12 d-flex justify-content-xl-end justify-content-center">
              <div className="header-search-area">
                <div className="header-search-form">
                  <form action="#">
                    <button>
                      <i className="lni lni-search-alt"></i>
                    </button>
                    <input type="text" placeholder="Search Product..." />
                  </form>
                </div>
              </div>
              <ul className="us-menu">
                <li>
                  <a href="#">
                    <i className="lni lni-heart"></i>
                  </a>
                </li>
              </ul>
              <div className="header-cart">
                <a href="cart.html">
                  <i className="lni lni-cart"></i>
                  <span className="count">2</span>
                </a>

                <div className="header-cart-dropdown">
                  <ul className="cart-items">
                    <li className="single-cart-item">
                      <div className="cart-img">
                        <a href="cart.html">
                          <img src="img/cart/cart-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="cart-content">
                        <h5 className="product-name">
                          <a href="single-product-affiliate.html">
                            Dell Inspiron 24
                          </a>
                        </h5>
                        <span className="product-quantity">1 ×</span>
                        <span className="product-price">$278.00</span>
                      </div>
                      <div className="cart-item-remove">
                        <a title="Remove" href="#">
                          <i className="lni lni-trash"></i>
                        </a>
                      </div>
                    </li>
                    <li className="single-cart-item">
                      <div className="cart-img">
                        <a href="cart.html">
                          <img src="img/cart/cart-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="cart-content">
                        <h5 className="product-name">
                          <a href="single-product-affiliate.html">
                            Lenovo Ideacentre 300
                          </a>
                        </h5>
                        <span className="product-quantity">1 ×</span>
                        <span className="product-price">$23.39</span>
                      </div>
                      <div className="cart-item-remove">
                        <a title="Remove" href="#">
                          <i className="lni lni-trash"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="cart-total">
                    <h5>
                      Subtotal :<span className="float-right">$39.79</span>
                    </h5>
                    <h5>
                      Eco Tax (-2.00) :
                      <span className="float-right">$7.00</span>
                    </h5>
                    <h5>
                      VAT (20%) : <span className="float-right">$0.00</span>
                    </h5>
                    <h5>
                      Total : <span className="float-right">$46.79</span>
                    </h5>
                  </div>
                  <div className="cart-btn">
                    <a href="cart.html">View Cart</a>
                    <a href="checkout.html">checkout</a>
                  </div>
                </div>
              </div>
              <ul className="us-menu">
                <li>
                  <a href="#">
                    <i className="las la-sliders-h"></i>
                  </a>
                  <ul className="dropdown right">
                    <li>
                      <a href="compare.html">Compare Products</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="wishlist.html">My Wish List</a>
                    </li>
                    <li>
                      <a href="login-register.html">Sign In</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponentDesktop;
