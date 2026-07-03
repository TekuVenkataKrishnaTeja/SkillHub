import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './CollegeStudentsPage.module.css';

import { useState, useEffect } from 'react';

function CollegeStudentsPage({
  userName,
  onNavigate
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCourse, setSelectedCourse] =
    useState('');

  const courses = [
    'Web Development',
    'Python Programming',
    'Cybersecurity',
    'Data Science',
    'MS Office Master',
    'Graphic Designing',
    'Cloud Computing',
    'Human Resource Management',
    'App Development',
    'Digital Marketing'
  ];

  const basicTopics = [
    'Computer fundamentals',
    'MS Office',
    'Internet basics',
    'Email communication',
    'Typing skills',
    'Presentation skills',
    'Spreadsheet handling',
    'Digital awareness'
  ];

  const advancedTopics = [
    'Programming languages',
    'Web development',
    'Database basics',
    'Cybersecurity fundamentals',
    'Software installation',
    'Cloud applications',
    'Project development',
    'Professional communication'
  ];

  return (

    <div className={styles.wrapper}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      {/* VIDEO SECTION */}
      <section className={styles.videoSection}>

        <div className={styles.videoCard}>

          <h1 className={styles.pageTitle}>
            College Students Program
          </h1>

          <p className={styles.pageSub}>
            Upgrade your digital and professional
            skills with NICT.
          </p>

          <div className={styles.videoBox}>

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZK-rNEhJIDs?si=Woc8MUur7CFnfF2T"
              title="Demo Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* SYLLABUS SECTION */}
      <section className={styles.syllabusSection}>

        <div className={styles.sectionCard}>

          <div className={styles.contentLayout}>

            {/* LEFT SIDE */}
            <div className={styles.leftContent}>

              <h2 className={styles.sectionTitle}>
                Basic & Advanced Syllabus
              </h2>

              {/* BASIC */}
              <div className={styles.subSection}>

                <h3 className={styles.subTitle}>
                  Basic Topics
                </h3>

                <div className={styles.grid}>

                  {basicTopics.map(
                    (topic, index) => (

                    <div
                      key={index}
                      className={styles.topicBox}
                    >

                      <span className={styles.icon}>
                        💻
                      </span>

                      <span>
                        {topic}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* ADVANCED */}
              <div className={styles.subSection}>

                <h3 className={styles.subTitle}>
                  Advanced Topics
                </h3>

                <div className={styles.grid}>

                  {advancedTopics.map(
                    (topic, index) => (

                    <div
                      key={index}
                      className={styles.topicBox}
                    >

                      <span className={styles.icon}>
                        ⚙️
                      </span>

                      <span>
                        {topic}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className={styles.courseSide}>

              <h3 className={styles.courseTitle}>
                Courses
              </h3>

              <div className={styles.courseList}>

                {courses.map(
                  (course, index) => (

                  <div
                    key={index}
                    className={`
                      ${styles.courseItem}
                      ${
                        selectedCourse === course
                          ? styles.selectedCourse
                          : ''
                      }
                    `}
                    onClick={() =>
                      setSelectedCourse(
                        selectedCourse === course
                          ? ''
                          : course
                      )
                    }
                  >

                    {course}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* APPLY BUTTON */}
      {selectedCourse && (

        <section className={styles.applySection}>

          <div className={styles.applyContainer}>

            <button
              className={styles.applyBtn}
              onClick={() =>
                onNavigate(
                  'college-course-registration',
                  {
                    selectedCollegeCourse:
                      selectedCourse
                  }
                )
              }
            >
              Apply
            </button>

          </div>

        </section>

      )}

    </div>

  );

}

export default CollegeStudentsPage;