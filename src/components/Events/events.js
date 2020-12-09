import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>Events Page</h1>
      <Link to="/create">
        <br></br>
        <br></br>
        <button class="btn btn-primary" type="submit">
          Create Event
        </button>
      </Link>
      <Link to="/lookup">
        <br></br>
        <br></br>
        <button class="btn btn-primary" type="submit">
          Search For Event
        </button>
      </Link>
      <Link to="/held">
        <br></br>
        <br></br>
        <button class="btn btn-primary" type="submit">
          Check Held Events
        </button>
      </Link>
    </div>
  );
}
