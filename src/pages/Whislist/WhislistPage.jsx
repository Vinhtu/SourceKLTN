import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCartItem from '../../components/ProductCartItem';
const WhislistPage = (props) => {
  return (
    <Layout>
      <Breadcrumb breadcrumb="Whislist" />
      <div class="cart-area bg-gray pt-100 pb-100">
        <div class="container">
          <form action="#">
            <div class="cart-table-content wishlist-wrap box_shadow">
              <div class="table-content table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th class="th-text-center"> Price</th>
                      <th class="th-text-center">Quantity</th>
                      <th class="th-text-center">Total Prce</th>
                      <th class="th-text-center">Add To Cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(4)
                      .fill(1)
                      .map((item, idx) => (
                        <ProductCartItem type="whislist" />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default WhislistPage;
