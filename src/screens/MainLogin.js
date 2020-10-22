import React from "react";

import { LoginScreen } from "./auth/LoginScreen";
import MainTitle from "../components/MainTitle";

const MainLogin = () => {
  return (
    <>
      <div className="Background">
        <MainTitle />
        <LoginScreen />
      </div>
    </>
  );
};

export default MainLogin;
