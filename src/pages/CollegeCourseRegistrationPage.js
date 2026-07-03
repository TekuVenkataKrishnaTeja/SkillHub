import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './CourseRegistrationPage.module.css';

function CollegeCourseRegistrationPage({
  userData,
  onNavigate,
  selectedCollegeCourse
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className={styles.wrapper}>

      <Navbar
        userName={userData.name}
        onNavigate={onNavigate}
        logo={logo}
      />

      <section className={styles.registrationSection}>

        <div className={styles.sectionCard}>

          <div className={styles.topHeader}>

            {/* LEFT SIDE */}
            <div className={styles.leftContent}>

              <h1 className={styles.pageTitle}>
                College Course Registration
              </h1>

              <p className={styles.pageSub}>
                Complete your registration details.
              </p>

            </div>

            {/* RIGHT SIDE PROFILE */}
            <div className={styles.profileCard}>

              <img
                src={
                  userData.image
                    ? userData.image
                    : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                }
                alt="Profile"
                className={styles.profileImage}
              />

              <div className={styles.profileName}>
                {userData.name}
              </div>

              <div className={styles.profileText}>
                {userData.email}
              </div>

              <div className={styles.profileText}>
                {userData.phone}
              </div>

            </div>

          </div>

          <div className={styles.grid}>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                👤
              </span>

              <div>

                <strong>
                  User Name
                </strong>

                <p>
                  {userData.name}
                </p>

              </div>

            </div>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                📧
              </span>

              <div>

                <strong>
                  Email
                </strong>

                <p>
                  {userData.email}
                </p>

              </div>

            </div>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                📱
              </span>

              <div>

                <strong>
                  Phone Number
                </strong>

                <p>
                  {userData.phone}
                </p>

              </div>

            </div>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                🎓
              </span>

              <div>

                <strong>
                  Selected Course
                </strong>

                <p>
                  {selectedCollegeCourse}
                </p>

              </div>

            </div>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                ⏳
              </span>

              <div>

                <strong>
                  Course Duration
                </strong>

                <p>
                  1 Month
                </p>

              </div>

            </div>

            <div className={styles.topicBox}>

              <span className={styles.icon}>
                💰
              </span>

              <div>

                <strong>
                  Total Cost
                </strong>

                <p>
                  ₹499
                </p>

              </div>

            </div>

          </div>

          <section className={styles.applySection}>

            <div className={styles.applyContainer}>

              <button className={styles.applyBtn}
                onClick={() => {
                  localStorage.setItem('nict_status_college', 'registered');
                  onNavigate('payment', {
                    amount: 499
                  });
                }}
              >
                Proceed To Payment
              </button>

            </div>

          </section>

        </div>

      </section>

    </div>

  );

}

export default CollegeCourseRegistrationPage;