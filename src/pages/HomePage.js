import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import styles from './HomePage.module.css';

function HomePage({ userName, onNavigate }) {

  return (
    <div className={styles.wrapper}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>
          VASISTA IT Solutions Pvt Ltd
        </p>

        <h1 className={styles.heroTitle}>
          Welcome to SkillHub
        </h1>

        <p className={styles.heroSub}>
          Learn new skills and grow your career.
          Easy registration, direct communication,
          and a convenient environment for your
          online journey.
        </p>
      </section>

     {/* Programs */}
<section className={styles.programs}>

  <h2 className={styles.sectionHeading}>
    Our Programs
  </h2>

  <p className={styles.sectionSub}>
    What is NICT &amp; BSW26?
  </p>

  {/* NICT Section */}
  <section className={`${styles.card} ${styles.nict}`}>

    <span className={styles.badge}>
      NICT
    </span>

    <h3 className={styles.cardTitle}>
      NextGen Information
      <br />
      Communication Technologies
    </h3>

    <p className={styles.cardDesc}>
      The NICT Certification Program brings
      structured digital learning to schools
      and colleges across India — from the
      first click to industry-ready skills.
    </p>

    <ul className={styles.features}>
      <li>✦ School &amp; College Curriculum</li>
      <li>✦ Industry-Recognized Certification</li>
      <li>✦ Hands-on Digital Labs</li>
      <li>✦ Expert-Led Sessions</li>
    </ul>

    <button
      className={`btn btn-outline ${styles.cardBtn}`}
      onClick={() => onNavigate('Nictpage')}
    >
      Explore NICT →
    </button>

  </section>

  {/* BSW26 Section */}
  <section className={`${styles.card} ${styles.bsw}`}>

    <span className={`${styles.badge} ${styles.bswBadge}`}>
      BSW26
    </span>

    <h3 className={styles.cardTitle}>
      Business Startup
      <br />
      Workshop 2026
    </h3>

    <p className={styles.cardDesc}>
      Bring your raw idea, leave with a
      validated direction. We collect,
      mentor and refine concepts in a
      single intensive day designed
      for fresh minds.
    </p>

    <ul className={styles.features}>
      <li>✦ One-Day Intensive Bootcamp</li>
      <li>✦ Expert Startup Mentors</li>
      <li>✦ Idea Validation Framework</li>
      <li>✦ Networking &amp; Pitching</li>
    </ul>

    <button
      className={`btn btn-primary ${styles.cardBtn}`}
      onClick={() => onNavigate('bsw26')}
    >
      Explore BSW26 →
    </button>

  </section>

</section>

      {/* Footer */}
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

export default HomePage;