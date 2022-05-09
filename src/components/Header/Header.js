import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark nav">
      <div className="container-fluid navcont">
        <a className="navbar-work" href="a">
          WORK
        </a>
        <a className="navbar-icon" href="AF">
          <img
            src={require("../../assets/AF.gif")}
            alt="LogoAF"
            width="150"
            height="150"
          />
        </a>
        <a className="navbar-contact" href="a">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Header;
