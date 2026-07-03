import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './SchoolStudentsPage.module.css';

function SchoolStudentsPage({ userName, onNavigate }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedLevel, setSelectedLevel] = useState('');

  const basicTopics = [
    'Knowing computer',
    'Parts of computer',
    'Hardware & software',
    'Operating system',
    'Using GUI system',
    'WordPress',
    'MS Office',
    'Notepad',
    'Painting',
    'Spreadsheets',
    'Small presentations',
    'Browsing basics',
    'Email'
  ];
  const advancedTopics = [
    'Computer languages',
    'Browsing knowledge',
    'Mails & comms',
    'Browsing applications',
    'Control panel',
    'App installation',
    'Software applications',
    'Memory management'
  ];

  return (

    <div className={styles.wrapper}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      {/* Demo Video */}
      <section className={styles.videoSection}>

        <div className={styles.videoCard}>

          <h1 className={styles.pageTitle}>
            School Students Program
          </h1>

          <p className={styles.pageSub}>
            Learn digital skills with NICT.
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

      {/* Class Options */}
      <section className={styles.categorySection}>

        <h2 className={styles.sectionTitle}>
          Select Class Group
        </h2>

        <div className={styles.categoryGrid}>

          {/* Primary */}
          <div
            className={`${styles.categoryCard} ${
              selectedLevel === 'primary'
                ? styles.selectedCard2
                : ''
            }`}
            onClick={() => setSelectedLevel('primary')}
          >

            <div className={styles.categoryIcon}>
              📘
            </div>

            <h3>
              Class 1st - Class 5th
            </h3>

            <p>
              Basic digital learning and
              computer fundamentals.
            </p>

          </div>

          {/* Secondary */}
          <div
            className={`${styles.categoryCard} ${
              selectedLevel === 'secondary'
                ? styles.selectedCard2
                : ''
            }`}
            onClick={() => setSelectedLevel('secondary')}
          >

            <div className={styles.categoryIcon}>
              💻
            </div>

            <h3>
              Class 6th - Class 10th
            </h3>

            <p>
              Advanced computer knowledge
              and practical applications.
            </p>

          </div>

        </div>

      </section>

      {/* Basic Syllabus */}
      {selectedLevel && (

        <section className={styles.syllabusSection}>

          <div className={styles.sectionCard}>

            <h2 className={styles.sectionTitle}>
              Basic Syllabus
            </h2>

            <div className={styles.grid}>

              {basicTopics.map((topic, index) => (

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

        </section>

      )}

      {/* Advanced Syllabus */}
      {selectedLevel === 'secondary' && (

        <section className={styles.syllabusSection}>

          <div className={styles.sectionCard}>

            <h2 className={styles.sectionTitle}>
              Advanced Syllabus
            </h2>

            <div className={styles.grid}>

              {advancedTopics.map((topic, index) => (

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

        </section>

      )}

      {/* Apply Button Bottom */}
      {selectedLevel && (

        <section className={styles.applySection}>

          <div className={styles.applyContainer}>

            <button
              className={styles.applyBtn}
              onClick={() =>
                onNavigate(
                  'school-course-registration',
                  {
                    selectedLevel
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

export default SchoolStudentsPage;