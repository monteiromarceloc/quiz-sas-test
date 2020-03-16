import fb from 'firebase'

//PROD

//DEV
const config = {
  apiKey: "AIzaSyCC86pkgnfycDnDOTo2OX0YhU0_iRN-pvc",
  authDomain: "quiz-sas-test.firebaseapp.com",
  databaseURL: "https://quiz-sas-test.firebaseio.com",
  projectId: "quiz-sas-test",
  storageBucket: "quiz-sas-test.appspot.com",
  messagingSenderId: "752089742439",
  appId: "1:752089742439:web:78dc27ff01dac8feb068c2",
  measurementId: "G-QFVMM0VJV1"
};

fb.initializeApp(config);

export default fb