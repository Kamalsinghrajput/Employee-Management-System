import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from './utils/LocalStorage'
// import { getLocalStorage } from './utils/LocalStorage'

function App() {
  // useEffect(()=>{getLocalStorage()})

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }
    
    if (!authData) {
      alert("Invalid credentials");
      return;
    }
    
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );
    
    if (employee) {
      const employeeUser = { role: "employee" };
      setUser(employeeUser);
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      return;
    }
    
    alert("Invalid credentials");
    
  };
console.log("loggedInUserData:",loggedInUserData);

  return (
    
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === "admin" && <AdminDashboard />}
      {user?.role === "employee" && <EmployeeDashboard data={loggedInUserData} />}
      </>
  );
}

export default App;
