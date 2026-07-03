import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './CourseRegistrationPage.module.css';

function GraduateCourseRegistrationPage({
  userData,
  onNavigate,
  selectedGraduateDepartment,
  selectedGraduateCourse
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

            <div className={styles.leftContent}>

              <h1 className={styles.pageTitle}>
                Graduate Course Registration
              </h1>

              <p className={styles.pageSub}>
                Complete your graduate course registration details.
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
                🏢
              </span>

              <div>

                <strong>
                  Selected Department
                </strong>

                <p>
                  {selectedGraduateDepartment}
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
                  {selectedGraduateCourse}
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
                  30 Days
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
                  ₹999
                </p>

              </div>

            </div>

          </div>

          <section className={styles.applySection}>

            <div className={styles.applyContainer}>

              <button className={styles.applyBtn}
                onClick={() => {
                  localStorage.setItem('nict_status_graduate', 'registered');
                  onNavigate('payment', {
                    amount: 999
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

export default GraduateCourseRegistrationPage;