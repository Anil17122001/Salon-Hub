
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}


let selectedService = "";

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    selectedService = card.querySelector("h4").innerText;
    document.getElementById("serviceName").innerText = selectedService;
    document.getElementById("popupForm").style.display = "flex";
  });
});


function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}


function sendMessage() {
  const name = document.getElementById("userName").value.trim();
  const phone = document.getElementById("userPhone").value.trim();
  const msg = document.getElementById("userMessage").value.trim();

  if (!name || !phone || !msg) {
    alert("Please fill all fields!");
    return;
  }

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({
    service: selectedService,
    name,
    phone,
    message: msg,
    time: new Date().toLocaleString(),
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message sent to Admin!");
  closePopup();
  document.getElementById("userName").value = "";
  document.getElementById("userPhone").value = "";
  document.getElementById("userMessage").value = "";
}


document.querySelectorAll(".g-card img").forEach((img) => {
  img.addEventListener("click", () => {
    document.getElementById("popupImg").src = img.src;
    document.getElementById("popupView").style.display = "flex";
  });
});

function closePopup() {
  document.getElementById("popupView").style.display = "none";
}