import Axios from "axios";
import { useState } from "react";
function Admin() {
  const [inputuserquery, setUserquery] = useState("");
  const [events, setEvents] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);
  function handleInputs(value, setState) {
    setState(value);
    console.log(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputuserquery !== "") {
      console.log("Submitted Query with UserName:" + inputuserquery);
      Axios.get(
        `http://localhost:5000/api/events/adminEvents/${inputuserquery}`
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
        });
    }
  }

  return (
    <div className="Admin">
      <h1>Admin Page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="inputqueryname">Query User</label>
          <input
            type="text"
            className="form-control"
            id="inputqueryname"
            placeholder="Admin1234"
            required
            onChange={(event) => handleInputs(event.target.value, setUserquery)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit Query
        </button>
        <br />
      </form>
      <br></br>
      <h1>User's Events</h1>
      
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

export default Admin;
