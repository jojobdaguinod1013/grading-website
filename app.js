// LOGIN FUNCTION
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      firebase.firestore().collection("users").doc(uid).get()
        .then(doc => {
          if (!doc.exists) {
            alert("No user profile found in Firestore.");
            return;
          }

          const data = doc.data();

          if (data.role === "student") {
            window.location = "student.html";
          } else if (data.role === "teacher") {
            window.location = "teacher.html";
          } else {
            alert("Unknown role. Check Firestore.");
          }
        })
        .catch(error => {
          alert("Firestore error: " + error.message);
        });
    })
    .catch(error => {
      alert("Login error: " + error.message);
    });
}


// SIGNUP FUNCTION
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      firebase.firestore().collection("users").doc(uid).set({
        name: name,
        email: email,
        role: "student",
        section: "",
        studentId: ""
      })
      .then(() => {
        alert("Account created successfully!");
        window.location = "index.html";
      })
      .catch(error => {
        alert("Firestore error: " + error.message);
      });
    })
    .catch(error => {
      alert("Signup error: " + error.message);
    });
}


// LOGOUT FUNCTION
function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location = "index.html";
    })
    .catch(error => {
      alert("Logout error: " + error.message);
    });
}
