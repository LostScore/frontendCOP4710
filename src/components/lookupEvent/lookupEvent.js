import Axios from "axios";
import { useState } from "react";
import * as Validator from 'validatorjs';

function SearchEvents() {
  // State Hooks
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);

  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmitDates(event) {
      event.preventDefault();
      const data = {
        startDate: startDate,
        endDate: endDate,
      }

      const rules = {
        startDate: 'required',
        endDate: 'required'
        }
      const validate = new Validator(data, rules);

      if(validate.passes()){
        Axios.post("http://localhost:5000/api/lookupEventDate", data)
        .then(function (response) {
            console.log(response);
            setDisplayTable(true);
            setEvents(response.data.events);
            events.map((event) => {
              console.log(event);
            });
          })
          .catch(function (error) {
            alert("Error: NoUsers");
            console.log(error);
          });
    }
  }

  function handleSubmitLocation(event) {
    event.preventDefault();
    const data = {
      location: location
    }
    console.log(data);
    const rules = {
      location: 'required',
      }
    const validate = new Validator(data, rules);

    if(validate.passes()){
      Axios.post("http://localhost:5000/api/lookupEventCity", data)
      .then(function (response) {
          console.log(response);
          setDisplayTable(true);
          setEvents(response.data.events);
          events.map((event) => {
            console.log(event);
          });
        })
        .catch(function (error) {
          console.log(error);
          alert("Error: No Events Found");
        });
  }
}

  function JoinEvent(event_id,admin_username,admin_id){
    const data = {
        eventid: event_id,
        adminname: admin_username,
        adminid: admin_id ,
        userid: localStorage.getItem("userid")
    }
    console.log(data);
    Axios.post("http://localhost:5000/api/joinEvent", data)
    .then(function (response) {
        console.log(response);
        alert("join success!");
      })
      .catch(function (error) {
        console.log(error);
        alert("failed to join");
      });
  }

  return (
    <div className="lookupEvent">
      <p> Search for Events</p>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputstartdate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="inputstartdate"
                placeholder="xx-xx-xxxx"
                onChange={(event) =>
                  handleInputs(event.target.value, setStartDate)
                }
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputenddate">End date</label>
              <input
                type="date"
                className="form-control"
                id="inputenddate"
                placeholder="xx-xx-xxxx"
                onChange={(event) => handleInputs(event.target.value, setEndDate)}
              />
            </div>
          </div>
          </div>
          <br/>
            <button type="submit" className="btn btn-primary" onClick={handleSubmitDates}>
            Search
            </button>
        <br/>
        <br/>
        OR:
        <br/>
        <br/>
        <div className = "row">
            <div className="col">
                <div className="form-group">
                <label htmlFor="inputlocation">City</label>
                <input
                    type="text"
                    className="form-control"
                    id="inputlocation"
                    onChange={(event) =>
                    handleInputs(event.target.value, setLocation)
                    }
                />
                </div>
            </div>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary" onClick={handleSubmitLocation}>
                Search
          </button>
      </form>
      
      {displayTable ? (
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">URL</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Join</th>
                </tr>
              </thead>
      
              {events.map((e) => (
                
                <tbody key ={e.event_id}>
                  <tr>
                    <td>{e.admin_username}</td>
                    <td>{e.event_title}</td>
                    <td>{e.homepage_url}</td>
                    <td>{e.start_date}</td>
                    <td>{e.end_date}</td>
                    <td>
                      <li 
                        onClick={()=>JoinEvent(e.event_id,e.admin_username,e.admin_id)}>
                    Join
                  </li></td>
                  </tr>
                </tbody>
                
              ))}
            </table>
      ) : (
        <a>No Search</a>
      )}
                

                  
    </div>
  );
}

export default SearchEvents;