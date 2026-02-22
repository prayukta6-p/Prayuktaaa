// Array to store events
let events = [];

// Function to add event
document.getElementById("addBtn").onclick = function() {

    let name = document.getElementById("eventName").value.trim();
    let date = document.getElementById("eventDate").value;

    if (!name || !date) {
        alert(" Please enter both Event Name and Date!");
        return;
    }

    let eventDate = new Date(date);
    let today = new Date();

    if (eventDate < today) {
        document.getElementById("result").innerHTML += 
        "<p>" + name + " - " + date + " (Date passed)</p>";
    } else {
        events.push({name, date});
        displayEvents();
    }

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
};

// Function to display events
function displayEvents() {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    events.forEach(function(e) {
        resultDiv.innerHTML += "<p> " + e.name + " - " + e.date + "</p>";
    });
}