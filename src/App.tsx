import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";
import AppContext from "./context";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <AppContext.Provider value={{ email, setEmail }}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
