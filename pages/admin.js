const loginBox = document.querySelector(".login-box");
const bookingTable = document.getElementById("bookingTable");
const messageTable = document.getElementById("messageTable");
const logoutBtn = document.getElementById("logoutBtn");


if (localStorage.getItem("adminLoggedIn") === "true") {
    loginBox.style.display = "none";
    bookingTable.style.display = "table";
    messageTable.style.display = "table";
    loadBookings();
    loadMessages();
} else {
    loginBox.style.display = "block";
    bookingTable.style.display = "none";
    messageTable.style.display = "none";
}


function adminLogin() {
    const user = document.getElementById("adminUser").value;
    const pass = document.getElementById("adminPass").value;
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "12345";

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Admin Login Successful!");
        loginBox.style.display = "none";
        bookingTable.style.display = "table";
        messageTable.style.display = "table";
        loadBookings();
        loadMessages();
    } else {
        alert("Incorrect Username or Password!");
    }
}

function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const tbody = document.querySelector("#bookingTable tbody");
    tbody.innerHTML = "";

    bookings.forEach((b, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${b.shop}</td>
                <td>${b.name}</td>
                <td>${b.phone}</td>
                <td>${b.service}</td>
                <td>${b.worker}</td>
                <td>${b.date}</td>
                <td>${b.time}</td>
                <td>${b.price}</td>
                <td>${b.message}</td>
                <td><button onclick="deleteBooking(${i})">Delete</button></td>
            </tr>
        `;
    });
}


function deleteBooking(i) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.splice(i, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    loadBookings();
}


function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const tbody = document.querySelector("#messageTable tbody");
    tbody.innerHTML = "";

    messages.forEach((msg, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${msg.service}</td>
                <td>${msg.name}</td>
                <td>${msg.phone}</td>
                <td>${msg.message}</td>
                <td>${msg.time || "-"}</td>
            </tr>
        `;
    });
}


logoutBtn.onclick = () => {
    localStorage.removeItem("adminLoggedIn");
    location.reload();
};