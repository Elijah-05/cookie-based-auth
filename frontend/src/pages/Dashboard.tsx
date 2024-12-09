import React, { useEffect, useState } from "react";
import mainInstance from "../api/axiosInstance";

const Dashboard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await mainInstance.get("/auth/check");
        setUser(data.user);
      } catch {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  if (!user) {
    return <p>Not authenticated</p>;
  }

  return <h1>Welcome, {user?.username}</h1>;
};

export default Dashboard;
