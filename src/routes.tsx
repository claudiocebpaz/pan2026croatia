// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Program from "./pages/Program";
import TestSupabase from "./pages/TestSupabase";
import Terms from "./pages/Terms";
import { AuthWrapper } from "./components/shared/AuthWrapper";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthWrapper />} />
      <Route
        path="/rooms"
        element={
          <AuthWrapper>
            <Rooms />
          </AuthWrapper>
        }
      />
      <Route
        path="/program"
        element={
          <AuthWrapper>
            <Program />
          </AuthWrapper>
        }
      />
      <Route path="/testsupabase" element={<TestSupabase />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
