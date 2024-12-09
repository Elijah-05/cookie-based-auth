// src/pages/Home.tsx

import { logout } from "../api/requests";

const Home = () => {

    const handleLogout = async() => {
        logout()
    }

  return <h1>Welcome to the Home Page
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  </h1>;
};

export default Home;
