import Axios from "axios";
import { useState } from "react";
function Login() {
  const [inputusername, setInputuser] = useState("");
  const [inputpassword, setInputpassword] = useState("");


  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }



  function handleSubmit(event) {
    event.preventDefault();
    console.log("Sending InputUserName:", inputusername);

    if (inputusername !== "") {
      Axios.get(`http://localhost:5000/api/login/${inputusername}`)
        .then(function (response) {
          console.log("our response data from the api is:::", response.data.data[0].user_name);
          localStorage.setItem('username', response.data.data[0].user_name);
          localStorage.setItem('userlevel', response.data.data[0].user_level);
          localStorage.setItem('userid', response.data.data[0].id);
          localStorage.setItem("firstname", response.data.data[0].first_name);
          localStorage.setItem("lastname", response.data.data[0].last_name);
          localStorage.setItem("phonenum", response.data.data[0].phone_number);
          localStorage.setItem("useremail", response.data.data[0].email);
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
