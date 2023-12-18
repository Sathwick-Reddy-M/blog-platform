import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFBZj9xmgKAtm08mY5RQ0etrkdIfWTBkY",
  authDomain: "blog-platform-e05d5.firebaseapp.com",
  projectId: "blog-platform-e05d5",
  storageBucket: "blog-platform-e05d5.appspot.com",
  messagingSenderId: "448144652406",
  appId: "1:448144652406:web:c9568d1561d3175173c757",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function signUpUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log("User SignUp Successful");
      return userCredential;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function signInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const updateCurrentUser = async (setUser) => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        resolve(user);
      },
      reject
    );
  });
};

export const signOutUser = async () => await signOut(auth);
