// src/api/auth.ts
import mainInstance from "./axiosInstance";

export const checkAuthStatus = async () => {
  const response = await mainInstance.get("/check", { withCredentials: true });
  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await mainInstance.post(
    "/login",
    { username, password },
    { withCredentials: true }
  );
  return response.data;
};

export const signup = async (data: { email: string; password: string }) => {
  const response = await mainInstance.post("/signup", data, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async () => {
  await mainInstance.post("/logout", {}, { withCredentials: true });
};
