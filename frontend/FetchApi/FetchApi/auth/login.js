let passwordForm = document.getElementById("password");
let emailForm = document.getElementById("email");
let formLogin = document.getElementById("formLogin");
let formSignup = document.getElementById("formSignup");
let login = document.getElementById("login");
let message = document.getElementById("message");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  email = emailForm.value;
  password = passwordForm.value;
  let formDataToBeSent = {
    email,
    password,
  };

  console.log(formDataToBeSent);

  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataToBeSent),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.role === 0) {
        window.location.href = "http://127.0.0.1:5500/Frontend/index.html";
      } else if (data.role === 1) {
        window.location.href = "http://127.0.0.1:5500/Frontend/admin.html";
      } else {
        emailForm.value = null;
        passwordForm.value = null;
        message.innerText = data.message;
      }
    });
});
