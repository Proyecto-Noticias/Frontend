import { useState } from 'react';

export const usePassword = (state) => {
  const [showPassword, setShowPassword] = useState(state);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return [showPassword, handleShowPassword];
};
