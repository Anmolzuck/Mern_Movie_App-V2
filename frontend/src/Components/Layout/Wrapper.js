import { Fragment } from "react";
import classes from "./Wrapper.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
