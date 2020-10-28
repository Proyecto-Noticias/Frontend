import React, { memo } from "react";

import RegisterScreen from "./auth/RegisterScreen";

const MainRegister = () => {
  return (
    //Class in _mainlogin.scss
    <>
      <div className="mainlogin__background">
        <RegisterScreen />
      </div>
    </>
  );
};

export default memo(MainRegister);
