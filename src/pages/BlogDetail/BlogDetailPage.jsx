import React from 'react';
import Layout from '../../components/Layout';
import SidebarPostItem from '../../components/SidebarPostItem';
import CommentBox from '../../components/CommentBox';
import Breadcrumb from '../../components/Breadcrumb';
const BlogDetailPage = (props) => {
  return (
    <Layout>
      <Breadcrumb breadcrumb="Blog Details" />
      <section class="blog-detail-area pt-100 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <article class="postbox post format-image mb-40">
                <div class="postbox-thumb mb-35">
                  <img
                    class="img-fluid"
                    src="img/blog/details/b1.jpg"
                    alt="blog image"
                  />
                </div>
                <div class="postbox-text bg-none">
                  <div class="blog-meta mb-15">
                    <span>
                      {' '}
                      <i class="lni lni-calendar"></i>Life Style
                    </span>
                    <span>
                      {' '}
                      <i class="lni lni-user ml-4"></i>
                      <a href="#">Diboli Joly</a>
                    </span>
                    <span>
                      {' '}
                      <i class="lni lni-comments-alt ml-4"></i>
                      <a href="#"> Comments (02) </a>
                    </span>
                  </div>
                  <h3 class="blog-title">
                    Lorem ipsum dolor sit amet, consectetur adipisic eiusmod
                    tempor incididunt ut labore et dolore
                  </h3>
                  <div class="post-text mb-20">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <p>
                      Bccaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis
                      unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore
                      et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur cing elit, sed
                        do eiusmod tempor.
                      </p>
                      <span>- Jason T. Williams</span>
                    </blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>

                    <div class="blog-inner-img mb-30 mt-30">
                      <img
                        class="img-fluid"
                        src="img/blog/details/b2.jpg"
                        alt="blog image"
                      />
                    </div>

                    <div class="inner-content mt-20">
                      <h4>A cleansing hot shower or bath</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia.
                      </p>
                    </div>
                    <div class="inner-content mt-20">
                      <h4>Setting the mood with incense</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia.
                      </p>
                    </div>
                  </div>

                  <div class="row mt-50">
                    <div class="col-xl-8 col-lg-8 col-md-8 mb-15">
                      <div class="blog-post-tag">
                        <span>Releted Tags</span>
                        <a href="#">organic</a>
                        <a href="#">Foods</a>
                        <a href="#">tasty</a>
                      </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 mb-15">
                      <div class="blog-share-icon text-left text-md-right">
                        <span>Share: </span>
                        <a href="#">
                          <i class="lab la-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="lab la-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="lni lni-instagram-filled"></i>
                        </a>
                        <a href="#">
                          <i class="lni lni-youtube"></i>
                        </a>
                        <a href="#">
                          <i class="lni lni-behance-original"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="navigation-border pt-50 mt-40"></div>
                    </div>

                    <div class="col-xl-5 col-lg-5 col-md-5">
                      <div class="bakix-navigation b-next-post text-left mb-30">
                        <span>
                          <a href="#">Prev Post</a>
                        </span>
                        <h4>
                          <a href="#">Tips on Minimalist</a>
                        </h4>
                      </div>
                    </div>

                    <div class="col-xl-2 col-lg-2 col-md-2 ">
                      <div class="bakix-filter text-left text-md-center mb-30">
                        <a href="#">
                          <img src="img/icon/filter.png" alt="" />
                        </a>
                      </div>
                    </div>

                    <div class="col-xl-5 col-lg-5 col-md-5">
                      <div class="bakix-navigation b-next-post text-left text-md-right  mb-30">
                        <span>
                          <a href="#">Next Post</a>
                        </span>
                        <h4>
                          <a href="#">Tips on Minimalist</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="author mt-80 mb-40">
                  <div class="author-img text-center">
                    <img src="img/blog/details/author.png" alt="" />
                  </div>
                  <div class="author-text text-center">
                    <h3>Joyce Kuebler</h3>
                    <div class="author-icon">
                      <a href="#">
                        <i class="lab la-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="lab la-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="lni lni-behance-original"></i>
                      </a>
                      <a href="#">
                        <i class="lni lni-youtube"></i>
                      </a>
                      <a href="#">
                        <i class="lni lni-instagram-filled"></i>
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                      aute irure dolor.{' '}
                    </p>
                  </div>
                </div>
                <div class="post-comments">
                  <div class="blog-coment-title mb-30">
                    <h2>03 Comments</h2>
                  </div>
                  <div class="latest-comments">
                    <ul>
                      <li>
                        <CommentBox />
                      </li>
                      <li class="children">
                        <CommentBox />
                      </li>

                      <li>
                        <CommentBox />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="blog-reply-wrapper mt-50">
                  <h4>post a comment</h4>
                  <form class="blog-form" action="#">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="leave-form">
                          <input type="text" placeholder="Full Name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="leave-form">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="text-leave">
                          <textarea placeholder="Message"></textarea>
                          <input type="submit" value="POST COMMENT" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </article>
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

export default BlogDetailPage;
