import React from 'react'
import { BiGift,BiPencil} from 'react-icons/bi';
import { useNavigate,Link } from 'react-router-dom';
import { login } from '../fbase';
export default function Navbar_main() {
  const navigate = useNavigate()
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
          <Link to='/products/new'><li><BiPencil/></li></Link>
           <button >Login</button>
        </ul>
      </div>
      </div>
    </>
  )
}
