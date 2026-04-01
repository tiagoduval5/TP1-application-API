import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserDetails from "./UserDetails";

function AppRoutes({ users, loading, error }) {
  return (
    <Routes>
      <Route path="/" element={<Home users={users} loading={loading} error={error} />} />
      <Route path="/users/:id" element={<UserDetails users={users} />} />
    </Routes>
  );
}

export default AppRoutes;
