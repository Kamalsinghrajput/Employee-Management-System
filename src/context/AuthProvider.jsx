import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: null });

  useEffect(() => {
    // Initialize local storage only if it's empty
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    // Get data safely from local storage
    const storedData = getLocalStorage() || { employees: [], admin: null };
    setUserData(storedData);
  }, []);

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
