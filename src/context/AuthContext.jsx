// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   sendPasswordResetEmail,
// } from "firebase/auth";
// import { Auth }  from "firebase/auth";
// import Firebase from "../../src/components/Firebase/Firebase"

// const authContext = createContext();

// // HOOK USECONTEXT
// //Devuelve la informacion del usuario 
// export const useAuth = () => {
//   const context = useContext(authContext);
//   if (!context) throw new Error("There is no Auth provider");
//   return context;
// };

// export default function AuthProvider({ children }) {

  
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const loginWithGoogle = () => {
//     const googleProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logout = () => signOut(auth);

//   const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

//   useEffect(() => {
//     const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log({ currentUser });
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubuscribe();
//   }, []);

//   return (
//     <authContext.Provider
//       value={{
//         signup,
//         login,
//         user,
//         logout,
//         loading,
//         loginWithGoogle,
//         resetPassword,
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// }

