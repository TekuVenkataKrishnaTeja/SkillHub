import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './BSW26Page.module.css';

function BSW26Page({ userName, onNavigate }) {
  const [status, setStatus] = useState('not_started');

  useEffect(() => {
    const savedStatus = localStorage.getItem('bsw26_status') || 'not_started';
    setStatus(savedStatus);

    if (savedStatus === 'paid') {
      const timer = setTimeout(() => {
        setStatus('under_review');
        localStorage.setItem('bsw26_status', 'under_review');
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (savedStatus === 'under_review') {
      const timer = setTimeout(() => {
        setStatus('approved');
        localStorage.setItem('bsw26_status', 'approved');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);


  // Status mapping to help render timeline stages
  const statusStages = [
    { key: 'registered', label: 'Registration', desc: 'Form Submitted' },
    { key: 'paid', label: 'Payment', desc: 'Fee Completed' },
    { key: 'under_review', label: 'Verification', desc: 'Document Review' },
    { key: 'approved', label: 'Admission', desc: 'Seat Confirmed' }
  ];

  const getStepIndex = (currentStatus) => {
    if (currentStatus === 'not_started') return -1;
    if (currentStatus === 'registered') return 0;
    if (currentStatus === 'paid') return 1;
    if (currentStatus === 'under_review') return 2;
    if (currentStatus === 'approved') return 3;
    return -1;
  };

  const currentStepIndex = getStepIndex(status);

  return (
    <div className={styles.page}>

      <Navbar
        userName={userName}
        onNavigate={onNavigate}
        logo={logo}
      />

      <section className={styles.heroSection}>
        <div className={styles.heroCard}>

          {/* Left Side Video */}
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/ZK-rNEhJIDs"
              title="BSW26 Workshop"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className={styles.quote}>
              "Build something the market will pay for."
            </div>

            <div className={styles.author}>
              — Workshop Ethos
            </div>
          </div>

          {/* Right Side Content */}
          <div className={styles.infoSection}>

            <div className={styles.infoCard}>
              <h2>Students Planned Businessmen</h2>
            </div>

            <div className={styles.smallCard}>
              2026 Cohort
            </div>

            <div className={styles.smallCard}>
              2 Days Program
            </div>

            {status === 'not_started' && (
              <button
                className={styles.reserveBtn}
                onClick={() => onNavigate('bsw26-registration')}
              >
                Reserve your Seat →
              </button>
            )}

            {status !== 'not_started' && (
              <div className={styles.activeStatusBadge}>
                Application In Progress
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Application tracking section */}
      <section className={styles.trackingSection}>
        <div className={styles.trackingCard}>
          <div className={styles.trackingHeader}>
            <span className={styles.trackingBadge}>TRACKING STATUS</span>
            <h3 className={styles.trackingTitle}>BSW26 Admission Journey</h3>
            <p className={styles.trackingSubtitle}>Track the live progress of your cohort application below.</p>
          </div>

          {/* Progress Timeline */}
          <div className={styles.timelineContainer}>
            <div className={styles.timelineProgressLine}>
              <div 
                className={styles.timelineProgressLineActive}
                style={{ width: `${(Math.max(0, currentStepIndex) / (statusStages.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className={styles.timelineSteps}>
              {statusStages.map((stage, idx) => {
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
            {status === 'not_started' && (
              <div className={styles.statusDetailCard}>
                <div className={styles.statusDetailIcon}>📝</div>
                <div>
                  <h4>Application Not Initiated</h4>
                  <p>You haven't applied for the Business Startup Workshop 2026 yet. Secure your registration before slots close.</p>
                  <button 
                    className={styles.actionBtn}
                    onClick={() => onNavigate('bsw26-registration')}
                  >
                    Start Registration Form
                  </button>
                </div>
              </div>
            )}

            {status === 'registered' && (
              <div className={styles.statusDetailCard}>
                <div className={styles.statusDetailIcon}>💳</div>
                <div>
                  <h4>Registration Form Submitted</h4>
                  <p>Your educational details are saved. To verify your application, please complete the program entrance payment of ₹999.</p>
                  <button 
                    className={styles.actionBtn}
                    onClick={() => onNavigate('payment', { amount: 999 })}
                  >
                    Complete Payment (₹999)
                  </button>
                </div>
              </div>
            )}

            {status === 'paid' && (
              <div className={styles.statusDetailCard}>
                <div className={styles.statusDetailIcon}>⏳</div>
                <div>
                  <h4>Payment Received & Verifying</h4>
                  <p>Your payment transaction is undergoing security validation. Usually, this is updated within a couple of hours.</p>
                  <span className={styles.statusPendingBadge}>Pending Verification</span>
                </div>
              </div>
            )}

            {status === 'under_review' && (
              <div className={styles.statusDetailCard}>
                <div className={styles.statusDetailIcon}>🔍</div>
                <div>
                  <h4>Document & Profile Verification</h4>
                  <p>The selection board is verifying your profile registration details for the 2026 cohort. We will finalize your entry pass shortly.</p>
                  <span className={styles.statusReviewBadge}>Under Review</span>
                </div>
              </div>
            )}

            {status === 'approved' && (
              <div className={styles.approvedSection}>
                <div className={styles.statusDetailCard}>
                  <div className={styles.statusDetailIcon}>🎉</div>
                  <div>
                    <h4>Admission Confirmed!</h4>
                    <p>Congratulations, {userName || 'Innovator'}! Your seat is secured.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


    </div>
  );
}

export default BSW26Page;