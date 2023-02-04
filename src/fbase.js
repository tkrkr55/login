import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DB_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// 로그인이 호출되면 signInwithPopup이 사용되도록  호출을 해줄거에요
export function login(){

signInWithPopup(auth, provider)
  .then((result) => {
    // 사용자의 정보는 user에 들어온다고 합니다.콘솔로 확인해 봅시다.
   const user = result.user;
   console.log(user)

  }).catch(console)};