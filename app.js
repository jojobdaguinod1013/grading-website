function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      const uid = user.user.uid;

      firebase.firestore().collection("users").doc(uid).get().then(doc => {
        if (doc.data().role === "student") {
          window.location = "student.html";
        } else {
          window.location = "teacher.html";
        }
      });
    })
    .catch(error => {
      alert(error.message);
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location = "index.html";
  });
}
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      const uid = user.user.uid;

      firebase.firestore().collection("users").doc(uid).set({
        name: name,
        email: email,
        role: "student",
        section: "",
        studentId: ""
      }).then(() => {
        alert("Account created!");
        window.location = "index.html";
      });
    })
    .catch(error => alert(error.message));
}
