import React from 'react';

const ErrorPage = (props) => {
  return (
    <section class="error-page bg-404">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="error">
              <h1>Oops!</h1>
              <h1 class="mb-50">Page not found!</h1>
              <p class="direction-page">
                PLEASE GO BACK TO <a href="index.html">homepage</a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
