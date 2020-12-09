import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Link to ='/'>
                    <li className="nav-item active">
                        <a className="nav-link">Home</a>
                    </li>
                </Link>
                <Link to ='/prof'>
                    <li className="nav-item active">
                        <a className="nav-link">Profile</a>
                    </li>
                </Link>
                <Link to ='/event'>
                    <li className="nav-item active">
                        <a className="nav-link" >Events</a>
                    </li>
                </Link>

            </ul>

        </div>
    </div>
  );
}

export default NavBar;
