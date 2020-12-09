import Axios from "axios";
import { useState } from "react";
import Error from './Status/Error.js';
import Success from './Status/Error.js';
function Login() {
  const [inputusername, setInputuser] = useState("");
  const [inputpassword, setInputpassword] = useState("");


  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function displayError(){
    <Error></Error>
  }

  function displaySuccess(){
    <Success></Success>
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("InputUserName: " + inputusername);
    console.log("InputPassword: " + inputpassword);
    
    if (inputusername !== "" && inputpassword !== "") {
      Axios.post("http://localhost:5000/api/login", {
        inputusername: inputusername,
        inputpassword: inputpassword,
        
      })
        .then(function (response) {
          console.log(response);
          localStorage.setItem('username', response.data.user_name);
          localStorage.setItem('userlevel', response.data.user_level);
          localStorage.setItem('userid', response.data.id);
          localStorage.setItem("firstname",response.data.first_name);
          localStorage.setItem("lastname",response.data.last_name);
          localStorage.setItem("phonenum",response.data.phone_number);
          localStorage.setItem("useremail",response.data.email);
          alert("Login Successful!");
        })
        .catch(function (error) {
          console.log(error);
          alert("Invalid Credentials");
        });
    }
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <form>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="inputusername">Login</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputusername"
                  aria-describedby="UserHelp"
                  placeholder="Username"
                  required
                  onChange={(event) =>
                    handleInputs(event.target.value, setInputuser)
                  }
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="inputpassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputpassword"
                  aria-describedby="PassHelp"
                  placeholder="Password"
                  required
                  onChange={(event) =>
                    handleInputs(event.target.value, setInputpassword)
                  }
                ></input>
              </div>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </header>
    </div>
  );
}

export default Login;
