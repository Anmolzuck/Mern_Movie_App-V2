import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import tmbdApi, { category, movieType, tvType } from "../../api/tmbdApi";
import MovieCard from "./MovieCard";
import classes from "./MovieGrid.module.css";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [genresArr, setGenresArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();
  console.log(keyword);
  useEffect(() => {
    const getList = async () => {
      //   const params = {};
      // const genresArr=[]
      let response,
        genresResponse = null;
      if (keyword === undefined) {
        const params = {};
        try {
          genresResponse = await tmbdApi.getGenres(props.category);
          setGenresArr(genresResponse.data.genres);

          switch (props.category) {
            case category.movie:
              response = await tmbdApi.getMoviesList(movieType.upcoming, {
                params,
              });
              break;
            default:
              response = await tmbdApi.getTvList(tvType.popular, { params });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmbdApi.search(props.category, { params });
      }
      console.log(response);
      setItems(response.data.results);
      setTotalPage(response.data.total_pages);
    };
    getList();
  }, [keyword, props.category]);

  const loadMore = async () => {
    let response,
      genresResponse = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      try {
        genresResponse = await tmbdApi.getGenres(props.category);
        setGenresArr(genresResponse.data.genres);

        switch (props.category) {
          case category.movie:
            response = await tmbdApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmbdApi.getTvList(tvType.popular, { params });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmbdApi.search(props.category, { params });
    }
    setItems([...items, ...response.data.results]);
    setPage(page + 1);
  };

  return (
    <Fragment>
      <div className={classes["movieList-grid"]}>
        {items.map((item, i) => (
          <div className={`low ${classes["low-body"]}`}>
            <MovieCard
              item={item}
              category={props.category}
              genres={genresArr}
              key={i}
            />
          </div>
        ))}
      </div>
      <div className={classes["movieList-loadMore"]}>
        {page < totalPage ? (
          <button
            className={`${classes["btn-trailer"]} ${classes["btn-more"]}`}
            onClick={loadMore}
          >
            View more
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};
export const MovieSearch = () => {
  const history = useNavigate();
  // const { category } = useParams();
  // console.log(category);
  const c = window.location.href;
  const p = c.split("/");
  const k = p[3];

  console.log(k);
  const [query, setQuery] = useState("");
  const onChangeHandler = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.trim().length > 0) {
      history(`${k}/search/${query}`);
    }
    // else if (query.length === 0) {
    //   history.push(`/`);
    // }
  };

  return (
    <div className={classes["movie-search"]}>
      <input
        name="search"
        type="text"
        placeholder="Search by movie title"
        onChange={onChangeHandler}
        value={query}
      />
      <i
        className={`fas fa-search ${classes["search-btn"]}`}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default MovieGrid;
