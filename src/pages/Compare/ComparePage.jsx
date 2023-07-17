import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';

const ComparePage = (props) => {
  return (
    <Layout>
      <Breadcrumb breadcrumb="Compare" />
      <section class="compare-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <form action="#">
                <div class="compare-table table-responsive">
                  <table class="table mb-0">
                    <tbody>
                      <tr>
                        <td class="first-column">Product</td>
                        <td class="product-image-title">
                          <a href="#" class="image">
                            <img
                              src="img/product/p-1.png"
                              alt="Compare Product"
                            />
                          </a>
                          <a href="#" class="category">
                            Product category
                          </a>
                          <a href="#" class="title">
                            Product name
                          </a>
                        </td>
                        <td class="product-image-title">
                          <a href="#" class="image">
                            <img
                              src="img/product/p-2.png"
                              alt="Compare Product"
                            />
                          </a>
                          <a href="#" class="category">
                            Product category
                          </a>
                          <a href="#" class="title">
                            Product name
                          </a>
                        </td>
                        <td class="product-image-title">
                          <a href="#" class="image">
                            <img
                              src="img/product/p-3.png"
                              alt="Compare Product"
                            />
                          </a>
                          <a href="#" class="category">
                            Product category
                          </a>
                          <a href="#" class="title">
                            Product name
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="first-column">Description</td>
                        <td class="pro-desc">
                          <p>
                            Samsome Note Book Pro 5 is the best Laptop on this
                            budget. You can satisfy after usign this laptop.
                            It’s performance is awesome. Designer’s love it.
                          </p>
                        </td>
                        <td class="pro-desc">
                          <p>
                            Samsome Note Book Pro 5 is the best Laptop on this
                            budget. You can satisfy after usign this laptop.
                            It’s performance is awesome. Designer’s love it.
                          </p>
                        </td>
                        <td class="pro-desc">
                          <p>
                            Samsome Note Book Pro 5 is the best Laptop on this
                            budget. You can satisfy after usign this laptop.
                            It’s performance is awesome. Designer’s love it.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td class="first-column">Price</td>
                        <td class="pro-price">$400</td>
                        <td class="pro-price">$355</td>
                        <td class="pro-price">$590</td>
                      </tr>
                      <tr>
                        <td class="first-column">Color</td>
                        <td class="pro-color">Black</td>
                        <td class="pro-color">Black</td>
                        <td class="pro-color">Black</td>
                      </tr>
                      <tr>
                        <td class="first-column">Stock</td>
                        <td class="pro-stock">In Stock</td>
                        <td class="pro-stock">In Stock</td>
                        <td class="pro-stock">In Stock</td>
                      </tr>
                      <tr>
                        <td class="first-column">Add to cart</td>
                        <td class="pro-addtocart">
                          <a href="#" class="add-to-cart" tabindex="0">
                            <span>ADD TO CART</span>
                          </a>
                        </td>
                        <td class="pro-addtocart">
                          <a href="#" class="add-to-cart" tabindex="0">
                            <span>ADD TO CART</span>
                          </a>
                        </td>
                        <td class="pro-addtocart">
                          <a href="#" class="add-to-cart" tabindex="0">
                            <span>ADD TO CART</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="first-column">Delete</td>
                        <td class="pro-remove">
                          <button>
                            <i class="lni lni-trash"></i>
                          </button>
                        </td>
                        <td class="pro-remove">
                          <button>
                            <i class="lni lni-trash"></i>
                          </button>
                        </td>
                        <td class="pro-remove">
                          <button>
                            <i class="lni lni-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="first-column">Rating</td>
                        <td class="pro-ratting">
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star"></i>
                        </td>
                        <td class="pro-ratting">
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                        </td>
                        <td class="pro-ratting">
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star-filled"></i>
                          <i class="lni lni-star"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComparePage;
