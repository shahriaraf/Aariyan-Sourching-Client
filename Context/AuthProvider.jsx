"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../firebase.init";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({
  children,
  data,
  filterAttributes,
  newsLetterEmail,
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        return unsbscribe();
      };
    });
  }, []);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photoUrl) => {
    if (!auth.currentUser) throw new Error("No user is logged in");
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const changePassword = async (currentPassword, newPassword) => {
    if (!auth.currentUser) throw new Error("No user is logged in");
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = (email) => {
    if (!email) throw new Error("Email is required for password reset");
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    registerUser,
    logIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    changePassword,
    resetPassword,
    data,
    filterAttributes,
    newsLetterEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
