import React from "react";
import { EmailState } from "./pages/Login";
const AppContext = React.createContext<EmailState>({});

export default AppContext;
