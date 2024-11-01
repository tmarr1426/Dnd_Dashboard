import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   justifyItems: "center",
    //   width: "30em",
    // }}
    >
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
      <Link to="/stats">
        <button
          style={{
            background: location.pathname.includes("/stats") && backgroundColor,
            margin: "1em",
          }}
        >
          View Character Stats
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
      {/* <Link to="/add">
        <button
          style={{
            background: location.pathname.includes("/add") && backgroundColor,
          }}
        >
          Create Character
        </button>
      </Link>
      <button
        // className="w3-display-bottomleft"
        onClick={props.clearToken}
        style={{ marginBottom: "2em", marginLeft: "3.00em" }}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Nav;
