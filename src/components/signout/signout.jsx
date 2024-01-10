import React from "react";
import "./signout.css";
import { Link } from "react-router-dom";

function signout() {
  return (
    <div className="sign-out">
      <Link to="/" className="button">
        <button>Sign out</button>
      </Link>
    </div>
  );
}

export default signout;
