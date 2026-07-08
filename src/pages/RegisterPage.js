import { useState } from 'react';
import logo from '../assets/logo.png';

function RegisterPage({
  onNavigate,
  setUserData,
  onRegister
}) {

  const [form, setForm] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    confirm:''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const update = (field) => (e) => {

    setForm({
      ...form,
      [field]:e.target.value
    });

  };

  const handleSubmit = async () => {

    const {
      name,
      email,
      phone,
      password,
      confirm
    } = form;

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirm
    ) {

      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirm) {

      setError('Passwords do not match.');
      return;
    }

    setError('');

    const result = await onRegister({
      name,
      email,
      phone,
      password
    });

    if (result && !result.success) {
      setError(result.error || 'Registration failed.');
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      onNavigate('login');
    }, 2200);

  };

  return (

    <div className="page-bg">

      <div className="card card-wide">

        <div className="logo-strip">

          <img src={logo} alt="Logo" />

          <span className="brand">
            VASISTA SkillHub
          </span>

        </div>

        <h2 className="page-title">
          Account Created Successfully
        </h2>

        <p className="page-sub">
          Join SkillHub and start learning.
        </p>

        {error && (
          <p className="msg-error">
            {error}
          </p>
        )}

        {success && (
          <p className="msg-success">
            ✓ Registration successful!
          </p>
        )}

        {!success && (

          <>

            <div className="form-grid">

              <div className="field">

                <label>
                  Full Name
                </label>

                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={update('name')}
                />

              </div>

              <div className="field">

                <label>
                  Phone Number
                </label>

                <input
                  placeholder="+91 9999999999"
                  value={form.phone}
                  onChange={update('phone')}
                />

              </div>

            </div>

            <div className="field">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={update('email')}
              />

            </div>

            <div className="form-grid">

              <div className="field">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={update('password')}
                />

              </div>

              <div className="field">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirm}
                  onChange={update('confirm')}
                />

              </div>

            </div>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create Account →
            </button>

          </>

        )}

      </div>

    </div>

  );

}

export default RegisterPage;