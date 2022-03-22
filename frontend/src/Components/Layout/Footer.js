import { Fragment } from "react";
import logo from "../../assets/footer-logo.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes["bottom-push"]}></div>
      <footer>
        <div className={classes["footer-logo"]}>
          <img src={logo} alt="Logo for the app" />
          <a href="#">LOGO</a>
        </div>
        <div className={classes.social}>
          <h4>Stay Connected!</h4>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.message}>
          &copy; Made with&nbsp;
          <i className={`fas fa-heart ${classes.heart}`}></i> by&nbsp;
          <a href="https://github.com/AlankritVerma07">Alan & Jackie</a>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
