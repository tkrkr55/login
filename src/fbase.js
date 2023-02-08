// initalizeApp 을통해 app 을 초기화 시켜 주었다.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { v4 as uuid} from 'uuid';


const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DB_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
};


const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app)


 export function login(){
 signInWithPopup(auth, provider).catch(console.error);
}

export  function logout(){
  const auth = getAuth();
 signOut(auth).catch((error) => {
 
});
 }


 // 콜백함수를 만들어서 사용자 상태값이 변할때 그값을 가져와 사용하겠다.
 export function onUserStateChange(callback){
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우에 (로그인을 한경우)
   const updatedUser =  user ? await adminUSer(user) : null;
    // 5. admin 이라는 정보는 firebase에서 admins 라는 배열안에 admin의 ID 를 배열안에가지고 있을것임 
    //6. 방탄지민이 로그인을 한경우 ID와 admins 에서 가지고 있는 ID가 있는지 확인작업을 할것임.
    // 7. 백엔드로 했다면 더 보안을 강력하게 admin을 줄 수 있을것이다. 
    callback(updatedUser)
    })
}

async function adminUSer(user){
   // 2. 사용자가 어드민 권한을 가지고 있는지 확인
    // 3. 사용자가 있을때~ 어드민인경우 true 아닌경우 false로 설정 해줘야함.
    // 4. {...user, isAdmin : true /false 

    return get(ref(database,'admins'))//
    .then((snapshot)=>{
      if(snapshot.exists()){
        const admins =snapshot.val();
        console.log(admins)
        const isAdmin = admins.includes(user.uid)
        return {...user, isAdmin}
      }
      return user;
    })


}

// 클라우디니에서 저장된 제품을 불러오는 함수를 만들것임
// 비동기함수 임을 알려주는 async를 사용해준다.
// 제품을 받아올 product 와 이미지 를 받아올 url인 imageUrl 파라미터를 작성한다
// 파이어베이스에서 해당 함수를 호출하고 받아온 제품정보와 이미지를 파라미터로 보내준다.

// **제품 등록하기
//* 제품마다 고유의 id가 있으면 좋을듯 하다.
// uuid를 설치한다. npm add uuid
export async function addNewProduct(product,image){
  const id = uuid();
  set(ref(database,`products/${uuid()}`),{
    ...product,
    id,
    // price는 문자열 형태의 숫자를 받아오기 때문에 parseInt 를사용해서 숫자로 받아온다.
    price:parseInt(product.price),
    image,
    options:product.options.split(','),

  })
}