import React, { useContext, useReducer} from 'react'

export const AuthContext = React.createContext()


const authReducer = (state, action) => {

  switch (action.type) {
    case 'login':
      const token = action.payload
      localStorage.setItem('token ateliyeh' , token)
       return {state:token}

    case 'check':
      const gettoken = localStorage.getItem('token ateliyeh') ;  
      if (!gettoken) {
        action.payload('/');
      }
      break

    default:
      return state
  }
}

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, '')
  return <AuthContext.Provider value={{ state, dispatch }}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider
