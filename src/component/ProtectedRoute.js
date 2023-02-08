import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext'

export default function ProtectedRoute({children,requireAdmin}) {
  const {user} = useAuthContext();
// 만약 사용자가 없거나 || 어드민이 필요로 한데 사용자가 어드민이 아닌경우 
// 이런경우 홈으로 리다이렉트 되도록 설정을 할 수 있다.
  if(!user || (requireAdmin && !user.isAdmin)){
    return <Navigate to="/" replace />
  }
  return children
}
