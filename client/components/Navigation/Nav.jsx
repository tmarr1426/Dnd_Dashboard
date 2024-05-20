import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  // The main nav bar is strictly for the parent view. The buttons change between parent and child accounts.
  return (
    <div
      className="w3-card-2 w3-sidebar w3-bar-block w3-display-left roboto-regular gradient-vertical"
      style={{ width: "15em" }}
    >
      <img
        className="w3-bar-item"
        src={HeaderImage}
        style={{ height: "8em", left: "1em" }}
      />
      <Link to="/Dashboard">
        <button
          style={{
            background:
              location.pathname.includes("/Dashboard") && backgroundColor,
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/stats">
        <button
          style={{
            background: location.pathname.includes("/stats") && backgroundColor,
          }}
        >
          View Character Stats
        </button>
      </Link>
      <Link to="/signup">
        <button
          style={{
            background:
              location.pathname.includes("/signup") && backgroundColor,
          }}
        >
          Create Account
        </button>
      </Link>
      <button
        className="w3-display-bottomleft"
        onClick={props.clearToken}
        style={{ marginBottom: "2em", marginLeft: "3.00em" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
