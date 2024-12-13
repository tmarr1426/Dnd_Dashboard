import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  return (
    <div className="nav">
      <Link to="/Dashboard">
        <button
          style={{
            background:
              location.pathname.includes("/Dashboard") && backgroundColor,
            margin: "1em",
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/character-notes">
        <button
          style={{
            background:
              location.pathname.includes("/character-notes") && backgroundColor,
            margin: "1em",
          }}
        >
          View Character Notes
        </button>
      </Link>
      <Link to="/campaign-notes">
        <button
          style={{
            background:
              location.pathname.includes("/campaign-notes") && backgroundColor,
            margin: "1em",
          }}
        >
          Campaign Notes
        </button>
      </Link>
    </div>
  );
};

export default Nav;
