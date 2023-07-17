export const navs = [
  {
    menu: 'Home',
    children: [
      { menu: 'Home 1' },
      { menu: 'Home 2' },
      { menu: 'Home 3' },
      { menu: 'Home 4' },
    ],
  },
  {
    menu: 'Shop',
    children: [
      {
        menu: 'Pages',
        children: [
          { menu: 'Compare' },
          { menu: 'Shopping Cart' },
          { menu: 'Checkout' },
          { menu: 'Wishlist' },
          { menu: 'Dummy' },
          { menu: 'Faq' },
          { menu: '404' },
        ],
      },
      {
        menu: 'Shop Layout',
        children: [
          { menu: 'dummy' },
          { menu: 'dummy' },
          { menu: 'dummy' },
          { menu: 'Dummy' },
        ],
      },
      {
        menu: 'Product Details',
        children: [{ menu: 'dummy' }, { menu: 'dummy' }, { menu: 'dummy' }],
      },
      {
        menu: 'Product Details',
        children: [{ menu: 'dummy' }, { menu: 'dummy' }],
      },
    ],
  },
  {
    menu: 'Blog',
    children: [
      { menu: 'dummy' },
      { menu: 'dummy' },
      { menu: 'dummy' },
      { menu: 'Dummy' },
    ],
  },
  { menu: 'About Us' },
  { menu: 'Contact Us' },
];

export const settings = [
  {
    menu: 'MY ACCOUNT',
    children: [{ menu: 'Register' }, { menu: 'Login' }],
  },
  {
    menu: 'CURRENCY: USD',
    children: [{ menu: '€ Euro' }, { menu: '$ US Dollar' }],
  },
  {
    menu: 'LANGUAGE: EN-GB',
    children: [
      { menu: 'English', icon: 'img/icon/en-gb.png' },
      { menu: 'Germany', icon: 'img/icon/de-de.png' },
    ],
  },
];
