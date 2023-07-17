import React from 'react';
const BenefitItem = (props) => {
  return (
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="benefits-item">
        <div class="benefits-item-icon">
          <img src="img/icon/1.png" alt="Free Shipping" />
        </div>
        <div class="benefits-item-content">
          <h5>Free Shipping</h5>
          <p>Free shipping on all order</p>
        </div>
      </div>
    </div>
  );
};
export default BenefitItem;
