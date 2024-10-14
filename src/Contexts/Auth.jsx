import {useState, useContext, createContext} from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState( null )

    const login = (name, password) => setUser({ user:name })

    const logout = () =>  setUser( null )

    return (
        <AuthContext.Provider value={{login, logout, user}}>
            { children }
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext( AuthContext )