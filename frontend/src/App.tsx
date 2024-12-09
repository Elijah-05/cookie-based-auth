import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import AuthRoute from "./routes/AuthRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";

const App: React.FC = () => (
  <AuthProvider>
      <Routes>
        {/* Authentication Routes */}
        <Route
          path="/"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
  </AuthProvider>
);

export default App;
