import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './GraduatesPage.module.css';

function GraduatesPage({
  userName,
  onNavigate
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedDepartment, setSelectedDepartment] =
    useState('');

  const [selectedCourse, setSelectedCourse] =
    useState('');

  const departmentCourses = {

    'Computer Science': [
      'Full Stack Development',
      'Python Programming',
      'Cybersecurity',
      'Data Science',
      'Artificial Intelligence'
    ],

    'Electronics': [
      'Embedded Systems',
      'IoT Applications',
      'VLSI Basics',
      'PCB Designing'
    ],

    'Mechanical': [
      'AutoCAD',
      'SolidWorks',
      'Industrial Design',
      'CNC Programming'
    ],

    'Civil': [
      'AutoCAD Civil',
      'STAAD Pro',
      'Construction Planning',
      'Surveying Basics'
    ],

    'Management': [
      'Digital Marketing',
      'Business Analytics',
      'MS Excel Advanced',
      'Communication Skills'
    ]

  };

  return (

    <div className={styles.wrapper}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      <section className={styles.videoSection}>

        <div className={styles.videoCard}>

          <h1 className={styles.pageTitle}>
            Graduates Program
          </h1>

          <p className={styles.pageSub}>
            Enhance your professional and technical skills with NICT.
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

      <section className={styles.departmentSection}>

        <div className={styles.sectionCard}>

          <h2 className={styles.sectionTitle}>
            Select Department
          </h2>

          <div className={styles.departmentGrid}>

            {Object.keys(departmentCourses).map((department, index) => (

              <div
                key={index}
                className={`${styles.departmentCard} ${
                  selectedDepartment === department
                    ? styles.selectedDepartment
                    : ''
                }`}
                onClick={() => {

                  setSelectedDepartment(department);
                  setSelectedCourse('');

                }}
              >

                {department}

              </div>

            ))}

          </div>

        </div>

      </section>

      {selectedDepartment && (

        <section className={styles.courseSection}>

          <div className={styles.sectionCard}>

            <h2 className={styles.sectionTitle}>
              {selectedDepartment} Courses
            </h2>

            <div className={styles.courseGrid}>

              {departmentCourses[selectedDepartment].map((course, index) => (

                <div
                  key={index}
                  className={`${styles.courseBox} ${
                    selectedCourse === course
                      ? styles.selectedCourse
                      : ''
                  }`}
                  onClick={() =>
                    setSelectedCourse(course)
                  }
                >

                  <span className={styles.icon}>
                    🎓
                  </span>

                  <span>
                    {course}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {selectedCourse && (

        <section className={styles.applySection}>

          <div className={styles.applyContainer}>

            <button
              className={styles.applyBtn}
              onClick={() =>
                onNavigate(
                  'graduate-course-registration',
                  {
                    selectedGraduateDepartment:
                      selectedDepartment,

                    selectedGraduateCourse:
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

export default GraduatesPage;