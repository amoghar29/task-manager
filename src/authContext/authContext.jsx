import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const login = (email) => {
    setEmail(email);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
