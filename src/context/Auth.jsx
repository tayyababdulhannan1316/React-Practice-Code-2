import { createContext, useContext, useEffect, useState} from 'react'

const Auth = createContext()
const initialState = {isAuth:true , user:{}}
const AuthContext = ({children}) => {
  const [isAppLoading , setIsAppLoading] = useState(true)
  const [state , setState] = useState(initialState)
  const readProfile = () => {
    const user = {uid:"123" , emai:"tayyab@yahoo.com" , name:"Tayyab Abdul Hannan"}
    setState({isAuth:true ,user})
    setTimeout(() => {
      setIsAppLoading(false)
    }, 2000);
  }
  useEffect(() => { readProfile()},[])
  const handleLogout = () =>{
    setState(initialState)
  }
   
  return (
    <Auth.Provider value={{...state , isAppLoading , handleLogout}}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext

// export const useAuthContext = () => {return useContext(Auth)}
export const useAuthContext = () => useContext(Auth)