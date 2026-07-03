import logo from '../assets/logo.png';
import styles from './SplashPage.module.css';

function SplashPage({ onNavigate }) {
  return (
    <div className={styles.bg}>
      <div className={styles.center}>

        {/* Logo box */}
        <div className={styles.logoBox}>
          <img src={logo} alt="Vasista IT Solutions" className={styles.logoImg} />
        </div>

        <h1 className={styles.title}>Welcome to SkillHub</h1>
        <p className={styles.sub}>
          Learn new skills and grow your career with VASISTA SkillHub.
        </p>

        <div className={styles.btnRow}>
          <button className={`btn btn-primary ${styles.bigBtn}`} onClick={() => onNavigate('login')}>
            Login
          </button>
          <button className={`btn btn-outline ${styles.bigBtn}`} onClick={() => onNavigate('register')}>
            Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default SplashPage;
