import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <main id="loginBox">
        <p id="subject">Westagram</p>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일 "
        />
        <input type="text" className="password" placeholder="비밀번호" />
        <button class="buttonBox">로그인</button>
        <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
      </main>
    </>
  );
};

export default Login;
