import React from 'react'

export default function ProtectedRoute({children ,requireAdmin}) {
 .//로그인한 사용자가 있는지 확인
 // 그 사용자가 어드민 권한이 있는지 확인
 // requireAdmin이 true인경우 로그인도 되어있어야 하고 어드민권한도 갖고 있어야한
 // 조건이 맞지 않으면 상위 경로로 이동 ( / )
 // 조건이 맞는경우에만 전달된 children을 보여줌
}
