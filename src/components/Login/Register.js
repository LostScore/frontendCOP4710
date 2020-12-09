import Axios from "axios";
import { useState } from "react";
import * as Validator from 'validatorjs';

function Register() {
  // State Hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenum, setPhonenum] = useState("");

  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmit(event) {
      event.preventDefault();
      const data = {
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        phonenum: phonenum,
      }
      const rules = {
        username: 'required',
        password: 'required',
        email: 'required|email',
        firstname: 'required',
        lastname: 'required',
        phonenum: 'required',
      }
      const validate = new Validator(data,rules);
      if(validate.passes()){
        Axios.post("http://localhost:5000/api/register", data)
        .then(function (response) {
          console.log(response);
          localStorage.setItem("username",username);
          localStorage.setItem("userlevel",1);
          localStorage.setItem("firstname",firstname);
          localStorage.setItem("lastname",lastname);
          localStorage.setItem("phonenum",phonenum);
          localStorage.setItem("useremail",email);
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        console.log(validate.errors);
      }

  }

  return (
    <div className="Register">
      <p> Register</p>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputusername">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputusername"
                placeholder="bsmith1234"
                onChange={(event) =>
                  handleInputs(event.target.value, setUsername)
                }
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputemail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="inputemail"
                placeholder="name@example.com"
                onChange={(event) => handleInputs(event.target.value, setEmail)}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputpassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputpassword"
                placeholder="********"
                onChange={(event) =>
                  handleInputs(event.target.value, setPassword)
                }
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="phoneNum">Phone Number</label>
              <input
                type="phone"
                className="form-control"
                id="phoneNum"
                placeholder="###-###-####"
                onChange={(event) =>
                  handleInputs(event.target.value, setPhonenum)
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputfirstname">First Name</label>
              <input
                type="firstname"
                className="form-control"
                id="inputfirstname"
                placeholder="Bob"
                onChange={(event) =>
                  handleInputs(event.target.value, setFirstname)
                }
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputlastname">Last Name</label>
              <input
                type="lastname"
                className="form-control"
                id="inputlastname"
                placeholder="Smith"
                onChange={(event) =>
                  handleInputs(event.target.value, setLastname)
                }
                required
              />
            </div>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
