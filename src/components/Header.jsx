import HeaderStyle from './Header.module.css';

const Header = () => {
  return(
      <header className={HeaderStyle.header}>
        <div className={HeaderStyle.logo}>
          <img src="https://s3-symbol-logo.tradingview.com/facebook--600.png" />
        </div>
    </header>
  );
}

export default Header;