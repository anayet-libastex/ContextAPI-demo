import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const name = "Anayet";
    const country = "Bangladesh";
    const data = [
        {name: "laptop", price: 50000},
        {name: "mobile", price: 20000},
        {name: "headphones", price: 1200}
    ]
    const nayoks = ["Jasim", "Alomgir", "Salman Shah", "Manna", "Shakib khan"];
  return (
    <AuthContext.Provider value={{name, country, data,nayoks}}> 
        {children}
    </AuthContext.Provider>
  )
}

