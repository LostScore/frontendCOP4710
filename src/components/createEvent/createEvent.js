import React from "react";

export default function Navbar() {
  var eventName = document.getElementById("Title");
  var eventAdmin = document.getElementById("Admin");
  var eventDesc = document.getElementById("Description");
  var eventUrl = document.getElementById("Url");
  var eventLoc = document.getElementById("Location");
  var eventStart = document.getElementById("StartDate");
  var eventDate = document.getElementById("EndDate");

  function handleSubmit(){
    console.log(eventName);
    console.log(eventAdmin);
    console.log(eventDesc);
    console.log(eventUrl);
    console.log(eventLoc);
    console.log(eventStart);
    console.log(eventDate);
  }

  return (
    <div>
      <h1>Event Creation Form</h1>
      <br></br>
      <form name="create">
        <label for="title">Event Title: </label>
        <input type="TEXT" name="title" id="Title" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="admin">Admin Name: </label>
        <input type="TEXT" name="admin" id="Admin" size="30"></input>
        <br></br>
        <label for="url">Host Website: </label>
        <input type="TEXT" name="url" id="Url" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="location">Event Location: </label>
        <input type="TEXT" name="location" id="Location" size="30"></input>
        <br></br>
        <label for="startDate">Event Start Date: </label>
        <input type="TEXT" name="startDate" id="StartDate" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="endDate">Event End Date: </label>
        <input type="TEXT" name="endDate" id="EndDate" size="30"></input>
        <br></br>
        <label for="description" style={{ marginRight: 37 + "em" }}>
          Event Description:{" "}
        </label>
        <br></br>
        <textarea
          name="description"
          id="Description"
          rows="3"
          cols="100"
        ></textarea>
        <br></br>
      </form>
      <button class="btn btn-primary" type="submit" onClick={handleSubmit}>
        Submit Event for Approval
      </button>
    </div>
  );
}
