import './App.css';

const App = () => {
  return(
    <div className="app-wrapper">
      <header className="header">
        <div className="logo">
          <img src="https://s3-symbol-logo.tradingview.com/facebook--600.png" />
        </div>
      </header>

      <sidebar className="sidebar">
        <nav className="nav-menu">
          <ul>
            <li><a href="#s">Profile</a></li>
            <li><a href="#s">Messages</a></li>
            <li><a href="#s">News</a></li>
            <li><a href="#s">Music</a></li>
            <li><a href="#s">Settings</a></li>
          </ul>
        </nav>
      </sidebar>

      <section className="content-section">
        <div className="content">
          <h1 className="main-title">Main Content</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
