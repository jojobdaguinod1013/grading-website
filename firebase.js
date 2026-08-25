const firebaseConfig = {
  apiKey: "AIzaSyDCGScZAkoJa3sVKUhd56NFXxuxE8-4cME",
  authDomain: "grading-website-101d1.firebaseapp.com",
  projectId: "grading-website-101d1",
  storageBucket: "grading-website-101d1.firebasestorage.app",
  messagingSenderId: "984831495316",
  appId: "1:984831495316:web:8b1bb081539e8f97e13881",
  measurementId: "G-05EC78X903"
};
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_APP",
  storageBucket: "YOUR_APP.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
