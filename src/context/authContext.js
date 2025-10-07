import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ✅ Hàm kiểm tra token hết hạn
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp) return false;
      const now = Date.now() / 1000;
      console.log("Token exp:", decoded.exp, "Now:", now);
      return decoded.exp < now;
    } catch (err) {
      console.log("Error decoding token:", err);

      return true; // lỗi decode => token không hợp lệ
    }
  };

  // ✅ Hàm login
  const login = async (inputs) => {
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, inputs);

    setCurrentUser(res.data); // res.data nên chứa cả token
  };

  // ✅ Mỗi khi currentUser thay đổi -> lưu vào localStorage
  useEffect(() => {
    if (currentUser) {
      const token = currentUser.accessToken;
      if (isTokenExpired(token)) {
        console.log("Token expired — logging out...");
        localStorage.removeItem("user");
        setCurrentUser(null);
      } else {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  // ✅ Kiểm tra token khi load app
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.token && isTokenExpired(storedUser.token)) {
      console.log("Token expired — auto logout.");
      localStorage.removeItem("user");
      setCurrentUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
