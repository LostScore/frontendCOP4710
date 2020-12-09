import Axios from "axios";
import { useState } from "react";


function HeldEvent() {
  // State Hooks
  const username = localStorage.getItem("username");
  const [events, setEvents] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);
  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Query with user:",username );
    Axios.get(
    `http://localhost:5000/api/events/adminEvents/${username}`
    )
    .then(function (response) {
        console.log(response);
        setDisplayTable(true);
        setEvents(response.data.events);
        events.map((event) => {
          console.log(event); 
        });
        localStorage.setItem("userlevel","2");
      })
      .catch(function (error) {
        console.log(error);
        alert("Event's not found");
      });

  }

  function handleSubmit1(event) {
    event.preventDefault();
    console.log("Submitted Query with user:",username );
    Axios.get(
    `http://localhost:5000/api/events/adminEvents/active/${username}`
    )
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
        alert("Event's not found");
      });

  }

  return (
    <div className="heldEvent">
      <h5>Click Search to Find Event's You Have Hosted</h5>
        <br />
        <br/>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit1}>
          Currently Active Events
        </button>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          All Events
        </button>

        <h1>Event's Hosted</h1>
        {displayTable ? (
              <table className="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">URL</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
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

export default HeldEvent;
