const dateElement = document.getElementById("dateText");

// Create a new Date object to get the current date
const today = new Date();

// Format the date according to your desired format (e.g., "YYYY-MM-DD")
const formattedDate = today.toLocaleDateString("en-US"); // Adjust format based on your locale

// Replace the innerHTML of the element with the formatted date
dateElement.innerHTML = "The current date is: " + formattedDate;