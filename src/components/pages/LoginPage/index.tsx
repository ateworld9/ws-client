import s from './LoginPage.module.css';
import googleLogo from '../../../assets/google_logo.png';

const LoginPage = () => {
  const googleLogin = () => {
    window.open('http://localhost:3001/auth/google', '_self');
  };

  return (
    <main className={s.loginPage}>
      <h1>Login Page</h1>
      <div className={s.loginForm}>
        <div className={s.googleContainer} onClick={() => googleLogin()}>
          <img src={googleLogo} alt="google_logo" />
          <p>Login with Google</p>
        </div>
      </div>
    </main>
  );
};

export { LoginPage };
