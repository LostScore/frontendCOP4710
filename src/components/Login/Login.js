import Axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {
  const [inputusername, setInputuser] = useState("");
  const [inputpassword, setInputpassword] = useState("");
  const [errorExistance, setError] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);

  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username: " + inputusername);
    console.log("Password: " + inputpassword);
    
    if (inputusername !== "" && inputpassword !== "") {
      Axios.post("http://localhost:5000/api/login", {
        inputusername: inputusername,
        inputpassword: inputpassword,
        
      })
        .then(function (response) {
          setFirstCheck(true);
          console.log(response);
          console.log("Status is res:", response.status);
          setError(false);
          localStorage.setItem('username', response.data.user_name);
          localStorage.setItem('userlevel', response.data.user_level);
          
        })
        .catch(function (error) {
          setFirstCheck(true);
          console.log("Status is: er", error.status);
          console.log(error);
          setError(true);
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
        {console.log(firstCheck)}
        {firstCheck &&
          (errorExistance ? (
            <div class="alert alert-danger" role="alert">
              Error: Invalid Credentials!
            </div>
          ) : (
            <div class="alert alert-success" role="alert">
              Login Success!
              <Redirect to ="/"></Redirect>
            </div>
          ))}
      </header>
    </div>
  );
}

export default Login;
