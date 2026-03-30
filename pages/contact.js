
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const messageData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        time: new Date().toLocaleString()
      };

      let messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push(messageData);
      localStorage.setItem("messages", JSON.stringify(messages));

      alert("Your message has been sent!");
      contactForm.reset();
    });