import { useState } from 'react';

import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';

import './index.css';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LogoutPage from './pages/LogoutPage';

import NICTPage from './pages/Nictpage';
import AboutPage from './pages/AboutPage';
import BSW26Page from './pages/BSW26Page';
import BSW26RegistrationPage from './pages/BSW26RegistrationPage';

import ProfilePage from './pages/ProfilePage';

import SchoolStudentsPage from './pages/SchoolStudentsPage';
import CollegeStudentsPage from './pages/CollegeStudentsPage';
import GraduatesPage from './pages/GraduatesPage';

import SchoolCourseRegistrationPage from './pages/SchoolCourseRegistrationPage';
import CollegeCourseRegistrationPage from './pages/CollegeCourseRegistrationPage';
import GraduateCourseRegistrationPage from './pages/GraduateCourseRegistrationPage';

import PaymentPage from './pages/PaymentPage';

function App() {

  const [userData, setUserData] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    image:''
  });

  const [selectedLevel, setSelectedLevel] =
    useState('');

  const [
    selectedCollegeCourse,
    setSelectedCollegeCourse
  ] = useState('');

  const [
    selectedGraduateDepartment,
    setSelectedGraduateDepartment
  ] = useState('');

  const [
    selectedGraduateCourse,
    setSelectedGraduateCourse
  ] = useState('');

  const [paymentAmount, setPaymentAmount] =
    useState(0);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }
      setUserData({
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        password: password, // keep password in memory for edit profile input
        image: data.user.image || ''
      });
      navigate('/home');
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  const handleRegister = async (data) => {
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || 'Registration failed');
      }
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: err.message };
    }
  };

  const handleNavigate = (
    target,
    data = {}
  ) => {

    if (target === 'logout') {
      setUserData({
        name:'',
        email:'',
        phone:'',
        password:'',
        image:''
      });

      navigate('/logout');
      return;

    }

    if (data.selectedLevel) {

      setSelectedLevel(
        data.selectedLevel
      );

    }

    if (data.selectedCollegeCourse) {

      setSelectedCollegeCourse(
        data.selectedCollegeCourse
      );

    }

    if (data.selectedGraduateDepartment) {

      setSelectedGraduateDepartment(
        data.selectedGraduateDepartment
      );

    }

    if (data.selectedGraduateCourse) {

      setSelectedGraduateCourse(
        data.selectedGraduateCourse
      );

    }

    if (data.amount) {

      setPaymentAmount(
        data.amount
      );

    }

    navigate(`/${target}`);

  };

  return (

    <Routes>

      <Route
        path="/"
        element={
          <SplashPage
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/login"
        element={
          <LoginPage
            onNavigate={handleNavigate}
            onLogin={handleLogin}
          />
        }
      />

      <Route
        path="/register"
        element={
          <RegisterPage
            onNavigate={handleNavigate}
            onRegister={handleRegister}
          />
        }
      />

      <Route
        path="/home"
        element={
          <HomePage
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/Nictpage"
        element={
          <NICTPage
            userData={userData}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/schoolstudents"
        element={
          <SchoolStudentsPage
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/collegestudents"
        element={
          <CollegeStudentsPage
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/graduates"
        element={
          <GraduatesPage
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/school-course-registration"
        element={
          <SchoolCourseRegistrationPage
            userData={userData}
            onNavigate={handleNavigate}
            selectedLevel={selectedLevel}
          />
        }
      />

      <Route
        path="/college-course-registration"
        element={
          <CollegeCourseRegistrationPage
            userData={userData}
            onNavigate={handleNavigate}
            selectedCollegeCourse={
              selectedCollegeCourse
            }
          />
        }
      />

      <Route
        path="/graduate-course-registration"
        element={
          <GraduateCourseRegistrationPage
            userData={userData}
            onNavigate={handleNavigate}
            selectedGraduateDepartment={
              selectedGraduateDepartment
            }
            selectedGraduateCourse={
              selectedGraduateCourse
            }
          />
        }
      />

      <Route
        path="/about"
        element={
          <AboutPage
            userName={userData.name}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/bsw26"
        element={
          <BSW26Page
            userData={userData}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/bsw26-registration"
        element={
          <BSW26RegistrationPage
            userData={userData}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/profile"
        element={
          <ProfilePage
            userData={userData}
            setUserData={setUserData}
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="/payment"
        element={
          <PaymentPage
            userData={userData}
            onNavigate={handleNavigate}
            amount={paymentAmount}
          />
        }
      />

      <Route
        path="/logout"
        element={
          <LogoutPage
            onNavigate={handleNavigate}
          />
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>

  );

}

export default App;