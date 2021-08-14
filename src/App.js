import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return(
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <section className="content-section">
        <div className="content">
          <img className="content-logo" src="https://www.strunkmedia.com/wp-content/uploads/2018/01/digital-ads-header.jpg" />

          <div className="content-bio">
            <img className="content-avatar" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
            
            <div className="content-info">
              <h1>Rustam R.</h1><br></br>
              <span>Date of Birth: 12 September, 1999</span><br></br>
              <span>City: Kizlyar, Republic of Dagestan</span><br></br>
              <span>Education: Kizlyar Vocational Pedagogical College</span><br></br>
              <span>Web Site: <a target="_blank" href="https://github.com/ramrusgit">https://github.com/ramrusgit</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
