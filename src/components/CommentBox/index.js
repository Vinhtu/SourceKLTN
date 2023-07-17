import React from 'react';

const CommentBox = (props) => {
  return (
    <div class="comments-box">
      <div class="comments-avatar">
        <img src="img/blog/details/comments1.png" alt="" />
      </div>
      <div class="comments-text">
        <div class="avatar-name">
          <h5>Amy Morales</h5>
          <span>19th Nov 2020</span>
          <a class="reply" href="#">
            <i class="las la-reply"></i>Reply
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default CommentBox;
