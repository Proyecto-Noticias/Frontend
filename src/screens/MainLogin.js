import React, { memo } from "react";

import LoginScreen from "./auth/LoginScreen";
import MainTitle from "../components/MainTitle";
import Confirmation from "../components/Confirmation";
const MainLogin = () => {
  return (
    <>
      <div className="mainlogin__background">
        <MainTitle />
        <Confirmation />
        <LoginScreen />
      </div>
    </>
  );
};

export default memo(MainLogin);
