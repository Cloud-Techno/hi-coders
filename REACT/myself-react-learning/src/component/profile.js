import React from "react";

const ProfileInfo = (props) => {
  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4"></div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle}</h5>
              <p class="card-text">{props.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
