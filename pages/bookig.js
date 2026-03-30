
const services = {
  "Haircut": { A: 200, B: 250, C: 180 },
  "Facial": { A: 400, B: 450, C: 350 },
  "Makeup": { A: 1000, B: 1200, C: 900 },
  "Spa": { A: 800, B: 850, C: 750 }
};

const serviceSelect = document.getElementById("service");
const workerSelect = document.getElementById("worker");
const priceDisplay = document.getElementById("price");
const bookingForm = document.getElementById("bookingForm");


function updatePrice() {
  const service = serviceSelect.value;
  const worker = workerSelect.value;
  if (service && worker) {
    priceDisplay.textContent = services[service][worker];
  } else {
    priceDisplay.textContent = 0;
  }
}

serviceSelect.addEventListener("change", updatePrice);
workerSelect.addEventListener("change", updatePrice);


bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();


  updatePrice();

  const booking = {
    shop: document.getElementById("shop").value,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: serviceSelect.value,
    worker: workerSelect.value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    price: priceDisplay.textContent,
    message: document.getElementById("message").value
  };


  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking Successful!");


  bookingForm.reset();
  priceDisplay.textContent = 0;
});