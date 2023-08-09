import { Store, registerInDevtools } from "pullstate";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app, auth } from "./firebaseConfig";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import React from "react";

export const AuthStore = new Store({
  isLoggedIn: false,
  initialized: false,
  user: null,
});

const unsub = onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChange", user);
  AuthStore.update((store) => {
    store.user = user;
    store.isLoggedIn = user ? true : false;
    store.initialized = true;
  });
});

export const appSignIn = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    AuthStore.update((store) => {
      store.user = resp.user;
      store.isLoggedIn = resp.user ? true : false;
    });
    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const appSignOut = async () => {
  try {
    await signOut(auth);
    AuthStore.update((store) => {
      store.user = null;
      store.isLoggedIn = false;
    });
    return { user: null };
  } catch (e) {
    return { error: e };
  }
};

export const appSignUp = async (email, password, displayName) => {
  try {
    // this will trigger onAuthStateChange to update the store..
    const resp = await createUserWithEmailAndPassword(auth, email, password);

    // add the displayName
    await updateProfile(resp.user, { displayName });

    AuthStore.update((store) => {
      store.user = auth.currentUser;
      store.isLoggedIn = true;
    });

    return { user: auth.currentUser };
  } catch (e) {
    return { error: e };
  }
};

// GoogleSignin.configure({
//   scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
//   webClientId:
//     "<41104246347-cl2nsj6l05aaqfg1quaju03fkaahd56n.apps.googleusercontent.com>", // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: "", // specifies a hosted domain restriction
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: "", // [Android] specifies an account name on the device that should be used
//   iosClientId:
//     "<41104246347-l6dj386uvva2emubojb9mj8aqgilap79.apps.googleusercontent.com>", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//   googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
//   openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
//   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
// });

//
registerInDevtools({ AuthStore });
