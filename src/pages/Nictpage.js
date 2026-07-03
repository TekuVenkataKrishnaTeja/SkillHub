import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import styles from './NICTPage.module.css';

function NICTPage(props) {
  const userName = props.userName;
  const onNavigate = props.onNavigate;

  const [activeTab, setActiveTab] = useState('school');
  const [statuses, setStatuses] = useState({
    school: 'not_started',
    college: 'not_started',
    graduate: 'not_started'
  });

  useEffect(() => {
    setStatuses({
      school: localStorage.getItem('nict_status_school') || 'not_started',
      college: localStorage.getItem('nict_status_college') || 'not_started',
      graduate: localStorage.getItem('nict_status_graduate') || 'not_started'
    });
  }, []);

  useEffect(() => {
    if (statuses.school === 'paid') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, school: 'email_generated' }));
        localStorage.setItem('nict_status_school', 'email_generated');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.school === 'email_generated') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, school: 'sessions_active' }));
        localStorage.setItem('nict_status_school', 'sessions_active');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.school === 'sessions_active') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, school: 'completed' }));
        localStorage.setItem('nict_status_school', 'completed');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statuses.school]);

  useEffect(() => {
    if (statuses.college === 'paid') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, college: 'email_generated' }));
        localStorage.setItem('nict_status_college', 'email_generated');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.college === 'email_generated') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, college: 'sessions_active' }));
        localStorage.setItem('nict_status_college', 'sessions_active');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.college === 'sessions_active') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, college: 'completed' }));
        localStorage.setItem('nict_status_college', 'completed');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statuses.college]);

  useEffect(() => {
    if (statuses.graduate === 'paid') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, graduate: 'email_generated' }));
        localStorage.setItem('nict_status_graduate', 'email_generated');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.graduate === 'email_generated') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, graduate: 'sessions_active' }));
        localStorage.setItem('nict_status_graduate', 'sessions_active');
      }, 5000);
      return () => clearTimeout(timer);
    }
    if (statuses.graduate === 'sessions_active') {
      const timer = setTimeout(() => {
        setStatuses(prev => ({ ...prev, graduate: 'completed' }));
        localStorage.setItem('nict_status_graduate', 'completed');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statuses.graduate]);


  const steps = [
    { key: 'registered', label: 'Registration', desc: 'Form Submitted' },
    { key: 'paid', label: 'Payment', desc: 'Fee Completed' },
    { key: 'email_generated', label: 'Email Dispatched', desc: 'Details Sent' },
    { key: 'sessions_active', label: 'Session Details', desc: 'Schedule Active' },
    { key: 'completed', label: 'Certificate', desc: 'Course Completed' }
  ];

  const getStepIndex = (status) => {
    if (status === 'not_started') return -1;
    if (status === 'registered') return 0;
    if (status === 'paid') return 1;
    if (status === 'email_generated') return 2;
    if (status === 'sessions_active') return 3;
    if (status === 'completed') return 4;
    return -1;
  };

  const currentStatus = statuses[activeTab];
  const currentStepIndex = getStepIndex(currentStatus);

  const getCategoryTitle = (cat) => {
    if (cat === 'school') return 'School Students Program';
    if (cat === 'college') return 'College Students Program';
    return 'Graduates Career Program';
  };

  const getCategoryFee = (cat) => {
    if (cat === 'school') return 100;
    if (cat === 'college') return 499;
    return 999;
  };

  const getCategoryRegPage = (cat) => {
    if (cat === 'school') return 'schoolstudents';
    if (cat === 'college') return 'collegestudents';
    return 'graduates';
  };

  const getCategorySessionDetails = (cat) => {
    if (cat === 'school') return { time: '5:00 PM - 6:00 PM IST', mode: 'Live Interactive Coding Zoom Session', instructor: 'Dr. Amit Sharma' };
    if (cat === 'college') return { time: '10:00 AM - 12:00 PM IST', mode: 'Hybrid Live Labs + Projects', instructor: 'Prof. Rajesh Nair' };
    return { time: '2:00 PM - 5:00 PM IST', mode: 'Intensive Full Stack Development Bootcamp', instructor: 'Siddharth Sen (VASISTA Architect)' };
  };

  return (
    <div className={styles.wrapper}>
      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroCard}>
          <span className={styles.eyebrow}>
            NICT Program
          </span>
          <h1 className={styles.title}>
            NextGen Information Communication Technologies
          </h1>
          <p className={styles.sub}>
            Bringing structured digital learning
            to schools and colleges across India.
          </p>
        </div>
      </section>

      {/* About NICT */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <span className={styles.badge}>
            NICT
          </span>
          <h2 className={styles.aboutTitle}>
            NextGen Information
            <br />
            Communication Technologies
          </h2>
          <p className={styles.aboutDesc}>
            The NICT Certification Program brings
            structured digital learning to schools
            and colleges across India — from the
            first click to industry-ready skills.
          </p>
          <ul className={styles.features}>
            <li>✦ School & College Curriculum</li>
            <li>✦ Industry-Recognized Certification</li>
            <li>✦ Hands-on Digital Labs</li>
            <li>✦ Expert-Led Sessions</li>
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>
          Select Your Category
        </h2>
        <div className={styles.categoryGrid}>
          {/* School */}
          <div
            className={`${styles.categoryCard} ${activeTab === 'school' ? styles.categoryCardSelected : ''}`}
            onClick={() => {
              setActiveTab('school');
              onNavigate('schoolstudents');
            }}
          >
            <div className={styles.categoryIcon}>🏫</div>
            <h3>School Students</h3>
            <p>Digital learning for Class 1 - Class 10 students.</p>
            <div className={styles.miniStatus}>
              Status: <span className={styles.miniStatusVal}>{statuses.school.replace('_', ' ')}</span>
            </div>
          </div>

          {/* College */}
          <div
            className={`${styles.categoryCard} ${activeTab === 'college' ? styles.categoryCardSelected : ''}`}
            onClick={() => {
              setActiveTab('college');
              onNavigate('collegestudents');
            }}
          >
            <div className={styles.categoryIcon}>🎓</div>
            <h3>College Students</h3>
            <p>Industry skills for diploma & degree students.</p>
            <div className={styles.miniStatus}>
              Status: <span className={styles.miniStatusVal}>{statuses.college.replace('_', ' ')}</span>
            </div>
          </div>

          {/* Graduates */}
          <div
            className={`${styles.categoryCard} ${activeTab === 'graduate' ? styles.categoryCardSelected : ''}`}
            onClick={() => {
              setActiveTab('graduate');
              onNavigate('graduates');
            }}
          >
            <div className={styles.categoryIcon}>💼</div>
            <h3>Graduates</h3>
            <p>Career-ready programs for job seekers.</p>
            <div className={styles.miniStatus}>
              Status: <span className={styles.miniStatusVal}>{statuses.graduate.replace('_', ' ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Journey Tracker */}
      <section className={styles.trackerSection}>
        <div className={styles.trackerCard}>
          <div className={styles.trackerHeader}>
            <span className={styles.trackerBadge}>TRACK ENROLLMENT JOURNEY</span>
            <h3 className={styles.trackerTitle}>Live Category Progress</h3>
            <p className={styles.trackerSubtitle}>Select a category above or switch tabs below to see your progress.</p>
          </div>

          {/* Tab selector */}
          <div className={styles.categoryTabs}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'school' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('school')}
            >
              🏫 School Students
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'college' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('college')}
            >
              🎓 College Students
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'graduate' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('graduate')}
            >
              💼 Graduates
            </button>
          </div>

          {/* Timeline */}
          <div className={styles.timelineContainer}>
            <div className={styles.timelineProgressLine}>
              <div 
                className={styles.timelineProgressLineActive}
                style={{ width: `${currentStepIndex >= 0 ? (currentStepIndex / (steps.length - 1)) * 100 : 0}%` }}
              ></div>
            </div>
            
            <div className={styles.timelineSteps}>
              {steps.map((stage, idx) => {
                const isCompleted = idx < currentStepIndex;
                const isActive = idx === currentStepIndex;

                let stepClass = styles.stepPending;
                if (isActive) stepClass = styles.stepActive;
                if (isCompleted) stepClass = styles.stepCompleted;

                return (
                  <div key={stage.key} className={`${styles.timelineStep} ${stepClass}`}>
                    <div className={styles.stepMarker}>
                      {isCompleted ? '✓' : idx + 1}
                    </div>
                    <div className={styles.stepInfo}>
                      <span className={styles.stepLabel}>{stage.label}</span>
                      <span className={styles.stepDesc}>{stage.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Details Panel */}
          <div className={styles.detailsPanel}>
            <h4 className={styles.panelHeadline}>{getCategoryTitle(activeTab)} Status Details</h4>
            
            {currentStatus === 'not_started' && (
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>📝</div>
                <div>
                  <h5>Registration Pending</h5>
                  <p>You have not registered for the {getCategoryTitle(activeTab)} course yet. Complete the basic details form to begin.</p>
                  <button 
                    className={styles.actionBtn}
                    onClick={() => onNavigate(getCategoryRegPage(activeTab))}
                  >
                    Go to Category Portal
                  </button>
                </div>
              </div>
            )}

            {currentStatus === 'registered' && (
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>💳</div>
                <div>
                  <h5>Payment Pending</h5>
                  <p>Registration details captured! Complete your program fee payment of ₹{getCategoryFee(activeTab)} to confirm your enrollment details.</p>
                  <button 
                    className={styles.actionBtn}
                    onClick={() => onNavigate('payment', { amount: getCategoryFee(activeTab) })}
                  >
                    Proceed to Payment (₹{getCategoryFee(activeTab)})
                  </button>
                </div>
              </div>
            )}

            {currentStatus === 'paid' && (
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>✉️</div>
                <div>
                  <h5>Fee Received & Verifying</h5>
                  <p>Your payment transaction was successful. Our automated systems are currently generating your student credentials and preparing to dispatch program details to your registered email address.</p>
                  <span className={styles.statusBadgePending}>Processing Email Dispatch</span>
                </div>
              </div>
            )}

            {currentStatus === 'email_generated' && (
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>📥</div>
                <div>
                  <h5>Credentials Generated & Emailed</h5>
                  <p>Your NextGen credentials and LMS links have been sent to your registered email address. Please verify your inbox (and spam folder) for further guidelines.</p>
                  <span className={styles.statusBadgeInfo}>Emailed to Student</span>
                </div>
              </div>
            )}

            {currentStatus === 'sessions_active' && (
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>📅</div>
                <div>
                  <h5>Session Schedules Active</h5>
                  <p>Your learning batch is active. Join using the following information:</p>
                  <div className={styles.sessionBox}>
                    <p><strong>Timing:</strong> {getCategorySessionDetails(activeTab).time}</p>
                    <p><strong>Platform:</strong> {getCategorySessionDetails(activeTab).mode}</p>
                    <p><strong>Lead Instructor:</strong> {getCategorySessionDetails(activeTab).instructor}</p>
                  </div>
                  <span className={styles.statusBadgeSuccess}>Class batch active</span>
                </div>
              </div>
            )}

            {currentStatus === 'completed' && (
              <div className={styles.certificateSection}>
                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>🏆</div>
                  <div>
                    <h5>Program Completed & Certified!</h5>
                    <p>Congratulations! You have completed the requirements for the NextGen NICT Certification program. Your verified e-certificate has been issued successfully below.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          © 2026 VASISTA IT Solutions Pvt Ltd · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default NICTPage;