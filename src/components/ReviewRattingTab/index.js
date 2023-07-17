import React from 'react';

const DescriptionTab = (props) => {
  return (
    <div class="dec-review-bottom">
      <div id="des-details4" class="tab-pane">
        <div class="review-wrapper">
          <h2>1 review for Sleeve Button Cowl Neck</h2>
          <div class="single-review">
            <div class="review-img">
              <img src="img/product/client-1.png" alt="" />
            </div>
            <div class="review-content">
              <div class="review-top-wrap">
                <div class="review-name">
                  <h5>
                    <span>David R. Meyer</span> - Nov 14, 2020
                  </h5>
                </div>
                <div class="review-rating">
                  <i class="yellow las la-star"></i>
                  <i class="yellow las la-star"></i>
                  <i class="yellow las la-star"></i>
                  <i class="yellow las la-star"></i>
                  <i class="yellow las la-star"></i>
                </div>
              </div>
              <p>
                Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                egestas magna molestie a. Proin ac ex maximus, ultrices justo
                eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                in vehicula lacus scelerisque
              </p>
            </div>
          </div>
        </div>
        <div class="ratting-form-wrapper">
          <span>Add a Review</span>
          <p>
            Your email address will not be published. Required fields are marked{' '}
            <span>*</span>
          </p>
          <div class="ratting-form">
            <form action="#">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="rating-form-style mb-20">
                    <label>
                      Name <span>*</span>
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="rating-form-style mb-20">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="star-box-wrap">
                    <div class="single-ratting-star">
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                    </div>
                    <div class="single-ratting-star">
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                    </div>
                    <div class="single-ratting-star">
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                    </div>
                    <div class="single-ratting-star">
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                    </div>
                    <div class="single-ratting-star">
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                      <a href="#">
                        <i class="las la-star"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="rating-form-style mb-20">
                    <label>
                      Your review <span>*</span>
                    </label>
                    <textarea name="Your Review"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-submit">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescriptionTab;
