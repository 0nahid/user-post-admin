import { createContext } from "react"
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    )
}