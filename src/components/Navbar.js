import styles from './Navbar.module.css';

function Navbar({ userName, onNavigate, logo }) {

  return (

    <nav className={styles.nav}>

      {/* Left */}
      <div className={styles.left}>

        <img
          src={logo}
          alt="Vasista"
          className={styles.logo}
        />

        <span className={styles.brand}>
          VASISTA SkillHub
        </span>

      </div>

      {/* Center */}
      <div className={styles.center}>

        <button
          className={styles.navBtn}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>

        <button
          className={styles.navBtn}
          onClick={() => onNavigate('about')}
        >
          About
        </button>

        <button
          className={styles.navBtn}
          onClick={() => onNavigate('Nictpage')}
        >
          NICT
        </button>

        <button
          className={styles.navBtn}
          onClick={() => onNavigate('bsw26')}
        >
          BSW26
        </button>

        {/* Notification Dropdown */}
        <div className={styles.dropdown}>

          <button className={styles.navBtn}>
            Notifications ▾
          </button>

          <div className={styles.dropdownContent}>
            <p>No new notifications</p>
          </div>

        </div>

        <button
          className={styles.navBtn}
          onClick={() => {
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
        </button>

      </div>

      {/* Right */}
      <div className={styles.right}>

        <button
          className={styles.profileBtn}
          onClick={() => onNavigate('profile')}
        >
          👤 {userName}
        </button>

        <button
          className={styles.logoutBtn}
          onClick={() => onNavigate('logout')}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;