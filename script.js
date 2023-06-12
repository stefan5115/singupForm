const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const message = document.getElementById('message')

var passConfirm = function() {
    if (password.value === confirmPassword.value) {
        message.style.color = "Green";
        message.innerHTML = "Passwords match!"
        password.style.border = "2px solid green"
        confirmPassword.style.border = "2px solid green"
    } else {
        message.style.color = "Red";
        message.innerHTML = "Passwords do NOT match!"
        password.style.border = "2px solid red"
        confirmPassword.style.border = "2px solid red"
    }
  }

  

