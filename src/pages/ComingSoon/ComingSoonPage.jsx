import React from 'react';
import Layout from '../../components/Layout';

const ComingSoonPage = (props) => {
  return (
    <div class="coming-soon-area bg-coming-soon">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="coming-soon-content">
              <div class="coming-soon-from">
                <h2 class="coming-soon-title mb-40">Website coming soon</h2>
                <div
                  class="deal-countdown coming-soon-deal-countdown mb-40 mb-xxs-20"
                  data-countdown="2020/01/01"
                ></div>
                <div class="coming-soon-subscribe-form">
                  <form class="pazano-form">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
