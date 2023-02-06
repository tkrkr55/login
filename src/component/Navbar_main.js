import React,{useEffect, useState} from 'react'
import { BiGift,BiPencil} from 'react-icons/bi';
import { useNavigate,Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../fbase';
import Button from './ui/Button';
import User from './User';
export default function Navbar_main() {
  // user의 정보를 담아줄 State를 만들어준다.
  const [user,setUser] = useState()
  const navigate = useNavigate()


  // 맨처음에 마운트 될때 즉 새로고침될때 재랜더링될때  딱 한번만 실행이 될것인데 값이 login이면 그 값을 가져다가 사용하겠다.
  useEffect(()=>{
    onUserStateChange(user =>{
      console.log("무슨값이야?",user)
      setUser(user)
    })
    },[])
 
  
  return (
    <>
      <div className='navbar_wrap'>
     <Link to ='/'> <div className='navbar_main' >
         <p><BiGift/></p>
         <div>Shoppy</div>
         </div>
         </Link>
      <div className='navbar_right'>
        <ul className='navbar_ul'> 
        <Link to='/products'> <li >Products</li></Link> 
         <Link to ='/carts'><li>Carts</li></Link> 
         
          {/* 로그인 UI 에서는 무조건 Login만 보여주는게 아니라 
          사용자가 없다면? !user Login을 보여주고 있다면 Logout을 보여줘라로 로직을 짠다.
          여기서 && 은 왼쪽에  있는 값이 참이면? 오른쪽값이 실행되는것  */}
          { user && user.isAdmin &&(
             <Link to='/products/new' > <li className='text'><BiPencil/></li></Link>
          )}
          {user && <User user={user}/>}
          {!user &&<Button text={'Login'} onClick={login}/>}
          {user && <Button text={'Logout'} onClick={logout}/>}
           
        </ul>
      </div>
      </div>
    </>
  )
}
