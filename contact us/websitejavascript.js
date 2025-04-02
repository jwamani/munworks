function sendEmail() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    
    if (email.trim() === "" || message.trim() === "" || fname.trim() === "" || lname.trim() === "") {
        alert("Please fill in all required fields before sending the email.");
        return;
    }
    
    document.getElementById("modalOverlay").style.display = "block";
    document.getElementById("emailModal").style.display = "block";
}

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
    document.getElementById("emailModal").style.display = "none";
}

const details = document.getElementById("detailsSection");
const iframeContainer = document.getElementById("iframeContainer");

details.addEventListener("toggle", function() {
    if (details.open) {
        iframeContainer.style.height = "70%"; // Shrink iframe when form is opened
    } else {
        iframeContainer.style.height = "100%"; // Expand iframe when form is closed
    }
});