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
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location = "index.html";
  });
}
