// Get references to the form elements
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// Add an event listener for the form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Perform form validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Form validation success, you can handle the form submission here
  // For example, you can send the form data to a server-side script using AJAX
  sendFormData(name, email, message);

  // Reset the form fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

// Function to send the form data (replace with your own implementation)
function sendFormData(name, email, message) {
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // You can use AJAX or other methods to send the data to a server-side script
  // For example, you can use the Fetch API or XMLHttpRequest
}
