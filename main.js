document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (firstName.length >= 10) {
      alert("First name must be less than 10 characters.");
      return;
    }

    if (lastName.length >= 10) {
      alert("Last name must be less than 10 characters.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,8}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be less than 8 characters and include uppercase, lowercase, symbols, and numbers."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must be a valid 10-digit number.");
      return;
    }

    const validExtensions = /(\.jpg|\.png)$/i;
    if (!validExtensions.exec(file.name)) {
      alert("File must be a jpg or png image.");
      return;
    }

    alert("All validations passed! Form submitted successfully.");
  });
