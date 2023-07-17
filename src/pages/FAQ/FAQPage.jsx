import React from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
const FAQPage = (props) => {
  return (
    <Layout>
      <Breadcrumb breadcrumb="FAQ" />
      <section class="faq-area pt-100 pb-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="faq-wrap">
                <div class="title mb-80">
                  <h3>Frequently Asked Questions</h3>
                </div>
                <div class="accordion-wrapper" id="accordion-1">
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-1">
                      <button
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                        class="collapsed"
                      >
                        How Do I Track My Order?
                      </button>
                    </div>
                    <div
                      id="collapse-1"
                      class="collapse"
                      aria-labelledby="heading-1"
                      data-parent="#accordion-1"
                      style=""
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-2">
                      <button
                        class=""
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-2"
                        aria-expanded="true"
                        aria-controls="collapse-2"
                      >
                        What Payment Methods Are Accepted?
                      </button>
                    </div>
                    <div
                      id="collapse-2"
                      class="collapse show"
                      aria-labelledby="heading-2"
                      data-parent="#accordion-1"
                      style=""
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-3">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Can I offer my items for free on a promotional basis?
                      </button>
                    </div>
                    <div
                      id="collapse-3"
                      class="collapse"
                      aria-labelledby="heading-3"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-4">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        How Do I Track My Order?
                      </button>
                    </div>
                    <div
                      id="collapse-4"
                      class="collapse"
                      aria-labelledby="heading-4"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-5">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                      >
                        How Can | Return a Product?
                      </button>
                    </div>
                    <div
                      id="collapse-5"
                      class="collapse"
                      aria-labelledby="heading-5"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-6">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                      >
                        What Shipping Methods Are Available?
                      </button>
                    </div>
                    <div
                      id="collapse-6"
                      class="collapse"
                      aria-labelledby="heading-6"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-7">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-7"
                        aria-expanded="false"
                        aria-controls="collapse-7"
                      >
                        How do I become an author?
                      </button>
                    </div>
                    <div
                      id="collapse-7"
                      class="collapse"
                      aria-labelledby="heading-7"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-8">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-8"
                        aria-expanded="false"
                        aria-controls="collapse-8"
                      >
                        Tips for Increasing Your Referral Income
                      </button>
                    </div>
                    <div
                      id="collapse-8"
                      class="collapse"
                      aria-labelledby="heading-8"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                  <div class="accordion-wrap">
                    <div class="accordion-header" id="heading-9">
                      <button
                        class="collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-9"
                        aria-expanded="false"
                        aria-controls="collapse-9"
                      >
                        What Shipping Methods Are Available?
                      </button>
                    </div>
                    <div
                      id="collapse-9"
                      class="collapse"
                      aria-labelledby="heading-9"
                      data-parent="#accordion-1"
                    >
                      <div class="accordion-body">
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
