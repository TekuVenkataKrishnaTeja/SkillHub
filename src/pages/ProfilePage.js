import { useState } from 'react';

import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

function ProfilePage({
  userData,
  setUserData,
  onNavigate
}) {

  const [showPassword, setShowPassword] =
    useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const updateField = (field) => (e) => {

    setUserData({
      ...userData,
      [field]:e.target.value
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({
        ...userData,
        image: reader.result
      });
    };
    reader.readAsDataURL(file);

  };

  const handleSave = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/profile/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userData.email,
          name: userData.name,
          phone: userData.phone,
          image: userData.image
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save profile');
      setSaveStatus('✓ Profile changes saved to database!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (err) {
      console.error(err);
      setSaveStatus(`Error: ${err.message}`);
    }
  };

  return (

    <div
      style={{
        minHeight:'100vh',
        background:'#d6f0c2'
      }}
    >

      <Navbar
        userName={userData.name}
        onNavigate={onNavigate}
        logo={logo}
      />

      <div
        style={{
          maxWidth:'1000px',
          margin:'40px auto',
          background:'#fff',
          padding:'40px',
          borderRadius:'24px',
          boxShadow:'0 10px 24px rgba(0,0,0,0.08)',
          color:'#0d3320'
        }}
      >

        <div
          style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:'40px'
          }}
        >

          <h1>
            Profile
          </h1>

          <div
            style={{
              width:'140px',
              height:'140px',
              border:'2px dashed #529448',
              borderRadius:'18px',
              overflow:'hidden',
              position:'relative',
              background:'#eef8e8',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          >

            {userData.image ? (

              <img
                src={userData.image}
                alt="profile"
                style={{
                  width:'100%',
                  height:'100%',
                  objectFit:'cover'
                }}
              />

            ) : (

              <span>
                Upload Image
              </span>

            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              style={{
                position:'absolute',
                inset:0,
                opacity:0,
                cursor:'pointer'
              }}
            />

          </div>

        </div>

        <div
          style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'24px'
          }}
        >

          <div>

            <label>
              User Name
            </label>

            <input
              type="text"
              value={userData.name}
              onChange={updateField('name')}
              style={inputStyle}
            />

          </div>

          <div>

            <label>
              Email
            </label>

            <input
              type="email"
              value={userData.email}
              onChange={updateField('email')}
              style={inputStyle}
            />

          </div>

          <div>

            <label>
              Phone Number
            </label>

            <input
              type="text"
              value={userData.phone}
              onChange={updateField('phone')}
              style={inputStyle}
            />

          </div>

          <div>

            <label>
              Password
            </label>

            <div
              style={{
                position:'relative'
              }}
            >

              <input
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={userData.password}
                onChange={updateField('password')}
                style={{
                  ...inputStyle,
                  paddingRight:'70px'
                }}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                style={{
                  position:'absolute',
                  right:'10px',
                  top:'50%',
                  transform:'translateY(-50%)',
                  border:'none',
                  background:'transparent',
                  cursor:'pointer',
                  fontWeight:'700'
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

            </div>

          </div>

        </div>

        {saveStatus && (
          <p
            style={{
              color: saveStatus.startsWith('Error') ? '#d84315' : '#2e7d32',
              marginTop: '24px',
              fontWeight: '700',
              textAlign: 'center'
            }}
          >
            {saveStatus}
          </p>
        )}

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleSave}
            style={{
              background: '#025336',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(2, 83, 54, 0.15)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={e => e.target.style.transform = 'translateY(-1px)'}
            onMouseOut={e => e.target.style.transform = 'translateY(0)'}
          >
            Save Changes
          </button>
        </div>

      </div>

    </div>

  );

}

const inputStyle = {

  width:'100%',
  padding:'14px',
  marginTop:'8px',
  borderRadius:'12px',
  border:'1px solid #ccc',
  outline:'none'

};

export default ProfilePage;