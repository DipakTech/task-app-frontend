const Header = () => {
  return (
    <div className="header_container">
      {/* create a header  */}
      <header className="header_logo">
        <a href="/">task App</a>
      </header>
      <div className="header_link">
        <a href="/login">login</a>
        <a href="/register">register</a>
      </div>
    </div>
  );
};

export default Header;
