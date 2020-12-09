import React from "react"

export default function Navbar() {

    var eventName = document.getElementById("Title");
    var eventAdmin = document.getElementById("Admin");
    var eventLoc = document.getElementById("Location");
    var eventStart = document.getElementById("StartDate");

    return (
        <div>
        <h1>Event Lookup Form</h1>
        <br></br>
        <form name = "create">
        <label for="title">Event Title: </label>
        <input type="TEXT" name="title" id="Title" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="admin">Admin name: </label>
        <input type="TEXT" name="admin" id="Admin" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="location">Location: </label>
        <input type="TEXT" name="location" id="Location" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <label for="startDate">Start Date: </label>
        <input type="TEXT" name="startDate" id="StartDate" size="30"></input>
        &nbsp;&nbsp;&nbsp;
        <br></br>
        </form>
        <button class="btn btn-primary" type="submit">Submit Lookup Query</button>
        </div>
    )
}