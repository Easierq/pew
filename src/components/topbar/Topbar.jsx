import "./topbar.scss";
import { Call, Mail, WhatsApp } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logos">
            <span>GK</span>IT
          </a>
          <div className="itemContainer">
            <a href="#contacts" className="logo">
              <Call className="icon" />
              <span>+234 706 586 6656</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="#contacts" className="logo">
              <Mail className="icon" />
              <span>GKITofficial@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a
              href="https://api.whatsapp.com/send?phone=23407018943550"
              className="logo"
            >
              <WhatsApp className="icon" />
              <span>Chat</span>
            </a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
