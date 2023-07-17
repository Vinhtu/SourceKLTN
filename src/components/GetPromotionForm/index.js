import React from 'react';

const FormGetPromotion = (props) => {
  return (
    <div class="col-12">
      <div class="section_title text-center">
        <h2>
          Get <span>20% Off</span> Your Next Order
        </h2>
      </div>
      <div class="newsletter_container">
        <div class="subscribe_form">
          <form id="pazano-form" class="pazano-form footer-newsletter">
            <input
              id="pazano-email"
              type="email"
              autocomplete="off"
              placeholder="Enter you email"
            />
            <button id="pazano-submit">Subscribe</button>
            <div class="email_icon">
              <i class="lni lni-envelope"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormGetPromotion;
