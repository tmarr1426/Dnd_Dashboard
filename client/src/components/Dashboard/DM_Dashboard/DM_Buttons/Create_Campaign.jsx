import React from "react";
import { Link, useLocation } from "react-router-dom";

const Create_Campaign = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  return (
    <div>
      <Link to="/Campaign_Form">
        <button
          style={{
            background:
              location.pathname.includes("/campaign_form") && backgroundColor,
            margin: "1em",
          }}
        >
          Create Campaign
        </button>
      </Link>
    </div>
  );
};

export default Create_Campaign;
