import { useState } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import styles from './PaymentPage.module.css';

function PaymentPage({
  userData,
  onNavigate,
  amount = 499
}) {

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePay = () => {
    if (amount === 100) {
      localStorage.setItem('nict_status_school', 'paid');
      alert('Payment of ₹100 for School Program successful!');
      onNavigate('Nictpage');
    } else if (amount === 499) {
      localStorage.setItem('nict_status_college', 'paid');
      alert('Payment of ₹499 for College Program successful!');
      onNavigate('Nictpage');
    } else if (amount === 999) {
      // Check which registration was active
      const isBSW = localStorage.getItem('bsw26_status') === 'registered';
      const isGrad = localStorage.getItem('nict_status_graduate') === 'registered';
      
      if (isBSW) {
        localStorage.setItem('bsw26_status', 'paid');
        alert('Payment of ₹999 for BSW26 Cohort 2026 successful!');
        onNavigate('bsw26');
      } else if (isGrad) {
        localStorage.setItem('nict_status_graduate', 'paid');
        alert('Payment of ₹999 for Graduate Program successful!');
        onNavigate('Nictpage');
      } else {
        localStorage.setItem('nict_status_graduate', 'paid');
        alert('Payment of ₹999 successful!');
        onNavigate('Nictpage');
      }
    } else {
      alert(`Payment of ₹${amount} successful!`);
      onNavigate('home');
    }
  };

  return (
    <div className={styles.wrapper}>

      <Navbar
        userName={userData.name}
        onNavigate={onNavigate}
        logo={logo}
      />

      <section className={styles.paymentSection}>

        <div className={styles.paymentCard}>

          <h1 className={styles.pageTitle}>
            Secure Payment
          </h1>

          <p className={styles.pageSub}>
            Complete your course registration payment.
          </p>

          <div className={styles.amountBox}>
            Total Amount: ₹{amount}
          </div>

          <div className={styles.methodTabs}>

            <button
              className={`${styles.tabBtn} ${
                paymentMethod === 'card'
                  ? styles.activeTab
                  : ''
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              💳 Card
            </button>

            <button
              className={`${styles.tabBtn} ${
                paymentMethod === 'upi'
                  ? styles.activeTab
                  : ''
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              📱 UPI
            </button>

            <button
              className={`${styles.tabBtn} ${
                paymentMethod === 'bank'
                  ? styles.activeTab
                  : ''
              }`}
              onClick={() => setPaymentMethod('bank')}
            >
              🏦 Net Banking
            </button>

            <button
              className={`${styles.tabBtn} ${
                paymentMethod === 'qr'
                  ? styles.activeTab
                  : ''
              }`}
              onClick={() => setPaymentMethod('qr')}
            >
              🔳 QR Code
            </button>

          </div>

          {/* CARD PAYMENT */}

          {paymentMethod === 'card' && (
            <div className={styles.formSection}>

              <input
                type="text"
                placeholder="Card Number"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Card Holder Name"
                className={styles.input}
              />

              <div className={styles.row}>

                <input
                  type="text"
                  placeholder="MM/YY"
                  className={styles.input}
                />

                <input
                  type="password"
                  placeholder="CVV"
                  className={styles.input}
                />

              </div>

            </div>
          )}

          {/* UPI */}

          {paymentMethod === 'upi' && (
            <div className={styles.formSection}>

              <input
                type="text"
                placeholder="Enter UPI ID"
                className={styles.input}
              />

            </div>
          )}

          {/* NET BANKING */}

          {paymentMethod === 'bank' && (
            <div className={styles.formSection}>

              <select className={styles.input}>
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
                <option>Canara Bank</option>
              </select>

            </div>
          )}

          {/* QR */}

          {paymentMethod === 'qr' && (
            <div className={styles.qrSection}>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=CoursePayment"
                alt="QR Code"
                className={styles.qrImage}
              />

              <p>
                Scan QR using any UPI app
              </p>

            </div>
          )}

          <button className={styles.payBtn} onClick={handlePay}>
            Pay ₹{amount}
          </button>

        </div>

      </section>

    </div>
  );
}

export default PaymentPage;