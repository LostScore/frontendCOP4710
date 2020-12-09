import { Link } from "react-router-dom";


function Profile() {
    const username = localStorage.getItem("username");
    const userlevel = localStorage.getItem("userlevel");
    const firstname = localStorage.getItem("firstname");
    const last_name = localStorage.getItem("lastname");
    const phonenum = localStorage.getItem("phonenum");
    const useremail = localStorage.getItem("useremail");
    return(
        
        <div className = "Profile">
            <h1> Profile Page</h1>
        
            <h4></h4>
            <div className="container">
                <div className="row">
                    <div className="col"><h3>UserName</h3></div>
                    <div className="col">{username}</div>
                </div>
                <div className="row">
                    <div className="col"><h3>First Name</h3></div>
                    <div className="col">{firstname}</div>
                </div>
                <div className="row">
                    <div className="col"><h3>Last Name</h3></div>
                    <div className="col">{last_name}</div>
                </div>
                <div className="row">
                    <div className="col"><h3>Phone Number</h3></div>
                    <div className="col">{phonenum}</div>
                </div>
                <div className="row">
                    <div className = "col"><h3>Email Address</h3></div>
                    <div className="col">{useremail}</div>
                </div>
            </div>


            {userlevel == "3"?
            (
            <Link to = '/admin'>
                <button type="button" className="btn btn-primary">Super Admin</button>
            </Link>
            ):(
            <a></a>
            )}

        </div>
    );
}

export default Profile;