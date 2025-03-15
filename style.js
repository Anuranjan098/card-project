// Check if user information is already stored in local storage
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    displayUserInfo(userInfo);
}

// Function to store user information in local storage
function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    if (!firstName || !lastName || !country || !phoneNumber || !state || !city || !village) {
        alert("Please enter all details.");
        return;
    }

    const userInfo = { firstName, lastName, country, phoneNumber, state, city, village };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    displayUserInfo(userInfo);
}

// Function to display user information in the card
function displayUserInfo(userInfo) {
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}

// Button to manually input user details
const button = document.createElement("button");
button.textContent = "Enter User Info";
button.style.marginTop = "10px";
button.style.padding = "8px 12px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.display = "block";
button.addEventListener("click", storeUserInfo);
document.body.appendChild(button);
