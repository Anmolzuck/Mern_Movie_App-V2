import { Fragment } from "react";
import apiMovie from "../../api/apiMovie";
import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  const item = props.item;
  const genres = props.genres;
  let genresStr = "";
  genresStr = item.genre_ids;
  genresStr = genresStr
    .map((id) => {
      const movieId = genres.find((el) => el.id === id);
      return movieId ? movieId.name : null;
    })
    .slice(0, 3)
    .join(", ");

  const background = apiMovie.w500Image(
    item.poster_path ? item.poster_path : item.backdrop_path
  );
  const title =
    item.original_title || item.title || item.name || item.original_name;
  return (
    <Fragment>
      <a href="#">
        <div
          className={classes["movie-card"]}
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className={classes["card-body-wrapper"]}>
          <div className={`card-body ${classes["card-body"]}`}>
            <a href="#">
              <span className={classes["card-rating"]}>
                {item.vote_average}
              </span>
              <div className={classes["card-body-title"]}>{title}</div>
              <p className={classes["card-categories"]}>{genresStr}</p>
            </a>
          </div>
        </div>
        {/*<h3>{title}</h3>*/}
      </a>
    </Fragment>
  );
};
export default MovieCard;
