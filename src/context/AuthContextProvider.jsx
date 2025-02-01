import React, { Children, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
const AuthContextProvider = ({Children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const login = (authToken) => {
        setAuthenticated(true);
        setToken(authToken);
        navigate('/quiz')
    }

  return (
      <AuthContext.Provider value={{login, token, isAuthenticated}}>
          {Children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider