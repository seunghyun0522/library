import styled from "styled-components";
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSection = styled.div`
  margin-top: 50px;
  width: 1280px;
  height: 832px;
  display: flex;
  box-shadow: 8px 5px 10px 3px rgba(0, 0, 0, 0.25);
`;
const LoginImg = styled.div<{ Img: string }>`
  width: 640px;
  height: 832px;
  background: url(${(props) => props.Img});

  background-repeat: no-repeat;
`;

const LoginContent = styled.div`
  width: 640px;
  height: 832px;
  padding: 100px 84px;
`;

const AppName = styled.div`
  width: 95.538px;
  height: 43.409px;
  flex-shrink: 0;
  color: #292929;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AppSummary = styled.div`
  color: #545454;
  font-family: "IBM Plex Serif";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 14px;
`;

const InputInfo = styled.input<{ marginInput?: string }>`
  width: 468px;
  height: 73px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 0px 0 0 38px;
  background: #fff;
  margin-bottom: ${(props) => props.marginInput};
`;
const LoginButton = styled.button<{ disabled: boolean }>`
  width: 468px;
  margin-top: 15px;
  height: 56px;
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ffeb60")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 16px;
`;
const SocialLoginSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  display: flex;
`;

const SocialLogin = styled.img<{ url: string }>`
  width: 40px;
  height: 40px;
  background-color: red;
  margin: 0 10px;
  border-radius: 25px;
  background: url(${(props) => props.url});
`;
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const socials = [
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/kakao-icon.9c9940291430ca6ad83b9ae1f3cc81a8.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/naver-icon.7128d171ea0b01233bb4b32a2b5ad260.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/facebook-icon.f3e1fcc7af9f4cac5be2179a846417f8.svg",
    },
    {
      url: "https://d3udu241ivsax2.cloudfront.net/v3/images/login/apple-icon.c88b92e286a1d29bcf581e12ac076d44.svg",
    },
  ];
  return (
    <>
      <BodyWrapper>
        <LoginSection>
          <LoginImg Img={login} />
          <LoginContent>
            <AppName>앱 이름</AppName>
            <AppSummary>서로 공유하고.. 재밌는 웹 사이트</AppSummary>
            <div style={{ marginTop: "60px" }}>
              <InputInfo
                marginInput="19px"
                placeholder="아이디를 입력해주세요."
                value={username}
                onChange={handleUsernameChange}
              />
              <InputInfo
                id="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={handlePasswordChange}
              />

              <Link to="/library">
                <LoginButton
                  onClick={handleLogin}
                  disabled={!username || !password}
                >
                  LOGIN
                </LoginButton>
              </Link>
            </div>
            <div
              style={{
                marginTop: "67px",
                textAlign: "center",
                color: "rgba(12, 12, 12, 0.70)",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(12, 12, 12, 0.70)",
                }}
                to="/signup"
              >
                회원가입
              </Link>{" "}
              <span> | </span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(12, 12, 12, 0.70)",
                }}
                to="/signup"
              >
                비밀번호 찾기
              </Link>{" "}
              <span> | </span>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(12, 12, 12, 0.70)",
                }}
                to="/signup"
              >
                관리자 로그인
              </Link>
            </div>
            <div style={{ textAlign: "center", marginTop: " 25px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="2"
                viewBox="0 0 182 2"
                fill="none"
              >
                <path d="M181.5 1H0" stroke="#D9D9D9" />
              </svg>{" "}
              <span
                style={{
                  color: "6E6E6E",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  margin: "0 10px",
                }}
              >
                OR
              </span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182"
                height="2"
                viewBox="0 0 182 2"
                fill="none"
              >
                <path d="M181.5 1H0" stroke="#D9D9D9" />
              </svg>{" "}
            </div>

            <SocialLoginSection>
              {socials.map((social, index) => (
                <SocialLogin url={social.url} />
              ))}
            </SocialLoginSection>
          </LoginContent>
        </LoginSection>
      </BodyWrapper>
    </>
  );
}

export default Login;
