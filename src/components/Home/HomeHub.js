import { Link } from "react-router-dom";

function HomeHub(){
    const username = localStorage.getItem("username")
    function clearLocalStorage(){
        localStorage.removeItem("username");
        localStorage.removeItem("userlevel");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        localStorage.removeItem("phonenum");
        localStorage.removeItem("useremail");
        window.location.reload(false);
    }


    return (
        <div className = "HomeHub">
        <h1>HomeHub</h1>
            { username ? (
                <div>
                <p>Hello {username}</p>
                <button type='button' 
                class="btn btn-primary"
                onClick={clearLocalStorage}>Log Out
                </button>
                </div>
            ) : (
                <div>
                    <Link to = '/login'>
                        <button type="button" class="btn btn-primary">Login</button>
                    </Link>
                    <br></br>
                    <br></br>
                    <Link to = '/regis'>
                        <button type="button" class="btn btn-primary">Register</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default HomeHub;