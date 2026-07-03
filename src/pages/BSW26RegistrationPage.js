import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './BSW26RegistrationPage.module.css';

function BSW26RegistrationPage({
  userData,
  onNavigate
}) {

  const [isStudent, setIsStudent] = useState('');

  const [education, setEducation] = useState({
    level: '',
    college: '',
    branch: '',
    year: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const [errors, setErrors] = useState({});
const handleProceed = () => {

  const newErrors = {};

  if (!isStudent) {
    newErrors.studentType =
      'Please select whether you are a student or not.';
  }

  if (isStudent === 'yes') {

    if (!education.level.trim()) {
      newErrors.level = 'Please enter UG / PG';
    }

    if (!education.college.trim()) {
      newErrors.college = 'Please enter college name';
    }

    if (!education.branch.trim()) {
      newErrors.branch =
        'Please enter branch / specialization';
    }

    if (!education.year.trim()) {
      newErrors.year =
        'Please enter current year';
    }

  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  localStorage.setItem('bsw26_status', 'registered');
  onNavigate('payment', {
    amount: 999
  });

};
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
                BSW26 Registration
              </h1>

              <p className={styles.pageSub}>
                Confirm your participation in Business Startup Workshop 2026.
              </p>

            </div>

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
              <span className={styles.icon}>👤</span>
              <div>
                <strong>Name</strong>
                <p>{userData.name}</p>
              </div>
            </div>

            <div className={styles.topicBox}>
              <span className={styles.icon}>📧</span>
              <div>
                <strong>Email</strong>
                <p>{userData.email}</p>
              </div>
            </div>

            <div className={styles.topicBox}>
              <span className={styles.icon}>📱</span>
              <div>
                <strong>Phone</strong>
                <p>{userData.phone}</p>
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
              <span className={styles.icon}>🎯</span>
              <div>
                <strong>Workshop</strong>
                <p>BSW26</p>
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

          <div className={styles.studentSection}>
            <h2 className={styles.sectionTitle}>
                Student Information
            </h2>

            <div className={styles.radioContainer}>

                <label>
                <input
                    type="radio"
                    value="yes"
                    checked={isStudent === 'yes'}
                    onChange={(e) => {
                    setIsStudent(e.target.value);
                    setErrors((prev) => ({
                        ...prev,
                        studentType: ''
                    }));
                    }}
                />
                Student
                </label>

                <label>
                <input
                    type="radio"
                    value="no"
                    checked={isStudent === 'no'}
                    onChange={(e) => {
                    setIsStudent(e.target.value);
                    setErrors((prev) => ({
                        ...prev,
                        studentType: ''
                    }));
                    }}
                />
                Not a Student
                </label>

            </div>

            {errors.studentType && (
                <p className={styles.error}>
                {errors.studentType}
                </p>
            )}

            {isStudent === 'yes' && (

                <div className={styles.educationGrid}>

                <div className={styles.inputGroup}>

                    <input
                    className={`${styles.input} ${
                        errors.level ? styles.inputError : ''
                    }`}
                    placeholder="UG / PG"
                    value={education.level}
                    onChange={(e) => {
                        setEducation({
                        ...education,
                        level: e.target.value
                        });

                        setErrors((prev) => ({
                        ...prev,
                        level: ''
                        }));
                    }}
                    />

                    {errors.level && (
                    <p className={styles.error}>
                        {errors.level}
                    </p>
                    )}

                </div>

                <div className={styles.inputGroup}>

                    <input
                    className={`${styles.input} ${
                        errors.college ? styles.inputError : ''
                    }`}
                    placeholder="College Name"
                    value={education.college}
                    onChange={(e) => {
                        setEducation({
                        ...education,
                        college: e.target.value
                        });

                        setErrors((prev) => ({
                        ...prev,
                        college: ''
                        }));
                    }}
                    />

                    {errors.college && (
                    <p className={styles.error}>
                        {errors.college}
                    </p>
                    )}

                </div>

                <div className={styles.inputGroup}>

                    <input
                    className={`${styles.input} ${
                        errors.branch ? styles.inputError : ''
                    }`}
                    placeholder="Branch / Specialization"
                    value={education.branch}
                    onChange={(e) => {
                        setEducation({
                        ...education,
                        branch: e.target.value
                        });

                        setErrors((prev) => ({
                        ...prev,
                        branch: ''
                        }));
                    }}
                    />

                    {errors.branch && (
                    <p className={styles.error}>
                        {errors.branch}
                    </p>
                    )}

                </div>

                <div className={styles.inputGroup}>

                    <input
                    className={`${styles.input} ${
                        errors.year ? styles.inputError : ''
                    }`}
                    placeholder="Current Year"
                    value={education.year}
                    onChange={(e) => {
                        setEducation({
                        ...education,
                        year: e.target.value
                        });

                        setErrors((prev) => ({
                        ...prev,
                        year: ''
                        }));
                    }}
                    />

                    {errors.year && (
                    <p className={styles.error}>
                        {errors.year}
                    </p>
                    )}

                </div>

                </div>

            )}

            </div>

          <section className={styles.applySection}>

            <div className={styles.applyContainer}>

              <button
                className={styles.applyBtn}
                onClick={handleProceed}
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

export default BSW26RegistrationPage;