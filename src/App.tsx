import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
