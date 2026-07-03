import logo from '../assets/logo.png';

function LogoutPage({ onNavigate }) {
  return (
    <div className="page-bg">
      <div className="card" style={{ textAlign: 'center' }}>

        {/* Logo */}
        <div className="logo-strip" style={{ justifyContent: 'center' }}>
          <img src={logo} alt="Vasista logo" />
          <span className="brand">VASISTA SkillHub</span>
        </div>

        {/* Icon */}
        <div style={{ fontSize: 52, margin: '16px 0 12px' }}>👋</div>

        <h2 className="page-title" style={{ textAlign: 'center' }}>
          You've been signed out
        </h2>
        <p className="page-sub" style={{ textAlign: 'center', marginBottom: 28 }}>
          Thanks for using VASISTA SkillHub. See you again soon!
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ width: 'auto' }} onClick={() => onNavigate('login')}>
            Login Again
          </button>
          <button className="btn btn-outline btn-sm" onClick={() => onNavigate('splash')}>
            Go to Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default LogoutPage;
