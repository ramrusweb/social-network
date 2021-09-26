import ProfileInfoStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <section className={ProfileInfoStyle.content__section}>
            <img className={ProfileInfoStyle.content__logo} src="https://www.strunkmedia.com/wp-content/uploads/2018/01/digital-ads-header.jpg" alt="" />
            <div className="content__bio">
            <img className={ProfileInfoStyle.content__avatar} src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
          
          <div className={ProfileInfoStyle.content__info}>
            <h1>Rustam R.</h1><br></br>
            <span>Date of Birth: 12 September, 1999</span><br></br>
            <span>City: Kizlyar, Republic of Dagestan</span><br></br>
            <span>Education: Kizlyar Vocational Pedagogical College</span><br></br>
            <span>Web Site: <a target="_blank" href="https://github.com/ramrusgit" rel="noreferrer">GitHub</a></span>
          </div>
        </div>
        </section>
    );
}

export default ProfileInfo;
