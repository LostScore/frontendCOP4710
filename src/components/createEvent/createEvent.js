import Axios from "axios";
import { useState } from "react";
import * as Validator from "validatorjs";

function CreateEvent() {
  const username = localStorage.getItem("username");
  const id = localStorage.getItem("userid");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setDesc] = useState("");
  const [eventCity, setCity] = useState("");
  const [eventUrl, setUrl] = useState("");
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");

  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmit(event) {
      event.preventDefault();
      const data = {
          adminname: username,
          adminid: id,
          eventTitle: eventTitle,
          eventCity: eventCity,
          eventUrl: eventUrl,
          startdate: startdate,
          enddate: enddate,
          eventDesc: eventDesc
      }
    console.log(data);
    const rules = {
        eventTitle: 'required',
        eventCity: 'required',
        eventUrl: 'required|url',
        startdate: 'required',
        enddate: 'required',
    }
    const validate = new Validator(data,rules);
    if(validate.passes()){
        Axios.post("http://localhost:5000/api/events/create", data)
            .then(function (response) {
              console.log(response);
              alert("Creation Sucess!");
            })
            .catch(function (error) {
              console.log(error);
              alert("Creation Failure..");
            });

    }
    else{
        console.log(validate.errors);
    }
  }

  return (
    <div className="createEvent">
      <p> Register</p>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputtitle">Event Title</label>
              <input
                type="text"
                className="form-control"
                id="inputtitle"
                placeholder="Cool Event 1234"
                onChange={(event) =>
                  handleInputs(event.target.value, setEventTitle)
                }
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputurl">Event URL</label>
              <input
                type="url"
                className="form-control"
                id="inputurl"
                placeholder="example.com"
                onChange={(event) => handleInputs(event.target.value, setUrl)}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputcity">Event City</label>
              <input
                type="text"
                className="form-control"
                id="inputcity"
                placeholder="Orlando"
                onChange={(event) => handleInputs(event.target.value, setCity)}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputfirstname">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputfirstname"
                placeholder="Date"
                onChange={(event) =>
                  handleInputs(event.target.value, setStartDate)
                }
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputenddate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="inputenddate"
                placeholder="Date"
                onChange={(event) =>
                  handleInputs(event.target.value, setEndDate)
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputdesc">Event Description</label>
              <input
                type="text"
                className="form-control"
                id="inputdesc"
                placeholder="Sample Description"
                onChange={(event) => handleInputs(event.target.value, setDesc)}
                required
                
              />
            </div>
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
