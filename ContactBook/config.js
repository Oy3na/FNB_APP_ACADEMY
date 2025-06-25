

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/"; // Update this path to your actual API endpoint
let apiKey = checkApiKey(); // Ensure the API key is set before making requests

function checkApiKey() { // Check if the API key is stored in localStorage
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
