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

  const updateField = (field) => (e) => {

    setUserData({
      ...userData,
      [field]:e.target.value
    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const imageUrl =
      URL.createObjectURL(file);

    setUserData({
      ...userData,
      image:imageUrl
    });

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