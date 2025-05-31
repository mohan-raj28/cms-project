import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import BasicLayouts from "../layouts/BasicLayouts";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Expenses from "../pages/dashboard/Expenses";
import Profile from "../pages/dashboard/Profile";
import Intro from "../pages/dashboard/Intro";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Route>
        <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayouts/>
          </PrivateRoute>)}>
        <Route path="/dashboard/intro" element={<Intro/>} />
        <Route path="/dashboard/expenses" element={<Expenses/>} />
        <Route path="/dashboard/profile" element={<Profile/>} />
        <Route path="/dashboard/display" element={<Display/>} />
        <Route path="/dashboard/analysis" element={<Analysis/>} />
      </Route>
    </Routes>
  )
}