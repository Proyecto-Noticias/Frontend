import React, { memo } from "react";

import RegisterScreen from "./auth/RegisterScreen";

const MainRegister = () => {
  return (
    <>
      <div className="Background">
        <RegisterScreen />
      </div>
    </>
  );
};

export default memo(MainRegister);
