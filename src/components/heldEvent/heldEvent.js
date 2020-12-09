import React from "react"

export default function Navbar() {

    var eventAdmin = document.getElementById("Admin");
    var eventUrl = document.getElementById("Url");
    var eventLoc = document.getElementById("Location");
    var eventStart = document.getElementById("StartDate");
    function handleSubmit(){
        console.log(eventAdmin);
        console.log(eventUrl);
        console.log(eventLoc);
        console.log(eventStart);
    }

    return (
        <div>
        <h1>Held Event Search Form</h1>
        <br></br>
        <form name = "create">
        <label for="admin">Admin name: </label>
        <input type="TEXT" name="admin" id="Admin" size="30" title = "Admin"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label for="url">Url: </label>
        <input type="TEXT" name="url" id="Url" size="30"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label for="location">Location: </label>
        <input type="TEXT" name="location" id="Location" size="30"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label for="startDate">Start Date: </label> 
        <input type="TEXT" name="startDate" id="StartDate" size="30"></input>
        &nbsp;&nbsp;&nbsp;&nbsp;
        </form>
        <br></br>
        <button class="btn btn-primary" type="submit" onClick = {handleSubmit}>Check Held Events</button>
        </div>
    )
}