import React from 'react';

const SidebarPostItem = (prosp) => {
  return (
    <div class="single-sidebar-post">
      <div class="sidebar-post-img">
        <a href="#">
          <img src="img/blog/blog-sidebar-1.png" alt="" />
        </a>
      </div>
      <div class="sidebar-post-content">
        <h4>
          <a href="#">Lorem ipsum </a>
        </h4>
        <span>19 Augs, 2020 - by John </span>
      </div>
    </div>
  );
};

export default SidebarPostItem;
