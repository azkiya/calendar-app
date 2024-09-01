import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/main";
import MyCalendar from "./component/calendar";
import Signup from "./component/signup";
import Login from "./component/login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<Main />} />
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
      <Route path="/calendar" element={<MyCalendar />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;