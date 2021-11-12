import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeFirebase from "../Login/Firebase/firebase.init";
import { useEffect, useState } from "react";
import useAlert from "./useAlert";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const { sucessfullyLogin, loginError, createAccount } =
    useAlert();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, password, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName:  name ,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        createAccount();
      });
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
       const destination = location?.state?.from || "/";
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        loginError();
      })
      .finally(() => {
        setIsLoading(false);
        sucessfullyLogin();
      });
  };

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        saveUser(result.user.email, result.user.displayName, null, 'PUT')
        const destination = location?.state?.from || "/";
        history.replace(destination);
      setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        sucessfullyLogin();
      });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);


   useEffect(() => {
     fetch(`http://localhost:5000/user/${user.email}`)
       .then((res) => res.json())
       .then((data) => setAdmin(data.admin));
   }, [user.email]);


  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


   const saveUser = (email, displayName, password, method) => {
     const user = { email, displayName, password };
     fetch("http://localhost:5000/user", {
       method: method,
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(user),
     }).then();
   };


  return {
    user,
    error,
    isLoading,
    admin,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
