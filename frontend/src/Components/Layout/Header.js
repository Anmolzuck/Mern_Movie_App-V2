import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { MovieSearch } from "../UI/MovieGrid";

const Header = () => {
  return (
    <div className={classes.header}>
      <header>
        <nav>
          <ul>
            <li>
              <div className={classes.logo}>
                <img src={logo} alt="Logo for the app" />
                <a href="#">LOGO</a>
              </div>
            </li>
            <li>
              <MovieSearch />
            </li>
            <li className={classes.fancy}>
              <a href="#">Home</a>
            </li>
            <li className={classes.fancy}>
              <a href="/movie">Movies</a>
            </li>
            <li className={classes.fancy}>
              <a href="/tv">TV</a>
            </li>
            <li>
              <a href="#">
                <button className={classes["btn-auth"]}>Sign up</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
// <div className={classes["movie-search"]}>
// <input
//   name="search"
//   type="text"
//   placeholder="Search by movie title"
//   value=""
// />
// <i
//   className={`fas fa-search ${classes["search-btn"]}`}
//   aria-hidden="true"
// ></i>
// </div>
