import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

interface IAuthContext {}

const AuthContext = createContext<IAuthContext>({});

const AuthProvider = (props: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | undefined>(undefined);

  useEffect(() => {
    // TODO: Uncomment this if you are making use of Firebase Auth
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //   } else {
    //     setUser(false);
    //   }
    // });
    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  const login = () => {};

  const signUp = () => {};

  const signOut = () => {
    return router.push("/login");
  };

  const sendPasswordResetEmail = () => {};

  const confirmPasswordReset = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signUp,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
