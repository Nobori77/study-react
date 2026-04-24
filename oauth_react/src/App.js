import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useEffect } from 'react';
import useAuthStore from './store/useAuthStore';


// app 첫번째 fetch
// 1. accessToken -> 사용자의 정보 요청

// 첫 번째 fetch 오류 catch 부분
// 2. accessToken 만료 -> refreshToken(accessToken 갱신)
// 두 번째 fetch 요청
// 3. refreshToken과 accessToken -> 백엔드 서버("api/auth/refresh")
// 4. refreshToken 내가 발급한게 맞는지 검증
// 5. 새로운 accessToken을 발급 -> 프론트의 쿠키로 보냄
// 6. 새로운 accessToken으로 -> 사용자의 정보를 재요청

// 두 번째 fetch의 catch문
// 4 -> refreshToken 만료 -> 로그아웃 처리 -> 재로그인



function App() {

  const {isAuthenticated, member ,setMember, setIsAuthenticated} = useAuthStore()
  
  useEffect(() => {
    const intializeAuth = async () => {
      try {
        const response = await fetch("http://localhost:10000/api/members/me", {
          credentials: "include"
        })
  
        if(!response.ok) throw new Error("Access Token Expired")

        const datas = await response.json()
        const {success, message, data} = datas

        if(success){
          console.log(message, data)
          setMember(data)
          setIsAuthenticated(true)
        }
      } catch (err) {
        console.log("err")
        // accessToken 만료
        try {
          console.log("err")
          // 한번더 refresh 토큰과 accessToken을 백엔드로 보내서 accessToken 재발급
          


        }
        catch (err) {
          // refresh 토큰 만료 -> 재로그인
          console.log("err")
        }
    
    }
  }
    intializeAuth()
  }, [isAuthenticated])

  console.log(member)


  return (
   <RouterProvider router={router} />
  );
}

export default App;
