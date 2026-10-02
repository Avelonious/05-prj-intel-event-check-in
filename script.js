// Get all needed DOM Elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  //get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage} `);

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //Show welcome Message
  const message = `Welcome, ${name} from ${teamName}`;
  console.log(message);

  form.reset(); // Reset the form fields

  //Update the progress bar visually
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;
  //increase the attendee count visually
  const totalCountElement = document.getElementById("attendeeCount");
  totalCountElement.textContent = count;

});