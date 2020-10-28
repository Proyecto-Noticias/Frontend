import React, { memo } from "react";

import LoginScreen from "./auth/LoginScreen";
import MainTitle from "../components/MainTitle";
const MainLogin = () => {
  return (
    <>
      <div className="mainlogin__background">
        <MainTitle />
        <LoginScreen />
      </div>
    </>
  );
};

export default memo(MainLogin);
