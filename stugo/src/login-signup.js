// import { Store, registerInDevtools } from "pullstate";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth/react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";
// import { app, auth } from "./firebase-config";

// export const AuthStore = new Store({
//   isLoggedIn: false,
//   initialized: false,
//   user: null,
// });

// const unsub = onAuthStateChanged(auth, (user) => {
//   console.log("onAuthStateChange", user);
//   AuthStore.update((store) => {
//     store.user = user;
//     store.isLoggedIn = user ? true : false;
//     store.initialized = true;
//   });
// });

// export const appSignIn = async (email, password) => {
//   try {
//     const resp = await signInWithEmailAndPassword(auth, email, password);
//     AuthStore.update((store) => {
//       store.user = resp.user;
//       store.isLoggedIn = resp.user ? true : false;
//     });
//     return { user: auth.currentUser };
//   } catch (e) {
//     return { error: e };
//   }
// };

// export const appSignOut = async () => {
//   try {
//     await signOut(auth);
//     AuthStore.update((store) => {
//       store.user = null;
//       store.isLoggedIn = false;
//     });
//     return { user: null };
//   } catch (e) {
//     return { error: e };
//   }
// };

// export const appSignUp = async (email, password, displayName) => {
//   try {
//     // this will trigger onAuthStateChange to update the store..
//     const resp = await createUserWithEmailAndPassword(auth, email, password);

//     // add the displayName
//     await updateProfile(resp.user, { displayName });

//     AuthStore.update((store) => {
//       store.user = auth.currentUser;
//       store.isLoggedIn = true;
//     });

//     return { user: auth.currentUser };
//   } catch (e) {
//     return { error: e };
//   }
// };

// // export const googleSignIn = async () => {
// //     try {
// //         await GoogleSignin.hasPlayServices();
// //         const userInfo = await GoogleSignin.signIn();
// //         setState({ userInfo });
// //       } catch (error) {
// //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
// //           // user cancelled the login flow
// //         } else if (error.code === statusCodes.IN_PROGRESS) {
// //           // operation (e.g. sign in) is in progress already
// //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
// //           // play services not available or outdated
// //         } else {
// //           // some other error happened
// //         }
// //       }
// // }

// registerInDevtools({ AuthStore });
