import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    if(loading){
      return ( <div className='min-h-screen flex justify-center items-center'>
        <p>Loading...</p>
      </div>)
    }
    if(!user){
        return <Navigate to="/login" replace />
    }
  return children
}
