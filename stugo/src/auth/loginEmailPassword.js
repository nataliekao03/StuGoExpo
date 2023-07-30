import { auth } from "../firebaseConfig";

const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password,
    );
    // User signed in successfully
    const user = userCredential.user;
    console.log("Logged in user:", user);
  } catch (error) {
    // Handle errors during login
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
  }
};

export { loginWithEmailPassword };
