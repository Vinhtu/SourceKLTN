import react from 'react';

const BlogItem = (props) => {
  return (
    <div
      class={
        props.type == 'blog'
          ? 'col-lg-6 col-md-6 col-12 col-sm-6'
          : 'col-lg-4 col-md-6 col-12 col-sm-6'
      }
    >
      <div class="blog-wrap mb-40">
        <div class="blog-img mb-20">
          <a href="blog-details.html">
            <img src="img/blog/blog-1.jpg" alt="blog-img" />
          </a>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <ul>
              <li>
                <a href="#">News </a>
              </li>
              <li>May 25, 2020</li>
            </ul>
          </div>
          <h1>
            <a href="blog-details.html">
              Five things you only know if you’re at Chanel's Hamburg Show
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
