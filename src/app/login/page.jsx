import styles from './loginPage.module.css';
import Image from 'next/image';
import googleImg from '../../public/assets/google.svg';
import Link from 'next/link';
import LoginLayout from '@/components/formLayout/layout';

const LoginPage = () => {
  return (
    <LoginLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <span className={styles.title}>Welcome back</span>
            <span className={styles.description}>Welcome back! Please enter your details</span>
            <div className={styles.input}>
              <span className={styles.label}>Email</span>
              <input className={styles.inputForm} type="text" placeholder='Email' name="email" id="email" />
            </div>
            <div className={styles.input}>
              <span className={styles.label}>Password</span>
              <input className={styles.inputForm} placeholder='Password' type="password" name="pass" id="pass" />
            </div>
            <div className={styles.checkboxCont}>
              <div className={styles.checkboxWrapper}>
                <input className={styles.checkbox} type="checkbox" name="ch" id="ch" />
                <span className={styles.checkText}>Remember me</span>
              </div>
              <span className={styles.forPass}>Forgot password?</span>
            </div>
            <div className={styles.buttonCont}>
              <button className={styles.buttonSignIn}>Sign in</button>
            </div>
            <button className={styles.googleButton}>
              <Image src={googleImg} alt="Google" width={24} height={24} className={styles.googleImg} />
              Sign in with Google
            </button>
            <div className={styles.askAccount}>
              Don't have an account?
              <Link href='/register' className={styles.askText}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}

export default LoginPage;
