import { Link } from "react-router-dom";

function HomeHub(){
    return (
        <div className = "HomeHub">
        <h1>HomeHub</h1>
            
            <Link to = '/login'>
                <button type="button" class="btn btn-primary">Login</button>
            </Link>

            <br></br>
            <br></br>
            <Link to = '/regis'>
                <button type="button" class="btn btn-primary">Register</button>
            </Link>
            <br></br>
            <br></br>
            <button type='button' class="btn btn-primary">Log Out</button>
         </div>

    );
}

export default HomeHub;