import styles from './HomePage.module.css';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

function AboutPage({ userName, onNavigate }) {

  return (

    <div className={styles.wrapper}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      <div
        style={{
          padding:'50px 40px',
          color:'#0d3320',
          flex:'1'
        }}
      >

        <h1>About SkillHub</h1>

        <br />

        <p>
          SkillHub is a digital learning platform
          by VASISTA IT Solutions Pvt Ltd.
        </p>

      </div>

      <footer
        id="contact"
        className={styles.footer}
      >

        <p>
          © 2026 VASISTA IT Solutions Pvt Ltd · All Rights Reserved
        </p>

        <p>Email: support@vasista.in</p>

        <p>Phone: +91 xxxxxxxxxx</p>

      </footer>

    </div>

  );
}

export default AboutPage;