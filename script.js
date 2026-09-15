// signin page

const signin = document.getElementById("signin");
const email = document.getElementById("email");
const password = document.getElementById("password");
const forminput = document.getElementById("forminput");

// signup page
const signup = document.getElementById("signup");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const city = document.getElementById("location");
const confirmpassword = document.getElementById("confirmpassword");
const formsignup = document.getElementById("formsignup");

// name validation

function isphone(phone) {
  return /^[0-9]{10}$/.test(phone);
}
if (phone) {
  phone.addEventListener("input", () => {
    const phonerror = document.getElementsByClassName("phoneerror")[0];

    if (!isphone(phone.value)) {
      phonerror.textContent = "phone number have must 10 digits";
      phonerror.style.color = "red";
      phonerror.style.visibility = "visible";
      phonerror.style.display = "block";
    } else {
      phonerror.textContent = "valid number";
      phonerror.style.color = "green";
      phonerror.style.visibility = "visible";
      phonerror.style.display = "block";
    }
  });
}

// email pattern
function isemail(email) {
  return /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]+$/.test(email);
}
email.addEventListener("input", () => {
  const validerror = document.getElementsByClassName("error")[0];

  if (!isemail(email.value)) {
    validerror.textContent = "Invalid email";
    validerror.style.color = "red";
    validerror.style.visibility = "visible";
    validerror.style.display = "block";
  } else {
    validerror.textContent = "valid email";
    validerror.style.color = "green";
    validerror.style.visibility = "visible";
    validerror.style.display = "block";
  }
});
// cityerror
function iscity(city) {
  return /^[a-zA-Z ]+$/.test(city);
}
if (city) {
  city.addEventListener("input", () => {
    const cityerror = document.getElementsByClassName("cityerror")[0];

    if (!iscity(city.value)) {
      cityerror.textContent = "alphabets only";
      cityerror.style.color = "red";
      cityerror.style.visibility = "visible";
      cityerror.style.display = "block";
    } else {
      cityerror.textContent = "valid city";
      cityerror.style.color = "green";
      cityerror.style.visibility = "visible";
      cityerror.style.display = "block";
    }
  });
}

// passworderror
function ispassword(password) {
  return /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/.test(password);
}
if (password) {
  password.addEventListener("input", () => {
    const passerror = document.getElementsByClassName("passerror")[0];

    if (!ispassword(password.value)) {
      passerror.textContent =
        "Password must contain at least 8 characters with letters and numbers";
      passerror.style.color = "red";
      passerror.style.visibility = "visible";
      passerror.style.display = "block";
    } else {
      passerror.textContent = "valid password";
      passerror.style.color = "green";
      passerror.style.visibility = "visible";
      passerror.style.display = "block";
    }
  });
}

// confirm password validation

if (confirmpassword) {
  confirmpassword.addEventListener("input", () => {
    const confirmpasserror =
      document.getElementsByClassName("confirmpasserror")[0];
    if (password.value != confirmpassword.value) {
      confirmpasserror.textContent = "Password does not match";
      confirmpasserror.style.color = "red";
      confirmpasserror.style.visibility = "visible";
      confirmpasserror.style.display = "block";
    } else {
      confirmpasserror.textContent = "Valid password";
      confirmpasserror.style.color = "green";
      confirmpasserror.style.visibility = "visible";
      confirmpasserror.style.display = "block";
    }
  });
}

if (signin) {
  forminput.addEventListener("submit",async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (email == "") {
      alert("Enter valid email");
      return;
    } else if (!isemail(email)) {
      alert("Enter a valid email");
      return;
    } else if (password == "") {
      alert("Enter your password");
      return;
    } else if (!ispassword(password)) {
      alert(
        "Password must contain at least 8 characters with letters and numbers",
      );
      return;
    }

    try{
      const response=await fetch("https://fakestoreapi.com/users");
      const data=await response.json();

      // match the user details

      const user=data.find((user)=>{
        return user.email==email && user.password==password;
      });
       if (user) {

        alert("Login successful");

        // go to home page
        window.location.href = "tourist.html";

      } else {

        alert("Invalid email or password");

      }


    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }
  });
}

if (signup) {
  formsignup.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document
      .getElementById("confirmpassword")
      .value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("location").value.trim();

    const users = {
      name: name,
      email: email,
      phone_number: phone,
      city: city,
      password: password,
      confirm_password: confirmpassword,
    };

    if (name == "") {
      alert("Enter your name");
      return;
    }
    if (email == "") {
      alert("Enter your email");
      return;
    } else if (!isemail(email)) {
      alert("Enter valid email");
      return;
    } else if (phone == "") {
      alert("Enter your phone number");
      return;
    } else if (!isphone(phone)) {
      alert("Phone number must contain 10 digits");
      return;
    } else if (city == "") {
      alert("Enter your city");
      return;
    } else if (!iscity(city)) {
      alert("City must contain alphabets only");
      return;
    } else if (password == "") {
      alert("Enter your password");
      return;
    } else if (!ispassword(password)) {
      alert(
        "Password must contain at least 8 characters with letters and numbers",
      );
      return;
    } else if (confirmpassword == "") {
      alert("Confirm your password");
      return;
    } else if (password != confirmpassword) {
      alert("Password does not match");
      return;
    } 
   try {

  const response = await fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });

  const data = await response.json();

  console.log(data);

  alert("Account created successfully");

} catch (error) {

  alert("Something wrong");
  console.log(error);

}
  });
}
