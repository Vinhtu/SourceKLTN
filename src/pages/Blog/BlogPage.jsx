import React from 'react';
import Layout from '../../components/Layout';
import SidebarPostItem from '../../components/SidebarPostItem';
import BlogItem from '../../components/BlogItem';
import Pagination from '../../components/Pagination';
import Breadcrumb from '../../components/Breadcrumb';

const BlogPage = (props) => {
  return (
    <Layout>
      <Breadcrumb breadcrumb="Blog" />

      <section class="blog-area pt-100 pb-100">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-lg-9">
              <div class="row">
                {Array(8)
                  .fill(1)
                  .map((item, idx) => (
                    <BlogItem type="blog" />
                  ))}
              </div>

              <Pagination />
            </div>

            <div class="col-lg-3">
              <div class="sidebar-search">
                <form class="search-form" action="#">
                  <input type="text" placeholder="SEARCH POST..." />
                  <button class="button-search">
                    <i class="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div class="sidebar-widget mt-60 mb-55">
                <h4 class="pro-sidebar-title2">Popular Post </h4>
                <div class="sidebar-post-wrap mt-30">
                  {Array(4)
                    .fill(1)
                    .map((item, idx) => (
                      <SidebarPostItem />
                    ))}
                </div>
              </div>
              <div class="sidebar-widget mt-60 mb-55">
                <h4 class="pro-sidebar-title2">Categories </h4>
                <div class="sidebar-widget-list-2 mt-25">
                  <ul>
                    <li>
                      <a href="#">Life Style</a> <span>(12)</span>
                    </li>
                    <li>
                      <a href="#">Technology</a> <span>(08)</span>
                    </li>
                    <li>
                      <a href="#">Photography</a> <span>(06)</span>
                    </li>
                    <li>
                      <a href="#">Cafe</a> <span>(17)</span>
                    </li>
                    <li>
                      <a href="#">Travel</a> <span>(9)</span>
                    </li>
                    <li>
                      <a href="#">Games</a> <span>(14)</span>
                    </li>
                    <li>
                      <a href="#">Story love</a> <span>(11)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sidebar-widget mb-60">
                <h4 class="pro-sidebar-title2">Archives </h4>
                <ul class="mt-20">
                  <li>
                    <a href="#">March 2016</a>
                  </li>
                  <li>
                    <a href="#">December 2017</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2015</a>
                  </li>
                  <li>
                    <a href="#">August 2014</a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget mb-55">
                <h4 class="pro-sidebar-title2">Tags </h4>
                <div class="sidebar-widget-tags-2 mt-25">
                  <ul>
                    <li>
                      <a href="#">Beauty,</a>
                    </li>
                    <li>
                      <a href="#">Life Style,</a>
                    </li>
                    <li>
                      <a href="#">Technology,</a>
                    </li>
                    <li>
                      <a href="#">Design,</a>
                    </li>
                    <li>
                      <a href="#">Fashion,</a>
                    </li>
                    <li>
                      <a href="#">Furniture,</a>
                    </li>
                    <li>
                      <a href="#">Travel,</a>
                    </li>
                    <li>
                      <a href="#">Photography,</a>
                    </li>
                    <li>
                      <a href="#">Motion Design</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sidebar-widget mb-65">
                <div class="blog-sidebar-banner">
                  <a href="#">
                    <img alt="" src="img/blog/banner-blog.jpg" />
                  </a>
                  <div class="blog-sidebar-content">
                    <h3>Ad Banner </h3>
                    <h5>www.example.com</h5>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget mb-65">
                <div class="subscribe-form-sidebar">
                  <form
                    class="validate subscribe-form-style"
                    novalidate=""
                    target="_blank"
                    name="pazano-embedded-subscribe-form"
                    method="post"
                    action="#"
                  >
                    <div class="pazano-form">
                      <input
                        class="email"
                        type="email"
                        required=""
                        placeholder="Enter your email address..."
                        name="EMAIL"
                        value=""
                      />
                      <div class="pazano-news" aria-hidden="true">
                        <input
                          type="text"
                          value=""
                          tabindex="-1"
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        />
                      </div>
                      <div class="clear">
                        <input
                          class="button"
                          type="submit"
                          name="subscribe"
                          value=""
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
