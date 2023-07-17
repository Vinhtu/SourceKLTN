import React from 'react';

const TeamItem = (props) => {
  return (
    <div class="col-lg-3">
      <div class="team-box text-center py-3 rounded mt-4">
        <div class="team-img">
          <img
            src="img/team/team-1.png"
            class="img-fluid rounded-circle"
            alt=""
          />
        </div>
        <div class="team-social-icon">
          <i class="lni lni-envelope"></i>
        </div>
        <h5 class="f-18 mt-4 mb-2">Lora Scott</h5>
        <p class="text-muted">Manager </p>
        <hr />
        <div class="team-social mt-2">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#" class="text-reset">
                <i class="lni lni-facebook-filled"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-reset">
                <i class="lni lni-twitter-filled"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-reset">
                <i class="lni lni-skype"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-reset">
                <i class="lni lni-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
