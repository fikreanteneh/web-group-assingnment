
let formSignup = document.getElementById("formSignup");
let signUp = document.getElementById("login");
let message = document.getElementById("message");

formSignup.addEventListener("submit", async (e) => {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let formDataToBeSent = {
    email,
    password,
  };

  console.log(formDataToBeSent);

  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataToBeSent),
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.status) {
      window.location.href = "http://127.0.0.1:5500/Frontend/login.html";
    } else {
      if (!data.status) {
        message.innerText = data.message
      } else {
        message.innerText = data.message[0]
      }

      email.value = null;
      password.value = null;
    }


  })
});
